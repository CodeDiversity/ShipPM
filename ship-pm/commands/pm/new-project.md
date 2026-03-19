---
name: pm:new-project
description: Initialize a new PM project through conversational questioning
argument-hint: "[--auto]"
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

<objective>
Initialize a new PM project by understanding the builder's idea through deep questioning, then producing the project bible (PROJECT.md) and the unified ROADMAP.md.

**Creates:**
- `.pm/PROJECT.md` — project context, vision, and decisions
- `.pm/ROADMAP.md` — unified roadmap (v1 scope + backlog + ideas)

**After this command:** Run `/pm:next` to queue up the first work Feature.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/new-project.md
@~/.claude/ship-pm/references/questioning.md
@~/.claude/ship-pm/templates/project.md
@~/.claude/ship-pm/templates/roadmap.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/agents/pm-scoper.md
</execution_context>

<context>
**Flags:**
- `--auto` — Automatic mode. Expects an idea document via @ reference. Skips questioning, extracts context from the document, and generates project documents without interaction.
</context>

<process>
Execute the new-project workflow from @~/.claude/ship-pm/workflows/new-project.md end-to-end.
</process>
