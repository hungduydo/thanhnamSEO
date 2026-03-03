# Claude integration constraints and usage for thanhnamSEO

Purpose
- Provide concise rules, prompts, and constraints so Claude-style agents produce correct, safe, and actionable outputs for this repo.

Project summary (short)
- This repository builds a Next.js (App Router) site for Thành Nam Oto focused on Local SEO (Xuân Lộc, Đồng Nai). Key areas: `app/` Next.js pages, `docs/` for strategy and tasks, image optimization, Metadata API, LocalBusiness JSON-LD, and Vercel deployment.

Basic operation rules for Claude
- Always ask a short clarifying question if the user's request is ambiguous or missing required details.
- Prefer minimal, incremental changes. Explain assumptions before making edits.
- When modifying files, follow repo style (TypeScript + Next.js App Router conventions). Use Server Components unless interactive behavior requires client components.
- Do not fabricate external data (analytics, domain ownership, real addresses) — use placeholders and call out where user input is required.

File access and edits
- Authorized to read any file in the repository. When writing, create or edit files only after confirming intent or following a clear user request.
- New documentation files should go under `docs/` and use Markdown.
- When creating code edits use the smallest patch needed and include a one-line summary of intent.

Prompting / system prompt templates
- System prompt (concise):
  - "You are an assistant helping to develop and document a Next.js (App Router) website for Thành Nam Oto focusing on Local SEO. Ask clarifying questions, avoid guessing, and make minimal, testable code changes."

- Example user-facing task prompt (for editing code):
  - "Add a `docs/claude.md` describing constraints for assistants. Keep it concise and include project summary, allowed actions, forbidden actions, and example prompts."

Behavior constraints (must-follow)
- Never execute external network requests, run remote builds, or access secrets.
- Do not commit or push changes to any remote repository; produce patches or suggested diffs only.
- Avoid producing content that violates privacy, law, or safety policies.

Coding and documentation style
- Keep changes small and focused. Use present-tense, imperative commit-like summaries.
- Wrap commands and filenames inline using backticks.
- When adding new files, include a short usage snippet if relevant (how to run or validate).

Testing and validation
- For code changes, include suggested local verification steps, e.g.:
  ```bash
  pnpm install
  pnpm dev
  # or
  npm install
  npm run dev
  ```
- For SEO-related changes (metadata, JSON-LD), recommend a minimal checklist: open page source, confirm metadata, validate JSON-LD at https://search.google.com/test/rich-results (user-run).

Examples (short)
- Good assistant response when asked to add a file:
  - "I will add `docs/claude.md` with rules and templates. Do you want the file in Vietnamese, English, or bilingual?"

- Good assistant response when asked to edit code:
  - "I'll update `app/layout.tsx` to include the LocalBusiness JSON-LD. I'll create a small server component `app/components/LocalBusinessJsonLd.tsx` and add it to the layout. Confirm and I'll apply the patch."

Forbidden behaviors
- Do not assume production domain, credentials, or live analytics data.
- Do not remove or rewrite large sections of documentation without explicit user approval.

On follow-ups and reporting
- After any batch of file reads or edits, report: what was read/changed (file list), why, and next recommended action.
- If multiple edits are required, propose a short plan (2-6 steps) and use the repo's `docs/TASKS.md` to map tasks where appropriate.

Maintenance notes
- Keep this file lightweight and editable. If the team prefers Vietnamese or other formatting, update accordingly.

Location
- Place this file at `docs/claude.md` (this file).

---
Generated: 2026-03-03
