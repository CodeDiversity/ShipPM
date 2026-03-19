---
name: pm:next
description: Identify the next logical Feature from the MVP scope and append it to ROADMAP.md
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
---

<objective>
Analyze the ROADMAP.md, identify the next highest-priority chunk of work from "The MVP (v1)" section, and append its detailed specification to the "Feature Details" section.

**Reads:** `.pm/PROJECT.md`, `.pm/ROADMAP.md`
**Updates:** `.pm/ROADMAP.md`

**After this command:** Run `/pm:brief` to generate the execution document.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/next.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/references/prioritization.md
</execution_context>

<context>
**Prerequisites:** `.pm/ROADMAP.md` must exist.

**When all MVP items are completed/assigned:**
```
All MVP items have been queued. Run /pm:ship-check to verify launch readiness.
```
</context>

<process>
Execute the next workflow from @~/.claude/ship-pm/workflows/next.md end-to-end.
</process>
