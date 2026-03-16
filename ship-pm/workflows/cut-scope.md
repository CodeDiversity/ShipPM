# Workflow: Cut Scope

## 1. Validate Prerequisites

```bash
ls .pm/SCOPE.md 2>/dev/null
```

**If not found:**
```
Error: No scope found. Run /pm:scope first.
```
Exit.

## 2. Load Context

Read `.pm/SCOPE.md` — parse the "In Scope" section.

**Load philosophy:** `@~/.claude/ship-pm/references/pm-philosophy.md`

## 3. Determine What to Cut

### If Argument Provided
The user specified what to cut (e.g., `/pm:cut-scope "admin panel"`).

Find the matching item in "In Scope". If not found:
```
"[item]" not found in scope. Current in-scope items:
- [list items]
```
Exit.

### If No Argument
Analyze the scope and suggest items to cut. Apply the PM philosophy:
- Items that don't affect the core flow
- High-effort items with low immediate value
- Items that can be added after launch without breaking anything

Present suggestions:
> "Here are items I'd cut to ship faster:"

For each suggestion:
- [Item] — [why it can be cut]

Ask: "Which items should I cut? (comma-separated numbers, or 'all')"

## 4. Move Items

For each item to cut:
1. Remove from "In Scope" section
2. Add to "Later (Post-MVP)" section with rationale: "— Cut to accelerate launch"

## 4b. Update PO Feature State Files

For each cut item:
1. Identify the corresponding file in `.po/features/[padded-Feature]-[slug].md`.
2. Move the item from **Next (Upcoming)** or **Nice to Have (Desired)** to **Deferred (Cuts) ⏸️**.
3. Add the reason for the cut (e.g., "Cut to accelerate launch").
4. Update the **Last Updated** timestamp.

This ensures each "Epic" file reflects the updated scope.

## 5. Log Decision

Append to `.pm/DECISIONS.md`:
```markdown
---

## [Date] — Scope Cut
**Context:** Reducing scope to accelerate launch.
**Decision:** Moved the following to post-MVP: [items]
**Rationale:** [why each item was cut]
**Impact:** Reduces scope, enables faster launch.
```

## 6. Update Affected Tasks

Check if any existing tasks in `.pm/tasks/` reference cut items. If so, note:
```
⚠️ Task TASK-NNN may be affected by this scope change. Review it.
```

## 7. Done

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► SCOPE CUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Removed from scope:
   - [item 1]
   - [item 2]

 Remaining in scope: [count] items
 Updated: .pm/SCOPE.md, .pm/DECISIONS.md
```
