---
name: portfolio-validator
description: Use when the user wants to review a portfolio artifact or assignment for completeness, reflection coverage, and source/reference integrity against this repo's AIML requirements.
---

# Portfolio Validator

## Overview

Use this skill to validate portfolio artifacts before submission. The goal is to find concrete gaps against the repo rules and assignment requirements, especially missing required sections, missing reflection drafts, or references that are weak, unused, or mislabeled.

## Workflow

1. Identify the course, assignment, artifact page, and any related reflection draft.
2. Read the relevant rules from `agent.md`.
3. Check the artifact page against the required field list for the course.
4. Confirm the artifact is a tangible, viewable deliverable rather than description-only.
5. Confirm a reflection draft exists under `reflection/<course>/` when the assignment requires one.
6. Review references carefully:
- verify references exist when external sources are used
- distinguish actual sources from tools
- flag references that were added as general support but were not actually used
- flag claims or tables that need stronger traceability
7. Report findings first, ordered by severity:
- missing required fields
- missing reflection coverage
- reference integrity problems
- weaker quality or clarity risks
8. If no findings remain, say that explicitly and note any remaining submission-time checks that cannot be verified from code alone.

## Validation Targets

For AIML-501 artifact pages, check for:
- Title
- Introduction
- Description
- Objective
- Process
- Tools and Technologies Used
- Value Proposition
- Unique Value
- Relevance
- References when applicable

For reflections, check for:
- stored under `reflection/<course>/`
- one file per assignment or artifact
- short, human-sounding first-person writing
- coverage of audience customization, lessons learned, and feedback/revisions without necessarily using sub-headings

## Writing Style For Reviews

- Be concrete and reference files directly.
- Do not invent rubric requirements that are not in the assignment or `agent.md`.
- Distinguish clearly between hard requirement gaps and optional quality improvements.
- Prefer “missing”, “present”, “cannot verify”, and “risk” over vague feedback.

## When Not To Use

Do not use this skill for drafting artifact content or reflections from scratch. This skill is for validation and review only.
