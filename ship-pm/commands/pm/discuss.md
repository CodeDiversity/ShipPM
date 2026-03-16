---
name: pm:discuss
description: Discuss a new feature idea and decide if it belongs on the roadmap
argument-hint: "[feature idea]"
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

<objective>
Engage in a critical discussion about a new feature idea. The PM acts as a devil's advocate and strategy partner. If both the builder and the PM agree the idea is valuable and fits the product's core mission, it gets added to the Roadmap.

**Reads:** `.pm/PROJECT.md`, `.pm/SCOPE.md`, `.pm/ROADMAP.md`
**Updates:** `.pm/ROADMAP.md`, `.pm/DECISIONS.md`

**When to run:** When you have a "shower thought" or a feature request that you're not sure about yet.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/discuss.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/references/pm-philosophy.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = The feature idea to discuss. If empty, the PM will ask for the topic.

**Prerequisites:** `.pm/PROJECT.md` must exist.
</context>

<process>
Execute the discussion workflow from @~/.claude/ship-pm/workflows/discuss.md end-to-end.
</process>
