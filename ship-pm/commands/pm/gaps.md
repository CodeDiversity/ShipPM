---
name: pm:gaps
description: Deeply inspect the codebase to find missing features or gaps in logic
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
---

<objective>
Perform a forensic scan of the actual codebase to find what's missing, half-built, or inconsistent with the ROADMAP.md.

**Reads:** `.pm/ROADMAP.md`, codebase
**Creates:** `.pm/audits/GAPS-[timestamp].md`

**When to run:** When you suspect things are half-finished, or before a major launch.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/gaps.md
@~/.claude/ship-pm/agents/pm-forensic.md
</execution_context>

<process>
Execute the gaps workflow from @~/.claude/ship-pm/workflows/gaps.md end-to-end.
</process>
