# Workflow: Feature Review

## 1. Validate Target Feature

Extract the Feature number from `$ARGUMENTS`. Let's call it `$FEATURE`.

Read `.pm/ROADMAP.md` to confirm the Feature exists. Extract its goal, requirements, and success criteria.

Let `$FEATURE_DIR` = `.pm/briefs/${PADDED_FEATURE}-${SLUG}` based on the roadmap entry. Check if a brief exists for this feature.

Check if PM reviews directory exists:
```bash
mkdir -p .pm/reviews
```

## 2. Load Context

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► REVIEWING FEATURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Target: Feature ${FEATURE}
 Analyzing implementation against ROADMAP and SCOPE...
```

Read:
- `.pm/ROADMAP.md` — To get the Feature definition
- `.pm/SCOPE.md` — To cross-reference any linked requirements
- `.pm/features/` — Optional: Read feature specs linked to this Feature.
- `.pm/briefs/${PADDED_FEATURE}-*/*-BRIEF.md` — Optional: Read the PM brief to understand what was requested.

## 3. Codebase Inspection (Trust but Verify)

Use your Bash, Glob, and Grep tools to verify the claims. 
- Are the new files actually there?
- Do the key endpoints exist?
- Are the UI components exported?
- Do the success criteria pass basic static analysis checks?

Do not just say "Looks good." Actually look at the code.

## 4. Run PM Reviewer Agent

Use `@~/.claude/ship-pm/agents/pm-reviewer.md` to synthesize the findings.

The PM Reviewer will output a structured review based on the evidence.

Write the exact output from the Reviewer agent to:
`.pm/reviews/FEATURE-${PADDED_FEATURE}-REVIEW.md`

## 5. Output Results

Parse the generated review file to find the final status (PASS, FAIL, or PASS WITH WARNINGS).

Display:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► REVIEW COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Review: .pm/reviews/FEATURE-${PADDED_FEATURE}-REVIEW.md
 Result: [PASS / FAIL / PASS WITH WARNINGS]

 [Include the "Gaps & Fixes" section here if applicable]
```

Next step suggestion:
**If PASS:** "Ready for next Feature. Run `/pm:next-feature`"
**If FAIL:** "Fix gaps using your coding agent, or manually edit the code."
