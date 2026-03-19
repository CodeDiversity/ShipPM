---
name: pm:prioritize
description: Re-rank roadmap features based on new information
argument-hint: "[--auto]"
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

<objective>
Re-evaluate and re-rank the features in ROADMAP.md based on new signals: user feedback, market changes, or the builder's gut feeling.

**Reads:** `.pm/ROADMAP.md`, `.pm/FEEDBACK.md` (if exists)
**Updates:** `.pm/ROADMAP.md`, `.pm/PROJECT.md`
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/prioritize.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/references/prioritization.md
@~/.claude/ship-pm/references/pm-philosophy.md
</execution_context>

<context>
**Flags:**
- `--auto` — Skip interactive discussion.

**Prerequisites:** `.pm/ROADMAP.md` must exist.
</context>

<process>
Execute the prioritize workflow from @~/.claude/ship-pm/workflows/prioritize.md end-to-end.
</process>
