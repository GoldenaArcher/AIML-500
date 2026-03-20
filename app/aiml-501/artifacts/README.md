# AIML-501 Route Alias Notes

- This directory exists to provide AIML-501-specific route aliases.
- It is not the primary content location for AIML-501 artifacts.
- Real AIML-501 artifact pages live under `app/artifacts/`.

Current design:

- `app/aiml-501/artifacts/[slug]/page.tsx` forwards to the real page implementation in `app/artifacts/<slug>/page.tsx`.
- Keep this directory lightweight.
- Do not create full duplicate artifact implementations here unless aliasing is not sufficient for a specific framework or routing constraint.
- The nested LLM `graphic` route is an example of a small explicit alias kept for route-generation compatibility.
