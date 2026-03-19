# Workflow: Ideas (Discovery)

## 1. Identify Mode

Check `$ARGUMENTS`:
- If `--refresh` → **Research Mode** (Search market, suggest new ideas).
- If `[feature idea]` → **Discussion Mode** (Deep dive into a specific user idea).
- If empty → Ask: "Do you want to brainstorm new ideas (--refresh) or discuss a specific one?"

## 2. Load Context

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► IDEAS — Discovery & Discussion
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Read:
- `.pm/PROJECT.md` — problem, target user, value prop
- `.pm/ROADMAP.md` — Current features and ideas
- `.pm/FEATURES.md` — What's implemented now (if exists)

**Load persona:** `@~/.claude/ship-pm/agents/pm-strategist.md`

## 3. Execution (Research Mode)

If in Research Mode:
- **3a. Analyze State:** Look at what's already built vs. what's deferred in `ROADMAP.md`.
- **3b. Search:** Use web search for competitors and category trends.
- **3c. Propose:** Generate 3-5 high-impact feature suggestions.
- **3d. Approve:** Present suggestions one-by-one to the builder.
- **3e. Save:** Append approved ideas to Horizon 2 or Horizon 4 in `ROADMAP.md`.

## 4. Execution (Discussion Mode)

If in Discussion Mode:
- **4a. Challenge:** Use questioning to act as a devil's advocate. Ask about the "Why", "Why now?", and "What's the absolute minimum version?"
- **4b. Decide:** If the builder is still convinced, decide whether it belongs in the MVP (Horizon 1) or a later Horizon.
- **4c. Save:** Add the refined idea to the appropriate section of `ROADMAP.md`.

## 5. Log and Commit

Append the outcome to `.pm/DECISIONS.md`:
```markdown
---
## [Date] — [Idea/Brainstorm] Result
**Context:** Discussed [Idea] / Ran brainstorm.
**Decision:** [Added/Modified/Discarded] feature [Name].
**Rationale:** [1 sentence reasoning]
```

Perform git commit:
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
