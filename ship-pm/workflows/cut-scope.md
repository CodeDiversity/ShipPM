# Workflow: Cut Scope

## 1. Identify Target

Read `.pm/ROADMAP.md`.
If `$ARGUMENTS` provided, it's the target. Otherwise, PM suggests cuts.

## 2. Perform the Cut

Move item from MVP to Backlog or Cut section in `ROADMAP.md`.

## 3. Log Decision in PROJECT.md

Append a new row to the `## Decisions & Learnings` table in `.pm/PROJECT.md`:
`| [Date] | Cut Scope: [Feature] | [Rationale] |`

## 4. Commit Changes

```bash
git add .pm/
git commit -m "pm: cut scope [Feature] for faster launch"
```

## 5. Done

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► SCOPE CUT & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 [Feature] moved to backlog.
```
