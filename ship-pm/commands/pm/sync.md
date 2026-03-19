---
name: pm:sync
description: Review codebase and update roadmap completion status
argument-hint: "[Feature-number]"
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
---

<objective>
Scan the codebase after a Feature (or any build milestone), identify implemented features, and update ROADMAP.md with completion status (✅, ⚠️, ❌).

**Reads:** `.pm/PROJECT.md`, `.pm/ROADMAP.md`, codebase
**Updates:** `.pm/ROADMAP.md`

**When to run:** After completing a milestone, after finishing a task, or anytime you want PM state to match reality.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/sync.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/references/pm-philosophy.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = optional Feature number (for display purposes).

**Prerequisites:** `.pm/PROJECT.md` must exist.
</context>

<process>
Execute the sync workflow from @~/.claude/ship-pm/workflows/sync.md end-to-end.
</process>
