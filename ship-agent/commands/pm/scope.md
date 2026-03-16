---
name: pm:scope
description: Generate or regenerate MVP scope from project context
argument-hint: "[--regen]"
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

<objective>
Generate a tightly scoped MVP definition from the project context in `.pm/PROJECT.md`.

**Reads:** `.pm/PROJECT.md`
**Creates:** `.pm/SCOPE.md`
**Updates:** `.pm/STATE.md`

**After this command:** Run `/pm:next-feature` to queue up Features from the scope.
</objective>

<execution_context>
@~/.claude/ship-agent/workflows/scope.md
@~/.claude/ship-agent/agents/pm-scoper.md
@~/.claude/ship-agent/references/scope-patterns.md
@~/.claude/ship-agent/references/pm-philosophy.md
@~/.claude/ship-agent/templates/scope.md
</execution_context>

<context>
**Flags:**
- `--regen` — Regenerate scope even if SCOPE.md already exists.

**Prerequisites:** `.pm/PROJECT.md` must exist. If not, error:
```
Error: No project found. Run /pm:new-project first.
```
</context>

<process>
Execute the scope workflow from @~/.claude/ship-agent/workflows/scope.md end-to-end.
</process>
