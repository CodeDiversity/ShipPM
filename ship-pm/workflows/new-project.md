# Workflow: New Project

## 1. Check Existing Project

```bash
ls .pm/PROJECT.md 2>/dev/null
```

**If PROJECT.md exists:**
```
Error: PM project already initialized. Run /pm:progress to see status.
```
Exit.

## 2. Check for GSD Migration

```bash
ls .planning/PROJECT.md 2>/dev/null
```

**If `.planning/PROJECT.md` exists:**
1. Announce: `GSD Migration Detected: Importing legacy planning state...`
2. Create `.pm/` directory structure.
3. Read `.planning/PROJECT.md`, `.planning/ROADMAP.md`, and scan `.planning/phases/`.
4. Skip questioning (Step 4).
5. Load the PM Strategist persona and synthesize the raw engineering files into proper PM abstractions.
6. Write `.pm/PROJECT.md` and `.pm/SCOPE.md`.
7. Initialize `.pm/STATE.md` and `.pm/DECISIONS.md`.
8. Announce migration complete. Exit.

## 3. Auto Mode Check

If `--auto` flag is present:
- Extract project context from the provided document
- Skip questioning (Step 4)
- Jump to Step 5 with extracted context
- After PROJECT.md, auto-generate scope (Step 6) without approval gate

## 4. Deep Questioning

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► NEW PROJECT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Load the PM Strategist persona** from `@~/.claude/ship-pm/agents/pm-strategist.md`.
**Load questioning techniques** from `@~/.claude/ship-pm/references/questioning.md`.

**Open the conversation:**

Ask: "What do you want to build?"

Wait. Listen. Follow the thread with follow-up questions.

**Use questioning techniques:**
- Challenge vagueness — make abstract ideas concrete
- Surface assumptions — find what they're taking for granted
- Find edges — what happens at boundaries?
- Reveal motivation — why this, why now?

**Track context checklist (internally):**
As questioning progresses, mentally check off:
- [ ] Problem understood
- [ ] Target user identified
- [ ] Core flow described
- [ ] Stack discussed
- [ ] Success criteria established

**Decision gate:**
When you could write a clear PROJECT.md, ask:

> "I think I understand what you're building. Ready to create the project brief?"

Options:
- "Create PROJECT.md" — proceed
- "Keep exploring" — continue questioning

Loop until "Create PROJECT.md" selected.

## 5. Write PROJECT.md

Create `.pm/` directory structure:

```bash
mkdir -p .po/features .pm/briefs .pm/reviews .pm/audits
```

Synthesize all gathered context into `.pm/PROJECT.md` using the template from `@~/.claude/ship-pm/templates/project.md`.

**Content rules:**
- Don't compress or summarize — capture everything discussed
- Include all decisions made during questioning
- Be specific about stack, constraints, and success criteria
- The core flow should be a numbered list of concrete steps

## 6. Generate Initial Scope

**Load the PM Scoper persona** from `@~/.claude/ship-pm/agents/pm-scoper.md`.
**Load scope patterns** from `@~/.claude/ship-pm/references/scope-patterns.md`.

Analyze PROJECT.md and generate `.pm/SCOPE.md` using the template from `@~/.claude/ship-pm/templates/scope.md`.

**Scope rules (from PM Scoper):**
1. Identify the core flow — the ONE thing the user does
2. Only include items where the core flow breaks without them
3. Default to cutting — be generous with "Out of Scope"
4. Label "Later" items so the builder knows they're acknowledged
5. State real risks, not hypothetical ones
6. Surface assumptions that need validation

**Approval gate (interactive mode only):**

Show the generated scope and ask:

> "Here's the scope. Does this look right?"

Options:
- "Looks good" — proceed
- "Too ambitious" — cut more scope
- "Missing something" — add items
- "Let me edit" — user will edit SCOPE.md directly

If "Too ambitious" — apply more aggressive cutting and re-present.
If "Missing something" — ask what's missing, add it, re-present.

## 7. Initialize State

Create `.pm/STATE.md`:

```markdown
# PM State

**Feature:** scoped
**Created:** [timestamp]
**Last Updated:** [timestamp]
**Features Defined:** 0
**Features Completed:** 0

## Next Action
Run `/pm:next-feature` to queue up the first roadmap Feature.
```

## 8. Initialize Decision Log

Create `.pm/DECISIONS.md`:

```markdown
# Product Decisions

Decisions are logged as they're made. Each entry captures the context, rationale, and alternatives.

---

## [Date] — Project Initialized
**Context:** Starting a new project.
**Decision:** [Stack and key technical choices from questioning]
**Rationale:** [Why these choices]
```

## 9. Done

Display summary:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► PROJECT CREATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Created:
   .pm/PROJECT.md    — project context
   .pm/SCOPE.md      — MVP scope
   .pm/STATE.md      — project state
   .pm/DECISIONS.md  — decision log

 Next: Run /pm:next-feature to queue up your first roadmap Feature.
```
