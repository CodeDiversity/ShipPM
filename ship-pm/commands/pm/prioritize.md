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
Re-evaluate and re-rank the features in ROADMAP.md based on new signals: user feedback, market changes, completed work, or the builder's gut feeling. Produces a revised priority order.

**Reads:** `.pm/ROADMAP.md`, `.pm/FEEDBACK.md` (if exists), `.pm/SCOPE.md`, `.pm/STATE.md`
**Updates:** `.pm/ROADMAP.md`, `.pm/DECISIONS.md`

**When to run:** After logging user feedback, after a market shift, or whenever priorities feel off.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/prioritize.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/references/prioritization.md
@~/.claude/ship-pm/references/pm-philosophy.md
</execution_context>

<context>
**Flags:**
- `--auto` — Skip interactive discussion and let the PM rank automatically based on available signals.

**Prerequisites:** `.pm/ROADMAP.md` must exist. If not:
```
Error: No roadmap found. Run /pm:scope and /pm:next-feature first.
```
</context>

<process>
Execute the prioritize workflow from @~/.claude/ship-pm/workflows/prioritize.md end-to-end.
</process>
