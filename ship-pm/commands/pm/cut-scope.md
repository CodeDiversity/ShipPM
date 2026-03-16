---
name: pm:cut-scope
description: Remove scope items to simplify and accelerate launch
argument-hint: "[item to cut]"
allowed-tools:
  - Read
  - Write
  - AskUserQuestion
---

<objective>
Remove items from SCOPE.md's "In Scope" section and move them to appropriate sections (Out of Scope or Later). Log the cut as a decision.

**Reads:** `.pm/SCOPE.md`
**Updates:** `.pm/SCOPE.md`, `.pm/DECISIONS.md`
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/cut-scope.md
@~/.claude/ship-pm/references/pm-philosophy.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = optional specific item to cut.

If no arguments, analyze SCOPE.md and suggest scope items to cut based on the PM philosophy (ship-first, minimum viable).
</context>

<process>
Execute the cut-scope workflow from @~/.claude/ship-pm/workflows/cut-scope.md end-to-end.
</process>
