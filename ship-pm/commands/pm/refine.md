---
name: pm:refine
description: Conversational PM refinement for a specific feature idea
argument-hint: "[feature idea]"
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

<objective>
Act as a PM pairing with the user to flesh out a specific feature idea. Use questioning techniques to define the problem, happy path, edge cases, and scope cuts. Generate a consolidated feature specification.

**Reads:** `.pm/PROJECT.md`, `.pm/ROADMAP.md`
**Creates:** `.pm/features/[feature-name].md`
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/refine.md
@~/.claude/ship-pm/references/questioning.md
@~/.claude/ship-pm/agents/pm-scoper.md
</execution_context>

<context>
**Input:** `$ARGUMENTS` (The feature idea or name).
If no input provided, ask the user what feature they want to refine.

**Prerequisites:** `.pm/PROJECT.md` must exist. If not, exit with error telling them to run `/pm:new-project`.
</context>

<process>
Execute the refine workflow from @~/.claude/ship-pm/workflows/refine.md end-to-end.
</process>
