---
name: pm:decision
description: Log a product decision and rationale in the project bible
argument-hint: "[description]"
allowed-tools:
  - Read
  - Write
  - AskUserQuestion
---

<objective>
Capture a specific product decision, its context, and the rationale behind it. Appends the decision to the "Decisions & Learnings" table in PROJECT.md.

**Reads:** `.pm/PROJECT.md`
**Updates:** `.pm/PROJECT.md`
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/decision.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = optional description of the decision.

**Prerequisites:** `.pm/PROJECT.md` must exist.
</context>

<process>
Execute the decision workflow from @~/.claude/ship-pm/workflows/decision.md end-to-end.
</process>
