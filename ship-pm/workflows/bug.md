# Workflow: Bug Report

## 1. Validate Prerequisites

```bash
ls .pm/PROJECT.md 2>/dev/null
```

**If not found:**
```
Error: No project found. Run /pm:new-project first.
```
Exit.

## 2. Collect Bug Information

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► LOG BUG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**If `$ARGUMENTS` contains the bug description:**
Use it directly.

**If `$ARGUMENTS` is empty:**
Ask:
1. "What is the bug? Briefly describe what went wrong."
2. "What is the expected behavior?"
3. "Are there steps to reproduce it easily?"

## 3. Assess Severity

Evaluate the bug and assign a severity level based on these criteria:

- 🔴 **Critical:** Broken core flow, data loss, security issue, or blocking a launch. Needs immediate attention.
- 🟠 **High:** Major feature broken, no obvious workaround, but not a core flow.
- 🟡 **Medium:** Non-critical feature broken or visual bug that damages trust; has a workaround.
- ⚪ **Low:** Minor visual glitch, typo, or edge case affecting very few users.

## 4. Log the Bug

Create or append to `.pm/BUGS.md`:

```markdown
# Bug Tracker

**Last updated:** [timestamp]
**Open Bugs:** [count]

---

## [Date] — [1-line summary of the bug]
**Status:** Open
**Severity:** [🔴 / 🟠 / 🟡 / ⚪]
**Description:** [Description or user's exact input]
**Expected:** [What should happen]
**Repro:** [Steps or context to reproduce]
**PM Take:** [1 sentence — impact on user experience and recommendation on when to fix]

---
```

## 5. Prioritization Check

If the bug is scored as 🔴 **Critical** or 🟠 **High**:
> "⚠️ **High Severity Bug Detected:** This bug disrupts core user flows. I recommend bringing this to the execution agent immediately or running `/pm:prioritize` to adjust your roadmap."

## 6. Done

After logging, display:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► BUG LOGGED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Bug: [1-line summary]
 Severity: [emoji] [Level]
 Status: Logged in .pm/BUGS.md

 Next: If this is critical, assign it to your execution agent now. Otherwise, it will be evaluated during your next /pm:prioritize session.
```
