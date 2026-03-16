---
name: pm:po-feature
description: Generate or update Product Owner documentation for a specific Feature
argument-hint: "<Feature-number>"
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
---

<objective>
Generate focused Product Owner documentation for a specific Feature. This creates a consolidated "Epic-like" state file in `.po/features/` to track current capabilities, upcoming work, and deferred ideas for the given feature.

**Reads:** `.pm/ROADMAP.md`, `.po/features/`
**Creates:** `.po/features/[padded-Feature]-[slug].md` (if it does not already exist)
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/po-feature.md
@~/.claude/ship-pm/templates/po-feature.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = Feature number (e.g., `1`, `2.1`)

**Prerequisites:** `.pm/ROADMAP.md` must exist and contain the given Feature. If not:
```
Error: Feature $ARGUMENTS not found in ROADMAP.md. Add it first using /pm:next-feature.
```
</context>

<process>
Execute the po-feature workflow from @~/.claude/ship-pm/workflows/po-feature.md end-to-end.
</process>
