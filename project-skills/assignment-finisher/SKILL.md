---
name: assignment-finisher
description: Use when the user says an assignment or artifact is finished and wants it prepared for submission, including validation and reflection drafting if needed.
---

# Assignment Finisher

## Overview

Use this skill when an assignment is ready for final review. It coordinates the local portfolio workflow so the artifact is checked first, then any missing reflection draft is created, and the result is reported as submission-ready or blocked by specific gaps.

## Workflow

1. Identify the course, assignment, artifact page, and any related reflection draft.
2. Read `agent.md` for the repo rules and assignment conventions.
3. Use the `portfolio-validator` skill to review:
- required artifact fields
- tangible/viewable artifact status
- reflection presence
- source/reference integrity
4. If the validator finds missing reflection coverage, use the `reflection-drafter` skill.
5. Re-check the reflection location and naming:
- `reflection/<course>/`
- one Markdown file per artifact or assignment
6. If the validator finds fixable content gaps, fix them when the task clearly asks for completion rather than review-only.
7. End with a short readiness summary:
- ready to submit
- ready except for external submission steps
- blocked by specific missing items

## Decision Rules

- Validation always comes first.
- Reflection drafting only happens when reflection is missing or the existing draft is clearly inadequate.
- Do not place reflection text in public portfolio pages.
- Do not invent assignment requirements beyond the assignment prompt and `agent.md`.

## Typical Triggers

Use this skill when the user says things like:
- finish this assignment
- finalize this artifact
- prepare this for submission
- check if this is ready to submit

## When Not To Use

Do not use this skill for early drafting or brainstorming. It is for end-of-assignment completion and submission checks.
