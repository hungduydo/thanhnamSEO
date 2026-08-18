#!/usr/bin/env python3
"""
generate_image.py — text-to-image via a local Ollama model (FLUX.2 Klein,
Z-Image Turbo, or any other Ollama image model tag), using Ollama's HTTP API.

Calls POST http://localhost:11434/api/generate with the prompt and optional
width/height/steps/seed. Ollama streams newline-delimited JSON progress
updates while the image is generated; the final line (once "done": true) for
an image model carries a base64-encoded PNG under the "image" key instead of
the "response" text key used by LLM models. This script reads that stream,
decodes the final image, and writes it to --out.

Usage:
  generate_image.py --prompt "..." --out ./assets/icon.png \
      [--model x/flux2-klein:latest] [--width 1024] [--height 1024] \
      [--steps 20] [--seed 42] [--host http://localhost:11434]

Prints the final output path on stdout on success. On failure, prints an
error to stderr and exits non-zero.
"""
import argparse
import base64
import json
import os
import sys
import urllib.error
import urllib.request


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--prompt", required=True, help="Text-to-image prompt")
    p.add_argument("--out", required=True, help="Destination file path for the generated image")
    p.add_argument("--model", default="x/flux2-klein:latest", help="Ollama image model tag (must already be pulled)")
    p.add_argument("--width", type=int, default=None)
    p.add_argument("--height", type=int, default=None)
    p.add_argument("--steps", type=int, default=None)
    p.add_argument("--seed", type=int, default=None)
    p.add_argument("--host", default="http://localhost:11434", help="Ollama server base URL")
    p.add_argument("--timeout", type=int, default=600, help="Seconds to wait for generation")
    args = p.parse_args()

    payload = {"model": args.model, "prompt": args.prompt, "stream": True}
    if args.width is not None:
        payload["width"] = args.width
    if args.height is not None:
        payload["height"] = args.height
    if args.steps is not None:
        payload["steps"] = args.steps
    if args.seed is not None:
        payload["seed"] = args.seed

    body = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        args.host.rstrip("/") + "/api/generate",
        data=body,
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    image_b64 = None
    last_progress = None
    try:
        with urllib.request.urlopen(req, timeout=args.timeout) as resp:
            for raw_line in resp:
                line = raw_line.decode("utf-8", errors="replace").strip()
                if not line:
                    continue
                try:
                    data = json.loads(line)
                except json.JSONDecodeError:
                    continue
                if data.get("error"):
                    sys.exit(f"Ollama error: {data['error']}")
                if "completed" in data and "total" in data:
                    last_progress = f"{data['completed']}/{data['total']} steps"
                if data.get("done") and data.get("image"):
                    image_b64 = data["image"]
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", errors="replace")
        sys.exit(f"HTTP {e.code} from Ollama at {args.host}: {detail}")
    except urllib.error.URLError as e:
        sys.exit(
            f"Could not reach Ollama at {args.host} ({e.reason}). "
            "Is `ollama serve` running?"
        )

    if not image_b64:
        extra = f" (last progress seen: {last_progress})" if last_progress else ""
        sys.exit(
            "Ollama finished without returning an image" + extra + ". "
            f"Check that '{args.model}' is pulled (`ollama pull {args.model}`) and "
            "is an image-generation model, and that this OS/Ollama version supports "
            "image generation (macOS only as of the Jan 2026 experimental release)."
        )

    out_path = os.path.abspath(args.out)
    out_dir = os.path.dirname(out_path)
    if out_dir:
        os.makedirs(out_dir, exist_ok=True)
    with open(out_path, "wb") as f:
        f.write(base64.b64decode(image_b64))

    print(out_path)


if __name__ == "__main__":
    main()
