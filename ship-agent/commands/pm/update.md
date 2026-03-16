---
name: pm:update
description: Check for Ship Agent updates and install them
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
---

<objective>
Check the npm registry for updates to Ship Agent, display the version jump, and ask the user if they want to update.

**Reads:** `VERSION` file in the installation directory
**Runs:** `npm show ship-agent version`
**Executes:** `npx ship-agent@latest`
</objective>

<execution_context>
@~/.claude/ship-agent/workflows/update.md
</execution_context>

<process>
Execute the update workflow from @~/.claude/ship-agent/workflows/update.md end-to-end.
</process>
