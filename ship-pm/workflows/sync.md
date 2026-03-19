# Workflow: Sync

## 1. Validate Prerequisites

```bash
ls .pm/PROJECT.md 2>/dev/null
```

**If not found:** Exit with error.

## 2. Load Context

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► SYNC — Updating feature state
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Read:
- `.pm/PROJECT.md` — project name, stack, core flow
- `.pm/ROADMAP.md` — what was planned and current status markers

**Load persona:** `@~/.claude/ship-pm/agents/pm-strategist.md`

## 3. Deep Codebase Scan

Systematically scan the project to build a complete picture of what exists.

### 3a. Detect Features
For each feature in the MVP section of ROADMAP.md, search the codebase for evidence:

1. **Routes / Endpoints** — grep for route definitions, API endpoints
2. **Auth** — look for login, signup, session handling
3. **Data Models** — look for schema definitions
4. **UI Pages / Components** — look for page components
5. **Integrations** — look for third-party service clients

For each feature found, note:
- **Status:** ✅ Implemented, ⚠️ Partial, ❌ Missing

## 4. Update ROADMAP.md

Update the status markers in the `## 1. The MVP (v1)` table in `.pm/ROADMAP.md`.

Update the **Progress:** line at the top of the file:
`Progress: [completed]/[total] features complete`

## 5. Log Learning in PROJECT.md

If any major technical or product learning was discovered during sync, append it to the `## Decisions & Learnings` table in `.pm/PROJECT.md`.

## 6. Commit Changes

```bash
git add .pm/
git commit -m "pm: sync state with codebase"
```

## 7. Done

Display summary:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► SYNC COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 MVP Progress: [completed]/[total] features (✅)

 Updated:
   .pm/ROADMAP.md     — feature status markers
   .pm/PROJECT.md     — any new learnings

 Next: [Recommended action]
```
