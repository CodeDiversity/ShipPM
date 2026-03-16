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

**Reads:** `.pm/PROJECT.md`, `.pm/SCOPE.md`, codebase
**Creates:** `.pm/audits/SHIP-CHECK-[timestamp].md`

**After this command:** Fix blockers and re-run, or ship.
</objective>

<execution_context>
@~/.claude/ship-agent/workflows/ship-check.md
@~/.claude/ship-agent/agents/pm-auditor.md
@~/.claude/ship-agent/references/launch-checklist.md
@~/.claude/ship-agent/templates/ship-check.md
</execution_context>

<context>
**Prerequisites:** `.pm/PROJECT.md` must exist. If not:
```
Error: No project found. Run /pm:new-project first.
```
</context>

<process>
Execute the ship-check workflow from @~/.claude/ship-agent/workflows/ship-check.md end-to-end.
</process>
