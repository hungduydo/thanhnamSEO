---
name: local-image-gen
description: Generate PNG/JPG image assets locally using Ollama's experimental text-to-image models (FLUX.2 Klein or Z-Image Turbo) running on this machine. Use when the user asks to create, generate, mock up, or produce an image, icon, illustration, banner, or other visual asset and wants it made locally with the local Ollama model rather than a cloud image API. Requires Ollama installed, the model already pulled (e.g. `ollama run x/flux2-klein`), and currently only works on macOS (Ollama's image generation is macOS-only as of Jan 2026; Windows/Linux support is "coming soon").
---

# Local Image Generation (Ollama)

Wraps Ollama's experimental local text-to-image models so they can be called
non-interactively to produce asset files on disk.

## Prerequisites (verify before use)

1. Ollama is installed and the daemon is reachable (`ollama list` succeeds).
2. The image model has been pulled at least once, e.g. `ollama pull x/flux2-klein`
   (or `x/z-image-turbo`). First run also downloads weights (several GB) — this
   can take a while and should not be treated as a script failure.
3. macOS only for now. If the user is on Windows/Linux, tell them Ollama's image
   generation isn't available yet on their OS and stop.
4. Enough free disk/RAM/VRAM for the model (FLUX.2 Klein 4B needs ~13GB VRAM).

## How to generate an image

Run the bundled script (stdlib only — no `requests` or other deps needed):

```bash
python3 scripts/generate_image.py \
  --prompt "a minimalist icon of a paper airplane, flat design, white background" \
  --out ./assets/paper-airplane.png \
  --model x/flux2-klein:latest \
  --width 1024 --height 1024
```

Arguments:
- `--prompt` (required): the text-to-image prompt.
- `--out` (required): destination file path. Parent directories are created
  automatically.
- `--model` (optional, default `x/flux2-klein:latest`): any local Ollama
  image model tag that's already been pulled, e.g. `x/flux2-klein:4b`,
  `x/flux2-klein:9b`, or `x/z-image-turbo:latest` for photorealistic/
  bilingual text output. Run `ollama list` to see what's pulled.
- `--width` / `--height` (optional): pixel dimensions (defaults ~512-1024
  depending on model if omitted).
- `--steps` (optional): denoising steps. Fewer = faster/rougher, more =
  slower, can over-cook past the model's recommended count (~12 default).
- `--seed` (optional): integer for reproducible output.
- `--host` (optional, default `http://localhost:11434`): Ollama server URL.

The script prints the final file path on success, or a clear error to
stderr on failure (unreachable server, model not pulled, no image in
response, etc).

## How it works

It POSTs to Ollama's standard `/api/generate` endpoint — the same endpoint
used for text models — with the prompt plus `width`/`height`/`steps`/`seed`
as extra top-level fields. For image models, Ollama streams
newline-delimited JSON progress lines, and the final line (`"done": true`)
carries a base64-encoded PNG under the `"image"` key instead of the
`"response"` text key used by LLM completions. The script reads the stream
line by line, grabs that final `image` field, base64-decodes it, and writes
it to `--out`.

## Notes and caveats

- Generation can take anywhere from ~10s to a couple minutes on first call
  (model load) and depends on the machine's GPU/CPU.
- Negative prompts are supported in Ollama's interactive REPL via `/set
  negative ...`; the exact JSON field name for the HTTP API isn't confirmed
  here, so it's omitted from the script. If needed, test
  `"negative_prompt"` as an extra payload field and adjust the script.
- For reproducible brand assets, always pass `--seed` and note it down so the
  exact image can be regenerated later.
- Call the script once per image. For a batch of assets, loop over prompts
  and call it repeatedly rather than trying to batch in one request.
