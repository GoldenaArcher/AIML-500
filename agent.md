# AIML-501 Portfolio Reference

This file is a quick implementation guide for building and evaluating the AIML-501 portfolio content in this repo.

## Required Portfolio Sections

### 1) Digital Portfolio
- Purpose: Provide one shareable site where reviewers can quickly assess professional readiness.
- In this repo: Next.js site with a single home page and unified artifacts index.

### 2) Professional Bio
- Purpose: Introduce identity, background, and direction.
- Should answer:
  - Who are you professionally?
  - What relevant experience/skills do you bring?
  - What are your AI/ML aspirations and growth goals?
- Quality bar:
  - Specific role and years of experience
  - Concrete technical strengths
  - Forward-looking AIML-501 objective

### 3) Personal Value Proposition
- Purpose: State the unique value you deliver.
- Implement using a clear value proposition structure:
  - Audience: Who benefits from your work?
  - Need/Problem: What challenge do they have?
  - Offering: What do you create/do?
  - Differentiation: Why your approach is distinct?
  - Outcome: What measurable/practical impact results?
- Drafting steps (from IWU guide):
  - Identify your target audience (employer, client, or industry).
  - Define unique skills and strengths that differentiate you.
  - Translate those strengths into concrete audience benefits.
  - Write a concise 2-3 sentence statement with minimal jargon.
- Quality bar:
  - Avoid generic claims
  - Emphasize outcomes, clarity, and reuse

### 4) Artifacts (Minimum Five)
- Purpose: Evidence of applied competency and growth.
- Rule: Each entry must be a tangible deliverable, not description-only.

## Required Fields Per Artifact

Every AIML-501 artifact entry must include:
- Title
- Introduction
- Description
- Objective
- Process
- Tools and Technologies Used
- Value Proposition
- Unique Value
- Relevance
- References (if applicable)

## Route Structure Notes

- `app/artifacts/` is the source-of-truth content directory for artifact pages across courses.
- New artifact implementations should be created under `app/artifacts/<slug>/...`.
- Course-prefixed routes such as `app/aiml-500/artifacts/...` and `app/aiml-501/artifacts/...` exist only as route aliases for navigation, sharing, or course-specific URL structure.
- Do not build or maintain separate content copies under course-prefixed directories unless there is a route-specific behavior that cannot be handled by aliasing.
- For AIML-501 specifically:
  - `app/aiml-501/artifacts/[slug]/page.tsx` is an alias layer
  - `app/artifacts/<slug>/page.tsx` remains the real page implementation
- Nested special-case routes such as graphic/export views may keep a small explicit alias file if the framework route generation works better that way.
- Do not delete `app/aiml-500/artifacts` or `app/aiml-501/artifacts` as duplicates without first checking whether they are route aliases.

## Artifact-Specific Value Proposition Rule

For each artifact, add value proposition content that answers:
- Relevance: Why this artifact matters to its intended audience.
- Unique contribution: What this artifact demonstrates that other items do not.
- Alignment: How this artifact reinforces your personal value proposition.

Drafting steps:
- Determine artifact relevance and audience need.
- Draft a concise statement that combines unique value + relevance.

## Reflection Requirement (Submission Only)

- Reflection is required for each artifact but should be submitted in Brightspace text areas.
- Do not place reflection narratives inside the public portfolio artifact pages.
- Store local draft reflections in the repo under `reflection/<course>/`.
- Use one Markdown file per artifact or assignment.
- For AIML-501, use the pattern:
  - `reflection/aiml-501/assignment-<n>-<artifact-name>.md`
- Keep reflection drafts short, direct, and human-sounding.
- Avoid polished filler, repeated phrasing, and generic AI-style wording.
- Prefer 2-4 sentences per section unless the assignment explicitly asks for more detail.
- Default to 2-3 short paragraphs instead of sub-headings, unless the assignment explicitly requires labeled sections.
- The paragraphs should still cover audience customization, lessons learned, and feedback/revisions.
- Favor slightly uneven, natural phrasing over perfectly balanced paragraphs.
- Include small concrete observations from the actual work so the reflection reads like first-person experience, not a template.
- If no external feedback was actually received, do not add filler like "I have not received feedback yet"; just describe the revisions that were made.
- Prefer first-person opinions, preferences, and decisions when they are real (for example, "I prefer tabular comparison because it helps me see differences faster") instead of generic "I learned" statements.

## Suggested Review Checklist

Before finalizing each artifact:
- Confirm all required fields are present.
- Confirm value proposition is specific to audience and impact.
- Confirm process explains decisions, not only steps.
- Confirm references are included when external sources are used.
- Confirm artifact is downloadable/viewable evidence.

## AIML-501 Assignment 1 (ML Algorithm Framework)

Expected deliverable:
- One visual framework or infographic with at least 8-10 algorithms.
- For each algorithm include:
  - Learning type (supervised or unsupervised; reinforcement learning can be included where relevant)
  - Application domain (tabular data, computer vision, NLP, generative AI)
  - Real-world example or use case
  - Brief explanation of how it works

Implementation note in this repo:
- Route: `/artifacts/ml-algorithm-framework`
- Keep artifact page fields aligned with rubric:
  - Title, Introduction, Description, Objective, Process, Tools/Technologies Used, Value Proposition, Unique Value, Relevance, References.
