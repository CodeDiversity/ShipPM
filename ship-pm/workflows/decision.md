# Workflow: Log Decision

## 1. Context Gathering

Check if `.pm/PROJECT.md` exists. Read it.
If `$ARGUMENTS` is empty, ask the user:
- "What is the decision?"
- "What was the rationale or alternative considered?"

## 2. Save Decision

Append a new row to the `## Decisions & Learnings` table in `.pm/PROJECT.md`:
`| [Date] | [Decision Summary] | [Rationale] |`

## 3. Commit Changes

```bash
git add .pm/PROJECT.md
git commit -m "pm: log decision [Decision]"
```

## 4. Done

Display summary:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► DECISION LOGGED & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Logged to .pm/PROJECT.md
```
