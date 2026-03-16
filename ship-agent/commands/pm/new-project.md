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
Initialize a new PM project by understanding the builder's idea through deep questioning (or by migrating from an existing GSD deployment), then producing PROJECT.md and SCOPE.md.

**Creates:**
- `.pm/PROJECT.md` — project context document
- `.pm/SCOPE.md` — MVP scope definition
- `.pm/STATE.md` — project tracking state
- `.pm/DECISIONS.md` — decision log (initialized)

**After this command:** Run `/pm:next-feature` to queue up the first work Feature.
</objective>

<execution_context>
@~/.claude/ship-agent/workflows/new-project.md
@~/.claude/ship-agent/references/questioning.md
@~/.claude/ship-agent/templates/project.md
@~/.claude/ship-agent/templates/scope.md
@~/.claude/ship-agent/agents/pm-strategist.md
@~/.claude/ship-agent/agents/pm-scoper.md
</execution_context>

<context>
**Flags:**
- `--auto` — Automatic mode. Expects an idea document via @ reference. Skips questioning, extracts context from the document, and generates PROJECT.md + SCOPE.md without interaction.

If `--auto` is used without a document:
```
Error: --auto requires an idea document.

Usage:
  /pm:new-project --auto @your-idea.md
  /pm:new-project --auto [paste or write your idea here]
```

**Auto-Migration:**
If Ship Agent detects a legacy `.planning/PROJECT.md` file (from a GSD execution installation), it will automatically skip questioning and migrate the engineering facts into a formal `.pm` product layer.
</context>

<process>
Execute the new-project workflow from @~/.claude/ship-agent/workflows/new-project.md end-to-end.
Preserve all workflow gates (questioning, approval, scoping).
</process>
