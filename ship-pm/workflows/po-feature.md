# Workflow: PO Feature Documentation

## 1. Context & Setup

**Arguments:** `$ARGUMENTS` contains the target Feature number (e.g., `1`, `1.2`).

Read `.pm/ROADMAP.md` and verify the Feature exists. Keep track of its name/slug.

Identify the feature's documentation directory, which is `.pm/features/[padded-Feature]-[slug]/`.
If the directory does not exist, the feature hasn't been properly scoped yet.

```bash
ls -d .pm/features/* 2>/dev/null
```

If it does not exist:
```
Error: Feature directory not found. Please run /pm:brief or /pm:refine for this feature first.
```
Exit.

## 2. Directory Creation

Create the `po` subdirectory for the target feature if it doesn't already exist.

```bash
mkdir -p .pm/features/[padded-Feature]-[slug]/po
```

## 3. Generate Core Files

Check if the following files exist. If they do not, create them using their respective templates. Pre-fill the `[Feature Name]` based on the roadmap.

**Files to create:**
- `.pm/features/[padded-Feature]-[slug]/po/current.md` (Template: `@~/.claude/ship-pm/templates/po-feature-current.md`)
- `.pm/features/[padded-Feature]-[slug]/po/desired.md` (Template: `@~/.claude/ship-pm/templates/po-feature-desired.md`)
- `.pm/features/[padded-Feature]-[slug]/po/deferred.md` (Template: `@~/.claude/ship-pm/templates/po-feature-deferred.md`)

If the files already exist, do not overwrite them. Instead, read them and offer to summarize or append new information.

## 4. Done

Display summary:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► PO FEATURE DOCS INITIALIZED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Created/Updated for Feature $ARGUMENTS:
   .pm/features/.../po/current.md
   .pm/features/.../po/desired.md
   .pm/features/.../po/deferred.md

 Next: The PO should review and populate these files as the feature matures.
```
