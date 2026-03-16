# Workflow: User Feedback

## 1. Validate Prerequisites

```bash
ls .pm/PROJECT.md 2>/dev/null
```

**If not found:**
```
Error: No project found. Run /pm:new-project first.
```
Exit.

## 2. Collect Feedback

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► USER FEEDBACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**If `$ARGUMENTS` contains feedback text:**
Use it directly.

**If `$ARGUMENTS` is empty:**
Ask: "What feedback did you receive? Paste it verbatim or describe it."
Then ask: "Where did this come from? (e.g., user email, support ticket, app review, your own observation)"

## 3. Analyze and Tag

Read `.pm/SCOPE.md` and `.pm/ROADMAP.md` to understand the current feature landscape.

For the feedback, determine:
- **Feature Area:** Which existing scope item or roadmap feature does this relate to? (or "New" if it doesn't match anything)
- **Sentiment:** 🟢 Positive / 🟡 Neutral / 🔴 Negative
- **Type:** Bug, Feature Request, UX Issue, Praise, or Question
- **Priority Signal:** Does this represent a pattern (multiple users) or a one-off?

## 4. Check for Patterns

Read `.pm/FEEDBACK.md` (if it exists) and look for:
- Has this feature area been mentioned before?
- Is there a growing trend in a specific area?
- Are multiple users hitting the same friction point?

If a pattern is detected, flag it:
> "⚠️ Pattern detected: This is the [Nth] piece of feedback about [area]. Consider prioritizing this."

## 5. Write FEEDBACK.md

Create or append to `.pm/FEEDBACK.md`:

```markdown
# User Feedback Log

**Last updated:** [timestamp]
**Total entries:** [count]

---

## [Date] — [1-line summary]
**Source:** [where it came from]
**Type:** [Bug / Feature Request / UX Issue / Praise / Question]
**Sentiment:** [🟢 / 🟡 / 🔴]
**Feature Area:** [scope item or "New"]
**Verbatim:** "[exact feedback or close paraphrase]"
**PM Take:** [1 sentence — what does this mean for the product?]

---
```

## 5b. Update PO Feature State Files

If the feedback is a **Feature Request** or identifies a **UX Issue**:
1. Identify the corresponding file in `.po/features/[padded-Feature]-[slug].md`.
2. Add the feedback as a new item in the **Nice to Have (Desired) 🌟** section.
3. Link back to the feedback log (e.g., "Requested by user - see FEEDBACK.md [Date]").
4. Update the **Last Updated** timestamp.

This ensures the "Epic" state file captures real-world signals for future planning.

## 6. Commit Changes

After the feedback has been logged and feature state files updated, perform a git commit:

```bash
git add .pm/ .po/
git commit -m "pm: log user feedback"
```

## 7. Surface Insights

After logging and committing, display:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► FEEDBACK LOGGED & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Entry: [1-line summary]
 Type:  [type] · Sentiment: [emoji]
 Area:  [feature area]

 Patterns:
   [area]: [N] mentions (trending [up/stable])

 Next: Run /pm:prioritize to re-rank roadmap based on feedback.
```
