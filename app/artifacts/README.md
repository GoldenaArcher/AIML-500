# Artifacts Route Notes

- This directory is the source of truth for artifact page implementations.
- All real artifact content should live under `app/artifacts/<slug>/`.
- Keep artifact-specific components, data helpers, and special views such as `graphic/` under the same artifact folder here.
- The unified artifacts index also points here.

Important:

- Course-prefixed directories such as `app/aiml-500/artifacts/` and `app/aiml-501/artifacts/` are alias route layers, not separate content trees.
- Do not move artifact implementations out of this directory into course-prefixed folders.
- If an artifact needs a course-specific URL, add or update an alias route instead of duplicating the page implementation.
