# Workflow: Log Bug

## 1. Context Gathering
Ask user: What is the bug? Expected vs Actual?

## 2. Log in BUGS.md
Append the bug details to `.pm/BUGS.md`.

## 3. Log in PROJECT.md
Append a new row to the `## Decisions & Learnings` table in `.pm/PROJECT.md`:
`| [Date] | Bug Logged: [Bug Name] | [Severity] |`

## 4. Commit Changes
```bash
git add .pm/
git commit -m "pm: log bug [Bug]"
```

## 5. Done
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► BUG LOGGED & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
