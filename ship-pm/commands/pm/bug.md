---
name: pm:bug
description: Log a bug report, evaluate its severity, and queue it for prioritization
argument-hint: "[bug description]"
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

<objective>
Capture a bug report, assess its severity, and append it to BUGS.md. Logs the discovery in the project bible.

**Reads:** `.pm/PROJECT.md`, `.pm/BUGS.md` (if exists)
**Creates/Updates:** `.pm/BUGS.md`, `.pm/PROJECT.md`
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/bug.md
@~/.claude/ship-pm/agents/pm-strategist.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = optional description of the bug.

**Prerequisites:** `.pm/PROJECT.md` must exist.
</context>

<process>
Execute the bug workflow from @~/.claude/ship-pm/workflows/bug.md end-to-end.
</process>
