---
name: pm:review
description: Review a completed Feature against ROADMAP and SCOPE requirements
argument-hint: "<Feature-number>"
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
---

<objective>
Evaluate whether a completed Feature actually meets the requirements and success criteria defined in the ROADMAP and SCOPE. Inspect the actual codebase — do not trust blindly that the coding agent finished successfully.

**Reads:** `.pm/ROADMAP.md`, `.pm/SCOPE.md`, codebase, `.pm/briefs/`
**Creates:** `.pm/reviews/FEATURE-[X]-REVIEW.md`

**After this command:** Fix any reported gaps manually or with your execution agent, or move on to `/pm:next-feature`.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/review.md
@~/.claude/ship-pm/agents/pm-reviewer.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = Feature number (e.g., `1`, `2.1`)

**Prerequisites:** Target Feature must exist in ROADMAP.md. If not:
```
Error: Feature $ARGUMENTS not found.
```
</context>

<process>
Execute the review workflow from @~/.claude/ship-pm/workflows/review.md end-to-end.
</process>
