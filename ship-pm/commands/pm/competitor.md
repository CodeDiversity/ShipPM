---
name: pm:competitor
description: Run a standalone competitive analysis and save it for reference
argument-hint: "[competitor name or category]"
allowed-tools:
  - Read
  - Write
  - Bash
  - WebSearch
  - AskUserQuestion
---

<objective>
Research the competitive landscape for the product, analyze specific competitors or the category as a whole, and produce a structured analysis that informs product decisions.

**Reads:** `.pm/PROJECT.md`, `.pm/SCOPE.md`, `.pm/COMPETITORS.md` (if exists)
**Creates/Updates:** `.pm/COMPETITORS.md`

**When to run:** Before making major product decisions, before roadmap planning, or when a new competitor emerges.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/competitor.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/references/pm-philosophy.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = optional competitor name or product category to research. If empty, research the general category.

**Prerequisites:** `.pm/PROJECT.md` must exist. If not:
```
Error: No project found. Run /pm:new-project first.
```
</context>

<process>
Execute the competitor workflow from @~/.claude/ship-pm/workflows/competitor.md end-to-end.
</process>
