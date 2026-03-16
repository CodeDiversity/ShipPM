# Workflow: PO Feature Documentation

## 1. Context & Setup

**Arguments:** `$ARGUMENTS` contains the target Feature number (e.g., `1`, `1.2`).

Read `.pm/ROADMAP.md` and verify the Feature exists. Keep track of its name/slug.

Identify the feature's documentation directory, which is `.po/features/[slug].md`.
If the file does not exist, the feature hasn't been properly scoped yet.

```bash
ls .po/features/*.md 2>/dev/null
```

If it does not exist:
```
Error: Feature directory not found. Please run /pm:brief or /pm:refine for this feature first.
```
Exit.

## 2. Directory Creation

Create the `.po/features` directory if it doesn't already exist.

```bash
mkdir -p .po/features
```

## 3. Generate Core File

Check if the following file exists. If it does not, create it using the template. Pre-fill the `[Feature Name]` based on the roadmap.

**File to create:**
- `.po/features/[padded-Feature]-[slug].md` (Template: `@~/.claude/ship-pm/templates/po-feature.md`)

If the file already exists, do not overwrite it. Instead, read it and offer to summarize or append new information.

## 4. Done

Display summary:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► PO FEATURE STATE INITIALIZED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Created/Updated for Feature $ARGUMENTS:
   .po/features/[padded-Feature]-[slug].md

 Next: The PO should review and update this "Epic" state file as the feature matures.
```
