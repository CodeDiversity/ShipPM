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
Generate focused Product Owner documentation for a specific Feature. This creates a dedicated structure for the PO to track current capabilities, desired enhancements, and deferred ideas for the given feature.

**Reads:** `.pm/ROADMAP.md`, `.pm/features/`
**Creates:** `.pm/features/[padded-Feature]-[slug]/po/current.md`, `po/desired.md`, `po/deferred.md` (if they do not already exist)
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/po-feature.md
@~/.claude/ship-pm/templates/po-feature-current.md
@~/.claude/ship-pm/templates/po-feature-desired.md
@~/.claude/ship-pm/templates/po-feature-deferred.md
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
