# Workflow: Ideas (Discovery)

## 1. Identify Mode

Check `$ARGUMENTS`:
- If `--refresh` → **Research Mode** (Search market, suggest new ideas).
- If `[feature idea]` → **Discussion Mode** (Deep dive into a specific user idea).
- If empty → Ask.

## 2. Load Context

Read:
- `.pm/PROJECT.md`
- `.pm/ROADMAP.md`

**Load persona:** `@~/.claude/ship-pm/agents/pm-strategist.md`

## 3. Execution (Research Mode)

- Search market, suggest ideas, approve, append to `ROADMAP.md`.

## 4. Execution (Discussion Mode)

- Challenge, decide, append refined idea to `ROADMAP.md`.

## 5. Log and Commit

Append result to `## Decisions & Learnings` table in `.pm/PROJECT.md`.

```bash
git add .pm/
git commit -m "pm: log discovery result for [Idea/Brainstorm]"
```

## 6. Done

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► IDEAS UPDATED & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Result: [Feature Name] added to [Horizon]

 Next: Run /pm:refine [feature] to flesh out the requirements.
```
