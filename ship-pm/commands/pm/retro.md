---
name: pm:retro
description: Run a post-feature retrospective to improve future scoping
argument-hint: "<feature-id>"
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

<objective>
After completing and reviewing a feature, reflect on what went well, what didn't, and what to do differently next time. Captures lessons learned and feeds them back into the PM process for better future scoping.

**Reads:** `.pm/ROADMAP.md`, `.pm/briefs/`, `.pm/reviews/`, `.pm/SCOPE.md`
**Creates:** `.pm/retros/FEATURE-[X]-RETRO.md`
**Updates:** `.pm/DECISIONS.md` (appends key learnings)

**When to run:** After `/pm:review` on a completed feature.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/retro.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/references/pm-philosophy.md
</execution_context>

<context>
**Arguments:** `$ARGUMENTS` = feature number (e.g., `1`, `2`)

**Prerequisites:** A review must exist for this feature. If not:
```
Error: No review found for Feature $ARGUMENTS. Run /pm:review first.
```
</context>

<process>
Execute the retro workflow from @~/.claude/ship-pm/workflows/retro.md end-to-end.
</process>
