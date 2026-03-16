# Workflow: Prioritize

## 1. Validate Prerequisites

```bash
ls .pm/ROADMAP.md 2>/dev/null
```

**If not found:**
```
Error: No roadmap found. Run /pm:scope and /pm:next-feature first.
```
Exit.

## 2. Load Context

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► PRIORITIZE — Re-ranking roadmap
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Read:
- `.pm/ROADMAP.md` — Current feature list and order
- `.pm/FEEDBACK.md` — User feedback patterns (if exists)
- `.pm/SCOPE.md` — Original scope and completion status
- `.pm/STATE.md` — Current project state
- `.pm/retros/` — Lessons learned from past features (if exists)

**Load persona:** `@~/.claude/ship-pm/agents/pm-strategist.md`
**Load prioritization framework:** `@~/.claude/ship-pm/references/prioritization.md`

## 3. Analyze Signals

### 3a. Feedback Patterns
If `.pm/FEEDBACK.md` exists, identify:
- Which feature areas have the most feedback mentions?
- What is the dominant sentiment per area?
- Are there urgent bug reports that should jump the queue?

### 3b. Completion Momentum
From `.pm/STATE.md` and `.pm/SCOPE.md`:
- What features are already done? (don't re-rank completed items)
- What's currently in progress?
- Are there blocked items that should be deprioritized?

### 3c. Dependencies
From `.pm/ROADMAP.md`:
- Which features depend on others?
- Is there a critical path that must be maintained?

## 4. Generate Proposed Ranking

For each incomplete feature, score on:

| Factor | Weight | Question |
|--------|--------|----------|
| **User Signal** | High | Are users asking for this? |
| **Business Impact** | High | Does this drive retention/revenue? |
| **Effort** | Medium | How complex relative to value? |
| **Dependencies** | Medium | Does this unblock other features? |
| **Momentum** | Low | Does this align with what we just built? |

Propose a new priority ordering.

## 5. Interactive Discussion (unless --auto)

Present the proposed re-ranking to the user:

> "Based on [signals used], here's my recommended priority order..."

Show the current order vs the proposed order side-by-side.

Ask:
1. "Does this new ranking feel right?"
2. "Any features you want to force to the top or bottom?"

Incorporate feedback. If `--auto`, skip this step.

## 6. Update ROADMAP.md

Reorder the features in `.pm/ROADMAP.md` to match the approved ranking.

Update the overview list at the top of the file to reflect the new order.

## 7. Log the Decision

Append to `.pm/DECISIONS.md`:

```markdown
---

## [Date] — Roadmap Re-Prioritized
**Context:** [What triggered the re-prioritization]
**Decision:** Re-ordered [N] features. Top priority is now [Feature Name].
**Rationale:** [Based on user feedback / market shift / retro learnings / builder judgment]
```

## 8. Commit Changes

After the roadmap has been re-prioritized and the decision logged, perform a git commit:

```bash
git add .pm/
git commit -m "pm: re-prioritize roadmap"
```

## 9. Done

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► PRIORITIES UPDATED & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Roadmap re-ranked. New order:
 1. [Feature Name] ← [moved up/down/unchanged]
 2. [Feature Name] ← [moved up/down/unchanged]
 3. [Feature Name] ← [moved up/down/unchanged]

 Signals used: [feedback / retro / builder input]

 Next: Run /pm:brief [top feature] to start building the new top priority.
```
