---
name: pm:progress
description: Show current PM project state and roadmap progress
allowed-tools:
  - Read
  - Bash
  - Glob
---

<objective>
Display the current state of the PM project: roadmap Features, execution status, pending reviews, and next recommended action.

**Reads:** `.pm/STATE.md`, `.pm/ROADMAP.md`, `.pm/briefs/`, `.pm/reviews/`
</objective>

<context>
**Prerequisites:** `.pm/ROADMAP.md` must exist. If not:
```
No roadmap found. Run /pm:new-project or /pm:scope to start.
```
</context>

<process>

## 1. Check State
Read `.pm/STATE.md` for current Feature and metadata.
Read `.pm/ROADMAP.md` to count the total number of Features defined.

## 2. Count Artifacts
- Count brief files in `.pm/briefs/`
- Count review files in `.pm/reviews/`
- Count audit files in `.pm/audits/`

## 3. Display Progress

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► PROJECT STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Project: [name from PROJECT.md]
 Feature:   [current Feature from STATE.md]

 Roadmap: [completed Features]/[total defined Features] complete

 Briefs:   [count] generated
 Reviews:  [count] completed
 Audits:   [count] run

 Next:    [Recommended action]
```

## 4. Recommend Next Action
Based on state:
- No scope → "Run `/pm:scope`"
- No Features in roadmap → "Run `/pm:next-feature` to queue up work"
- Features exist, no Briefs → "Run `/pm:brief [Feature]`"
- Briefs exist, no reviews → "Run `/pm:review [Feature]`"
- Reviews done, no sync → "Run `/pm:sync` to catalog features"
- All Features done → "Run `/pm:ship-check` to verify launch readiness"

## 5. Update Check
Fetch the latest version:
```bash
npm show ship-agent version 2>/dev/null
```
Read the installed version from `.claude/ship-agent/VERSION` (or equivalent).
If the latest version is greater than the installed version, append to the output:

```
 ⚠️ UPDATE AVAILABLE
 You are running v[installed], but v[latest] is available.
 Run /pm:update to upgrade.
```
</process>
