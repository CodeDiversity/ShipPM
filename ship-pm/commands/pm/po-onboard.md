---
name: pm:po-onboard
description: Generate an onboarding document for the Product Owner
allowed-tools:
  - Read
  - Write
  - Bash
---

<objective>
Generate a comprehensive `.pm/PO_ONBOARDING.md` document to get a new Product Owner up to speed on the project. This document synthesizes existing project knowledge and provides a foundation for the PO's own research.

**Reads:** `.pm/PROJECT.md`, `.pm/SCOPE.md`, `.pm/ROADMAP.md`
**Creates:** `.pm/PO_ONBOARDING.md`
</objective>

<execution_context>
@~/.claude/ship-pm/workflows/po-onboard.md
@~/.claude/ship-pm/templates/po-onboarding.md
</execution_context>

<process>
Execute the po-onboard workflow from @~/.claude/ship-pm/workflows/po-onboard.md end-to-end.
</process>
