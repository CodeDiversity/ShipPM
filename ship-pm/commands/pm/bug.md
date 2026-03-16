---
name: pm:bug
description: Log a bug report, evaluate its severity, and queue it for prioritization
argument-hint: "[bug description]"
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

<objective>
Capture a bug report, assess its severity (Critical, High, Medium, Low), and append it to `.pm/BUGS.md`. This ensures defects are tracked alongside feature work and can be properly prioritized against the roadmap.

**Reads:** `.pm/PROJECT.md`, `.pm/BUGS.md` (if exists)
**Creates/Updates:** `.pm/BUGS.md`

**When to run:** When a defect is discovered during testing, reported by a user, or found in production.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/bug.md
@~/.claude/ship-pm/agents/pm-strategist.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = optional description of the bug.

If no arguments are provided, ask the user interactively:
- "What is the bug?"
- "What is the expected behavior vs actual behavior?"
- "How easily can this be reproduced?"

**Prerequisites:** `.pm/PROJECT.md` must exist. If not:
```
Error: No project found. Run /pm:new-project first.
```
</context>

<process>
Execute the bug workflow from @~/.claude/ship-pm/workflows/bug.md end-to-end.
</process>
