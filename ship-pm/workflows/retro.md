# Workflow: Retrospective

## 1. Validate Prerequisites

Extract the Feature number from `$ARGUMENTS`. Let's call it `$FEATURE`.

Read `.pm/ROADMAP.md` to confirm the feature exists.
Check for a review file in `.pm/reviews/FEATURE-*`:

```bash
ls .pm/reviews/FEATURE-*$FEATURE* 2>/dev/null
```

**If no review found:**
```
Error: No review found for Feature $FEATURE. Run /pm:review first.
```
Exit.

## 2. Load Context

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► RETROSPECTIVE — Feature $FEATURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Read:
- `.pm/ROADMAP.md` — Original feature goal and success criteria
- `.pm/briefs/` — The brief that was generated for this feature
- `.pm/reviews/` — The review results
- `.pm/SCOPE.md` — What was originally planned

## 3. PM Self-Assessment

Before asking the user, the PM Strategist should analyze:

**Scope Accuracy:**
- Did the brief capture the right requirements?
- Were the success criteria realistic and measurable?
- Did we scope too much or too little?

**Estimation Quality:**
- Was the effort estimate accurate?
- Were there unexpected dependencies?

**Review Findings:**
- Did the review pass on the first try?
- What gaps were found?

## 4. Ask the Builder

Present the PM's self-assessment, then ask:

1. "What went well with this feature?"
2. "What was harder than expected?"
3. "What would you do differently next time?"
4. "Any scope we should have cut earlier?"

Use `AskUserQuestion` for each.

## 5. Write Retro

Create `.pm/retros/` directory if needed:
```bash
mkdir -p .pm/retros
```

Write `.pm/retros/FEATURE-${PADDED_FEATURE}-RETRO.md`:

```markdown
# Retro: Feature [X] — [Name]

**Date:** [timestamp]

## What Went Well
- [Items from PM analysis and user input]

## What Didn't Go Well
- [Items from PM analysis and user input]

## Lessons Learned
- [Concrete takeaways for future features]

## Scope Accuracy
- **Original scope:** [brief summary of what was planned]
- **Actual result:** [what was delivered]
- **Delta:** [over-scoped / under-scoped / accurate]

## Action Items
- [ ] [Specific change to make for next feature]
```

## 6. Log Key Learnings

Append to `.pm/DECISIONS.md`:

```markdown
---

## [Date] — Retro: Feature [X]
**Context:** Post-feature retrospective.
**Lesson:** [Most important takeaway]
**Action:** [What to do differently]
```

## 7. Commit Changes

After the retrospective has been written and the key learning logged, perform a git commit:

```bash
git add .pm/
git commit -m "pm: log retrospective for Feature ${FEATURE}"
```

## 8. Done

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► RETRO COMPLETE & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Written: .pm/retros/FEATURE-${PADDED_FEATURE}-RETRO.md

 Key Lesson: [1 sentence]

 Next: Run /pm:next-feature to continue building.
```
