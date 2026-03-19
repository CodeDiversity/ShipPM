# Workflow: Prioritize

## 1. Load Context
Read `.pm/ROADMAP.md` and `.pm/FEEDBACK.md`.

## 2. Analyze and Propose
PM Strategist scores features and proposes new order.

## 3. Update ROADMAP.md
Reorder items in the MVP table.

## 4. Log Decision in PROJECT.md
Append a new row to the `## Decisions & Learnings` table in `.pm/PROJECT.md`:
`| [Date] | Re-prioritized Roadmap | [Rationale] |`

## 5. Commit Changes
```bash
git add .pm/
git commit -m "pm: re-prioritize roadmap"
```

## 6. Done
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► PRIORITIES UPDATED & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
