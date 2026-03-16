---
name: pm:audit
description: Deeply inspect the codebase to find gaps, tech debt, and incomplete features
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
---

<objective>
Perform a deep, forensic audit of the actual codebase to find what's missing, what's half-built, and where tech debt is accumulating. Compare reality against the ROADMAP and SCOPE.

**Reads:** `.pm/ROADMAP.md`, `.pm/SCOPE.md`, `.pm/STATE.md`, codebase
**Creates/Updates:** `.pm/audits/AUDIT-[timestamp].md`

**When to run:** When you lose track of what's actually done, before a major launch, or when you suspect the execution agent left things half-finished.
</objective>

<execution_context>
@~/.claude/ship-agent/workflows/audit.md
@~/.claude/ship-agent/agents/pm-forensic.md
</execution_context>

<context>
**Prerequisites:** `.pm/PROJECT.md` must exist.
</context>

<process>
Execute the audit workflow from @~/.claude/ship-agent/workflows/audit.md end-to-end.
</process>
