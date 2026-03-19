---
name: pm:ideas
description: Suggest new product directions or discuss a specific feature idea
argument-hint: "[feature idea or --refresh]"
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
  - WebSearch
  - AskUserQuestion
---

<objective>
Generate new product ideas based on the current state and market, or engage in a critical discussion about a specific feature idea. Replaces long-term "roadmapping" with a lean discovery process.

**Reads:** `.pm/PROJECT.md`, `.pm/ROADMAP.md`, codebase
**Updates:** `.pm/ROADMAP.md`, `.pm/PROJECT.md` (logs the decision)

**When to run:** When you need fresh ideas, want to discuss a new feature, or want to see what competitors are doing.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/ideas.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/references/pm-philosophy.md
@~/.claude/ship-pm/references/prioritization.md
@~/.claude/ship-pm/templates/roadmap.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS`
- `[feature idea]` — Discuss a specific idea. The PM will act as a strategy partner.
- `--refresh` — Research the market and suggest 3-5 new high-impact features.
- [empty] — If no args, the PM will ask if you want to brainstorm or discuss something specific.

**Prerequisites:** `.pm/PROJECT.md` must exist.
</context>

<process>
Execute the ideas workflow from @~/.claude/ship-pm/workflows/ideas.md end-to-end.
</process>
