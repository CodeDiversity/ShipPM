---
name: pm:roadmap
description: Research product space and suggest features for the roadmap
argument-hint: "[--refresh]"
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
Analyze what's been built, research the product space and competitors, and generate a prioritized roadmap of suggested features for future development, including capturing long-term ideas and moonshots. Balances ambition with the ship-first philosophy.

**Reads:** `.pm/PROJECT.md`, `.pm/SCOPE.md`, `.pm/FEATURES.md`, `.pm/ARCHITECTURE.md`, codebase
**Creates/Updates:** `.pm/ROADMAP.md`

**When to run:** After v1 launch, after `/pm:sync`, or anytime you want strategic direction on what to build next.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/roadmap.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/references/pm-philosophy.md
@~/.claude/ship-pm/references/prioritization.md
@~/.claude/ship-pm/templates/roadmap.md
</execution_context>

<context>
**Flags:**
- `--refresh` — Re-research and regenerate even if ROADMAP.md exists.

**Prerequisites:** `.pm/PROJECT.md` must exist. If not:
```
Error: No project found. Run /pm:new-project first.
```
</context>

<process>
Execute the roadmap workflow from @~/.claude/ship-pm/workflows/roadmap.md end-to-end.
</process>
