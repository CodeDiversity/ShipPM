# Workflow: Scope

## 1. Validate Prerequisites

```bash
ls .pm/PROJECT.md 2>/dev/null
```

**If not found:**
```
Error: No project found. Run /pm:new-project first.
```
Exit.

**If SCOPE.md exists and `--regen` not passed:**
```
Scope already exists at .pm/SCOPE.md. Use /pm:scope --regen to regenerate.
```
Exit.

## 2. Load Context

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► SCOPE GENERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Read `.pm/PROJECT.md` — extract:
- Project summary and problem
- Core user flow
- Stack
- Target user
- Success criteria
- Constraints

**Load persona:** `@~/.claude/ship-agent/agents/pm-scoper.md`
**Load patterns:** `@~/.claude/ship-agent/references/scope-patterns.md`
**Load philosophy:** `@~/.claude/ship-agent/references/pm-philosophy.md`

## 3. Determine Project Type

Match the project against scope patterns:
- SaaS Web App
- CLI Tool
- API / Backend
- Mobile App
- Marketplace
- Other

Use the matching pattern as a starting point for scope decisions.

## 4. Generate Scope

Apply the PM Scoper methodology:

1. **Identify the core flow** — the ONE thing the user does
2. **Build In Scope** — only items where the core flow breaks without them
3. **Build Out of Scope** — everything else. Be generous.
4. **Build Later** — genuinely valuable items that aren't launch blockers
5. **Identify Non-Goals** — things we're explicitly NOT building
6. **Surface Risks** — real risks, not theoretical ones
7. **State Assumptions** — things that must be true for this to work

Write to `.pm/SCOPE.md` using `@~/.claude/ship-agent/templates/scope.md`.

## 5. Present and Approve

Show the generated scope. Ask:

> "Here's the MVP scope. Does this look right?"

Options:
- "Looks good" — proceed
- "Too ambitious — cut more" — apply more aggressive cutting
- "Missing something" — ask what and add it
- "I'll edit it" — user edits directly

## 6. Update State

Update `.pm/STATE.md`:
- Feature: `scoped`
- Last Updated: `[timestamp]`

## 7. Done

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► SCOPE COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Written: .pm/SCOPE.md
 In scope: [count] items
 Out of scope: [count] items
 Risks: [count] identified

 Next: Run /pm:next-feature to queue up the first roadmap Feature.
```
