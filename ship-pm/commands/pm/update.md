---
name: pm:update
description: Check for PM Assistant updates and install them
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

<objective>
Check the npm registry for updates to PM Assistant, display the version jump, and ask the user if they want to update.

**Reads:** `VERSION` file in the installation directory
**Runs:** `npm show ship-pm version`
**Executes:** `npx ship-pm@latest`
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/update.md
</execution_context>

<process>
Execute the update workflow from @~/.claude/ship-pm/workflows/update.md end-to-end.
</process>
