# Workflow: PO Onboarding

## 1. Check Prerequisites

Ensure the following files exist in the `.pm/` directory:
- `PROJECT.md`
- `SCOPE.md`

If they do not exist:
```
Error: Missing core PM documents. Run /pm:new-project first.
```
Exit.

## 2. Synthesize Project Context

1. Read `.pm/PROJECT.md` to understand the overarching goal, target users, and stack.
2. Read `.pm/SCOPE.md` to understand the current MVP boundaries.
3. Read `.pm/ROADMAP.md` (if it exists) to grasp the future direction.

## 3. Generate Onboarding Document

Using the template from `@~/.claude/ship-pm/templates/po-onboarding.md`, generate `.pm/PO_ONBOARDING.md`.

**Generation Rules:**
- Synthesize the application overview directly from PROJECT.md.
- Summarize the target audience and core workflows based on SCOPE.md and PROJECT.md.
- If market research or competitor landscape is sparse in the existing documents, acknowledge this and suggest areas for the PO to research proactively.
- Provide a brief overview of technical constraints based on the defined stack.
- Act as an authoritative PM handing off the project to another leader. Use clear, direct language.

## 4. Done

Display summary:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► PO ONBOARDING GENERATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Created:
   .pm/PO_ONBOARDING.md — Read this to get up to speed on the project context.

 Next: Review the onboarding document and begin your independent market research.
```
