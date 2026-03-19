---
name: pm:cut-scope
description: Move MVP features to the backlog or ideas to accelerate launch
argument-hint: "[feature to cut]"
allowed-tools:
  - Read
  - Write
  - AskUserQuestion
---

<objective>
Remove items from ROADMAP.md's "The MVP (v1)" section and move them to "Horizon 2" (Backlog) or "Cut Scope" (Deferred). Log the cut as a decision.

**Reads:** `.pm/ROADMAP.md`
**Updates:** `.pm/ROADMAP.md`, `.pm/DECISIONS.md`

**When to run:** When you want to ship sooner, when a feature is harder than expected, or when you realize something isn't "minimum viable."
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/cut-scope.md
@~/.claude/ship-pm/references/pm-philosophy.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = optional specific feature to cut.

If no arguments, analyze the MVP list and suggest features to cut based on the PM philosophy (ship-first, minimum viable).
</context>

<process>
Execute the cut-scope workflow from @~/.claude/ship-pm/workflows/cut-scope.md end-to-end.
</process>
