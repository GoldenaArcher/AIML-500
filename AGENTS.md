# AGENTS.md instructions for /Users/luhan/study/IWU/AIML-500

## Skills
A skill is a set of local instructions to follow that is stored in a `SKILL.md` file. Below is the list of skills that can be used. Each entry includes a name, description, and file path so you can open the source for full instructions when using a specific skill.

### Available skills
- assignment-finisher: Use when the user says an assignment or artifact is finished and wants it prepared for submission, including validation and reflection drafting if needed. (file: /Users/luhan/study/IWU/AIML-500/project-skills/assignment-finisher/SKILL.md)
- reflection-drafter: Use when the user wants to draft or revise private course reflection text for Brightspace or similar submissions, especially for portfolio artifacts that need short, human-sounding reflections covering audience, lessons learned, and revisions. (file: /Users/luhan/study/IWU/AIML-500/project-skills/reflection-drafter/SKILL.md)
- portfolio-validator: Use when the user wants to review a portfolio artifact or assignment for completeness, reflection coverage, and source/reference integrity against this repo's AIML requirements. (file: /Users/luhan/study/IWU/AIML-500/project-skills/portfolio-validator/SKILL.md)

### How to use skills
- Discovery: The list above is the skills available in this project. Skill bodies live on disk at the listed paths.
- Trigger rules: If the user names a skill (with `$SkillName` or plain text) OR the task clearly matches a skill's description shown above, use that skill for that turn.
- Missing/blocked: If a named skill is unavailable, continue with the best fallback.
- How to use a skill:
  1. Open its `SKILL.md`.
  2. Read only enough to follow the workflow.
  3. Prefer the skill's file conventions over inventing new ones.
