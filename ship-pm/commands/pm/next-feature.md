---
name: pm:next-feature
description: Scope the next logical Feature of work and append it to ROADMAP.md
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
---

<objective>
Analyze the project scope, identify the next highest-priority chunk of work, and append it to `.pm/ROADMAP.md` as a formally defined Feature.

**Reads:** `.pm/PROJECT.md`, `.pm/SCOPE.md`, `.pm/ROADMAP.md`
**Updates:** `.pm/ROADMAP.md`

**After this command:** Feed the Feature to your execution agent by running its planning command.
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/next-feature.md
@~/.claude/ship-pm/agents/pm-strategist.md
@~/.claude/ship-pm/references/prioritization.md
</execution_context>

<context>
**Prerequisites:** `.pm/SCOPE.md` must exist. If not:
```
Error: No scope found. Run /pm:scope first.
```

**When all scope items are completed/assigned:**
```
All scope items have been queued. Run your execution agent to finish building, or /pm:ship-check to verify launch readiness.
```
</context>

<process>
Execute the next-feature workflow from @~/.claude/ship-pm/workflows/next-feature.md end-to-end.
</process>
