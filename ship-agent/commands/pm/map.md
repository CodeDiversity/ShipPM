---
name: pm:map
description: Scan codebase and produce architecture documentation with diagrams
argument-hint: "[--regen]"
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
---

<objective>
Scan the codebase to discover and document the application architecture: service boundaries, third-party integrations, data flow, deployment topology, and key design patterns. Produces a living ARCHITECTURE.md with mermaid diagrams.

**Reads:** `.pm/PROJECT.md`, codebase, config files, package manifests
**Creates/Updates:** `.pm/ARCHITECTURE.md`

**When to run:** After initial scaffolding, after major structural changes, or anytime architecture needs to be documented. Also runs automatically as part of `/pm:sync` if ARCHITECTURE.md doesn't exist yet.
</objective>

<execution_context>
@~/.claude/ship-agent/workflows/map.md
@~/.claude/ship-agent/agents/pm-strategist.md
@~/.claude/ship-agent/templates/architecture.md
</execution_context>

<context>
**Flags:**
- `--regen` — Regenerate from scratch even if ARCHITECTURE.md exists.

**Prerequisites:** Codebase must exist. If empty project:
```
Error: No code to analyze. Build something first.
```
</context>

<process>
Execute the map workflow from @~/.claude/ship-agent/workflows/map.md end-to-end.
</process>
