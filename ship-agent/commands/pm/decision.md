---
name: pm:decision
description: Log a product decision with rationale
argument-hint: "[description]"
allowed-tools:
  - Read
  - Write
  - AskUserQuestion
---

<objective>
Log a product decision with its context, rationale, and alternatives considered. Appends to `.pm/DECISIONS.md`.

**Reads:** `.pm/DECISIONS.md`
**Updates:** `.pm/DECISIONS.md`
</objective>

<execution_context>
@~/.claude/ship-agent/workflows/decision.md
@~/.claude/ship-agent/templates/decision.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = optional description of the decision.

If no arguments provided, ask the user:
- "What decision did you make?"
- "Why this choice? What alternatives did you consider?"
</context>

<process>
Execute the decision workflow from @~/.claude/ship-agent/workflows/decision.md end-to-end.
</process>
