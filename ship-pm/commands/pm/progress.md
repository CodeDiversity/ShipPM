---
name: pm:progress
description: Show current project state and roadmap progress
allowed-tools:
  - Read
  - Bash
  - Glob
---

<objective>
Display the current state of the project by reading ROADMAP.md and artifact counts.

**Reads:** `.pm/PROJECT.md`, `.pm/ROADMAP.md`, `.pm/briefs/`, `.pm/reviews/`
</objective>

<context>
**Prerequisites:** `.pm/ROADMAP.md` must exist.
</context>

<process>

## 1. Load Context
Read `.pm/PROJECT.md` for the name.
Read `.pm/ROADMAP.md` to extract the Progress line and MVP feature count.

## 2. Count Artifacts
- Count briefs in `.pm/briefs/`
- Count reviews in `.pm/reviews/`
- Count gaps/audits in `.pm/audits/`

## 3. Display Progress

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► PROJECT STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Project: [name from PROJECT.md]
 MVP Progress: [Progress line from ROADMAP.md]

 Artifacts:
   - Briefs:   [count] generated
   - Reviews:  [count] completed
   - Gaps:     [count] checked

 Next:    [Recommended action based on status markers]
```

## 4. Recommend Next Action
Scan the MVP table in `ROADMAP.md`:
- If no Feature Details blocks exist → "Run `/pm:next` to queue up work"
- If features are ❌ → "Run `/pm:brief [X]`"
- If features are ⚠️ → "Finish building via execution agent"
- If features are ✅ but not synced → "Run `/pm:sync`"
- If all ✅ → "Run `/pm:ship-check` to verify launch readiness"

</process>
