---
name: pm:sync
description: Review codebase after a Feature and update feature state
argument-hint: "[Feature-number]"
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
---

<objective>
Scan the codebase after a Feature (or any build milestone), catalog all implemented features, update SCOPE.md with completion status, and write a living FEATURES.md that tracks what the app actually does.

**Reads:** `.pm/PROJECT.md`, `.pm/SCOPE.md`, `.pm/FEATURES.md` (if exists), codebase, `.pm/` (if execution artifacts exist)
**Creates/Updates:** `.pm/FEATURES.md`, `.pm/STATE.md`, `.pm/SCOPE.md` (marks completed items)

**When to run:** After completing a milestone, after finishing a task, or anytime you want PM state to match reality.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/sync.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/references/pm-philosophy.md
@~/.claude/ship-pm/templates/features.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = optional Feature number (for display purposes).

**Prerequisites:** `.pm/PROJECT.md` must exist. If not:
```
Error: No project found. Run /pm:new-project first.
```
</context>

<process>
Execute the sync workflow from @~/.claude/ship-pm/workflows/sync.md end-to-end.
</process>
