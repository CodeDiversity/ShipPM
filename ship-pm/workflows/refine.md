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
- The user's input `{{CLI_ARGS}}`

**Load personas and references:** 
- `@~/.claude/ship-pm/agents/pm-scoper.md`
- `@~/.claude/ship-pm/references/questioning.md`

## 3. Conversational Exploration (The PM Interview)

Your goal is to fill out the feature spec logically. Do not bombard the user with a massive 10-part form. Have a conversation. 

**If the input was vague (e.g., "add billing"):**
Ask 1-2 targeted questions to understand the *Why* and *Who*.
> "Got it, billing. Are we doing simple flat-rate subscriptions via Stripe Checkout, or do we need usage-based metering? What's the fastest way to get paid?"

**If the input was specific (e.g., "add magic link login"):**
Validate the happy path and immediately ask about edge cases or scope cuts.
> "Magic links are great. What happens if the link expires while they are clicking it? Also, are we cutting social login (Google/GitHub) completely for now?"

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

Use the template at `@~/.claude/ship-pm/templates/feature-spec.md` to write the file to:
`.pm/features/[feature-name-slugized].md`

## 5. Review and Next Steps

Display:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► FEATURE SPEC CREATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Wrote: .pm/features/[feature].md

 Summary:
 - Core: [1 sentence summary of happy path]
 - Cut: [1 sentence summary of what was scoped out]

 Next steps:
 To queue this up for building, run:
 /pm:next-feature
```

Optionally, ask if they want to append this feature to the main `.pm/SCOPE.md` file under "In Scope (v1)" or "Later". If yes, append a one-liner to `SCOPE.md`.
