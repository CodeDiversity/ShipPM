---
name: pm:user-feedback
description: Log user feedback and surface patterns that should influence the roadmap
argument-hint: "[feedback text]"
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

<objective>
Capture real user feedback, tag it by feature area and sentiment, and surface recurring patterns. The PM uses this to make data-driven roadmap decisions instead of guessing what users want.

**Reads:** `.pm/PROJECT.md`, `.pm/ROADMAP.md`, `.pm/ROADMAP.md`, `.pm/FEEDBACK.md` (if exists)
**Creates/Updates:** `.pm/FEEDBACK.md`

**When to run:** After receiving feedback from a user, reading a support ticket, or noticing a pattern in usage data.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/user-feedback.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/references/pm-philosophy.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = optional feedback text. If empty, the PM will ask for it interactively.

**Prerequisites:** `.pm/PROJECT.md` must exist. If not:
```
Error: No project found. Run /pm:new-project first.
```
</context>

<process>
Execute the user-feedback workflow from @~/.claude/ship-pm/workflows/user-feedback.md end-to-end.
</process>
