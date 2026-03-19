---
name: pm:ship-check
description: Run launch readiness audit on the codebase
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
---

<objective>
Scan the codebase for launch readiness across auth, security, legal, ops, testing, and UX. Produce an audit report with blockers, warnings, and positive signals.

**Reads:** `.pm/PROJECT.md`, `.pm/ROADMAP.md`, codebase
**Creates:** `.pm/audits/SHIP-CHECK-[timestamp].md`

**After this command:** Fix blockers and re-run, or ship.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/ship-check.md
@~/.claude/ship-pm/agents/pm-auditor.md
@~/.claude/ship-pm/references/launch-checklist.md
@~/.claude/ship-pm/templates/ship-check.md
</execution_context>

<context>
**Prerequisites:** `.pm/PROJECT.md` must exist. If not:
```
Error: No project found. Run /pm:new-project first.
```
</context>

<process>
Execute the ship-check workflow from @~/.claude/ship-pm/workflows/ship-check.md end-to-end.
</process>
