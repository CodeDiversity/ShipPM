# Workflow: Sync

## 1. Validate Prerequisites

```bash
ls .pm/PROJECT.md 2>/dev/null
```

**If not found:**
```
Error: No project found. Run /pm:new-project first.
```
Exit.

## 2. Load Context

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► SYNC — Updating feature state
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Read:
- `.pm/PROJECT.md` — project name, stack, core flow
- `.pm/SCOPE.md` — what was planned (in scope, out of scope, later)
- `.pm/FEATURES.md` — previous feature state (if exists)
- `.pm/ROADMAP.md` — roadmap Features to see what was planned for execution

**Load persona:** `@~/.claude/ship-pm/agents/pm-strategist.md`

Also read:
- `.pm/STATE.md` — Project state
- `.pm/briefs/` — PM briefs generated for each feature (if they exist)

## 3. Deep Codebase Scan

Systematically scan the project to build a complete picture of what exists.

### 3a. Detect Stack & Structure
- Identify framework, language, database, deployment
- Map the high-level directory structure
- Count source files, test files, config files

### 3b. Detect Features
For each scope item in SCOPE.md, search the codebase for evidence:

1. **Routes / Endpoints** — grep for route definitions, API endpoints
2. **Auth** — look for login, signup, session, JWT, password handling
3. **Data Models** — look for schema definitions, model files, migrations
4. **UI Pages / Components** — look for page components, views, screens
5. **Integrations** — look for third-party service clients (Stripe, email, etc.)
6. **Config & Ops** — look for deployment configs, env files, health checks
7. **Tests** — count test files, check for test coverage

For each feature found, note:
- **What it is** (1-line description)
- **Where it lives** (key file paths)
- **Status:** ✅ Implemented, ⚠️ Partial, ❌ Missing

### 3c. Discover Unplanned Features
Look for features that exist in the codebase but weren't in the scope. These are either:
- Organic additions during development (document them)
- Framework defaults that came for free (note them)

## 4. Update SCOPE.md

For each "In Scope" item, update with a status indicator:

```markdown
## In Scope (v1)
- ✅ [Item] — [why it's essential] → Implemented in `src/auth/`
- ⚠️ [Item] — [why it's essential] → Partially done, missing error handling
- ❌ [Item] — [why it's essential] → Not started
```

Don't remove any items. Add status markers so the builder can see progress at a glance.

## 5. Write FEATURES.md

Create or update `.pm/FEATURES.md` using `@~/.claude/ship-pm/templates/features.md`.

This is the **living catalog** of everything the app does. It should answer: "If someone asked me what this app does right now, what would I say?"

Organize by capability area, not by file structure:

```markdown
# Features: [Project Name]

**Last synced:** [timestamp]
**Feature:** [Feature number if provided]

## Implemented ✅
- **[Feature name]** — [what it does, 1 sentence]
  - Files: `src/foo.ts`, `src/bar.ts`

## Partially Implemented ⚠️
- **[Feature name]** — [what works, what's missing]
  - Files: `src/baz.ts`
  - Missing: [specific gap]

## Not Started ❌
- **[Feature name]** — [from scope, not yet built]

## Unplanned (Bonus)
- **[Feature name]** — [found in codebase but not in scope]
```

## 5b. Update PO Feature State Files

For each feature in `.po/features/*.md`:
1. Read the file to understand its current state.
2. Cross-reference with the codebase scan results.
3. Update the **Status** field (e.g., mark as "Implemented" or "Partially Implemented").
4. Move successfully implemented items from **Next (Upcoming)** or **Nice to Have (Desired)** to the **Implemented ✅** section.
5. If new "Nice to Have" items were discovered or implemented, update the file accordingly.
6. Update the **Last Updated** timestamp.

This ensures each "Epic" file remains the source of truth for its specific feature.

## 6. Update STATE.md

Update `.pm/STATE.md` with:
- Current Feature
- Features implemented / total
- Last sync timestamp
- Scope completion percentage

```markdown
# PM State

**Feature:** building
**Created:** [original]
**Last Synced:** [timestamp]
**Features Defined:** [count]
**Features Completed:** [count]
**Scope Progress:** [implemented]/[total] items ([percentage]%)

## Feature Summary
- ✅ Implemented: [count]
- ⚠️ Partial: [count]
- ❌ Not Started: [count]

## Next Action
[Recommended action based on state]
```

## 6b. Architecture Check

If `.pm/ARCHITECTURE.md` does not exist, automatically run the map workflow:

```
Architecture docs not found. Running /pm:map to document architecture...
```

Execute `@~/.claude/ship-pm/workflows/map.md` to generate `.pm/ARCHITECTURE.md`.

If `.pm/ARCHITECTURE.md` already exists but the codebase has changed significantly (new services, new integrations detected), suggest:

```
Architecture may be outdated. Run /pm:map --regen to update.
```

## 7. Display Summary

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► SYNC COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Scope Progress: [N]/[total] items ([%]%)

 ✅ Implemented:  [count]
 ⚠️ Partial:      [count]
 ❌ Not Started:   [count]
 🎁 Unplanned:    [count]

 Updated:
   .pm/FEATURES.md  — feature catalog
   .pm/SCOPE.md     — scope with status markers
   .pm/STATE.md     — project state

 Next: [Recommended action]
```

Recommendations based on state:
- If scope items remain → "Run `/pm:next-feature` to queue up the next roadmap Feature"
- If partial items exist → "Review partial items — some features need finishing via execution agent"
- If all items done → "Run `/pm:ship-check` to verify launch readiness"
