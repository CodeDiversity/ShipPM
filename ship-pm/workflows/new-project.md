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
6. Write `.pm/PROJECT.md` and `.pm/ROADMAP.md` (unified).
7. Initialize `.pm/STATE.md` and `.pm/DECISIONS.md`.
8. Announce migration complete. Exit.

## 3. Auto Mode Check

If `--auto` flag is present:
- Extract project context from the provided document
- Skip questioning (Step 4)
- Jump to Step 5 with extracted context
- After PROJECT.md, auto-generate roadmap (Step 6) without approval gate

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

**Decision gate:**
When you could write a clear PROJECT.md, ask:

> "I think I understand what you're building. Ready to create the project brief?"

Options:
- "Create PROJECT.md" — proceed
- "Keep exploring" — continue questioning

## 5. Write PROJECT.md

Create `.pm/` directory structure:

```bash
mkdir -p .pm/features .pm/briefs .pm/reviews .pm/audits
```

Synthesize all gathered context into `.pm/PROJECT.md` using the template from `@~/.claude/ship-pm/templates/project.md`.

## 6. Generate Initial Roadmap (MVP + Backlog)

**Load the PM Scoper persona** from `@~/.claude/ship-pm/agents/pm-scoper.md`.

Analyze PROJECT.md and generate `.pm/ROADMAP.md` using the template from `@~/.claude/ship-pm/templates/roadmap.md`.

**Scope rules (from PM Scoper):**
1. Identify the core flow — the ONE thing the user does
2. Only include items in "The MVP (v1)" where the core flow breaks without them
3. Default to Horizon 2 or 4 — be aggressive about what isn't needed for v1
4. Label "Cut Scope" items clearly.

**Approval gate (interactive mode only):**

Show the generated roadmap and ask:

> "Here's the roadmap. Does the MVP (v1) look tight enough to ship quickly?"

Options:
- "Looks good" — proceed
- "Too ambitious" — cut more from v1
- "Missing something" — add items

## 7. Initialize State

Create `.pm/STATE.md`:

```markdown
# PM State

**Feature:** initialized
**Created:** [timestamp]
**Last Updated:** [timestamp]
**Features Defined:** 0
**Features Completed:** 0

## Next Action
Run `/pm:next` to queue up the first roadmap Feature.
```

## 8. Initialize Decision Log

Create `.pm/DECISIONS.md`:

```markdown
# Product Decisions

---

## [Date] — Project Initialized
**Context:** Starting a new project.
**Decision:** [Stack and key technical choices]
**Rationale:** [Why these choices]
```

## 9. Commit Changes

After the project context has been initialized, perform a git commit:

```bash
git add .pm/
git commit -m "pm: initialize new project context"
```

## 10. Done

Display summary:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► PROJECT CREATED & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Created:
   .pm/PROJECT.md    — project context
   .pm/ROADMAP.md    — unified roadmap (v1 + backlog)
   .pm/STATE.md      — project state
   .pm/DECISIONS.md  — decision log

 Next: Run /pm:next to queue up your first roadmap Feature.
```
