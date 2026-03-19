---
name: pm:brief
description: Generate design and technical context for a specific Feature
argument-hint: "<Feature-number>"
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
---

<objective>
Transform a high-level ROADMAP Feature into an actionable `-BRIEF.md` file that an execution agent can load natively. This acts as the formal design and engineering handoff from the PM to the Execution Agent.

**Reads:** `.pm/ROADMAP.md`, `.pm/PROJECT.md`, `.pm/ROADMAP.md`, `.pm/features/`
**Creates:** `.pm/briefs/[padded-Feature]-[slug]/[padded-Feature]-BRIEF.md`

**After this command:** Run your execution agent to plan the given Feature.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/brief.md
@~/.claude/ship-pm/agents/pm-brief-writer.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = Feature number (e.g., `1`, `2.1`)

**Prerequisites:** `.pm/ROADMAP.md` must exist and contain the given Feature. If not:
```
Error: Feature $ARGUMENTS not found in ROADMAP.md. Add it first using /pm:next.
```
</context>

<process>
Execute the brief workflow from @~/.claude/ship-pm/workflows/brief.md end-to-end.
</process>
