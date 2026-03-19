# Workflow: Cut Scope

## 1. Context Gathering

Check if `.pm/ROADMAP.md` exists. Read:
- `.pm/ROADMAP.md` — To see the MVP and backlog sections.
- `@~/.claude/ship-pm/references/pm-philosophy.md` — To guide the cutting rationale.

## 2. Identify Target

If `$ARGUMENTS` is provided:
- Search `.pm/ROADMAP.md` for the feature name.
- If found in "The MVP (v1)", it's the target.

If `$ARGUMENTS` is NOT provided:
- PM Strategist reviews "The MVP (v1)".
- Propose 1-2 items to move to "Horizon 2" or "Cut Scope (Deferred)".
- Present rationale for why this isn't strictly necessary for a v1 launch.
- Ask the user to confirm the cut.

## 3. Perform the Cut

Move the item from `## 1. The MVP (v1)` to:
- `## 2. Horizon 2` (if we definitely want to do it later)
- OR `## 5. Cut Scope (Deferred)` (if it's a "maybe never" or just doesn't fit).

If the feature was already defined in "Feature Details", move or remove that detail block as appropriate.

## 4. Log Decision

Append to `.pm/DECISIONS.md`:
```markdown
---
## [Date] — Scope Cut: [Feature]
**Context:** Aiming for faster launch.
**Decision:** Moved [Feature] from MVP to [Backlog/Deferred].
**Rationale:** [1 sentence reasoning based on PM philosophy]
```

## 5. Commit Changes

```bash
git add .pm/
git commit -m "pm: cut scope [Feature] for faster launch"
```

## 6. Done

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► SCOPE CUT & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 [Feature] moved to [New Section].

 Next: Run /pm:progress to see your new roadmap status.
```
