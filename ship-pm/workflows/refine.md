# Workflow: Refine Feature

## 1. Validate Prerequisites

Check if `.pm/PROJECT.md` exists:
```bash
ls .pm/PROJECT.md 2>/dev/null
```
**If not found:** Exit with "Error: No project found. Run `/pm:new-project` first."

Ensure the `.pm/features/` directory exists:
```bash
mkdir -p .pm/features
```

## 2. Load Context

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► FEATURE REFINEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Read:
- `.pm/PROJECT.md` (for overall context)
- `.pm/ROADMAP.md` (to see existing features)
- The user's input `$ARGUMENTS`

**Load personas and references:** 
- `@~/.claude/ship-pm/agents/pm-scoper.md`
- `@~/.claude/ship-pm/references/questioning.md`

## 3. Conversational Exploration (The PM Interview)

Your goal is to flesh out the feature logically. Have a conversation. 

**If the input was vague:**
Ask 1-2 targeted questions to understand the *Why* and *Who*.

**If the input was specific:**
Validate the happy path and immediately ask about edge cases or scope cuts.

Use `AskUserQuestion` to get their answers. (Format: ask one or two precise questions at a time. Wait for the answer).

Keep asking questions (max 3-4 turns) until you have a clear picture of:
1. The problem / goal
2. The core user flow (happy path)
3. 1-2 critical edge cases to handle
4. What is explicitly OUT of scope for v1

*Tip: Be opinionated. Suggest cuts proactively. "Instead of building a full admin dashboard for this, can we just use a Slack alert for v1?"*

## 4. Draft the Feature Spec

Once you have enough context, say:
> "Perfect. I have enough context. Drafting the feature spec..."

Write a consolidated feature spec file to `.pm/features/[feature-name-slugized].md`. 

**Format:**
```markdown
# Feature: [Name]
**Goal**: [1 sentence]
**Status**: [Proposed/Refined]

## User Flow
1. [Step 1]
2. [Step 2]

## Requirements
- [REQ-01]: [Requirement]
- [REQ-02]: [Requirement]

## Out of Scope
- [What we are NOT building]

## Edge Cases to Handle
- [Edge Case 1]
```

## 5. Commit Changes

After the feature spec has been created, perform a git commit:

```bash
git add .pm/
git commit -m "pm: refine feature spec for [feature-name]"
```

## 6. Review and Next Steps

Display:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► FEATURE SPEC CREATED & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Wrote: .pm/features/[feature].md

 Summary:
 - Core: [1 sentence summary of happy path]
 - Cut: [1 sentence summary of what was scoped out]

 Next steps:
 To queue this up for building, run:
 /pm:next
```

Ask if they want to append this feature to the main `.pm/ROADMAP.md` file under "The MVP (v1)" or "Horizon 2". If yes, append it.
