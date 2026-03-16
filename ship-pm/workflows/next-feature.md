# Workflow: Add Feature

## 1. Context Gathering

Check if `.pm/ROADMAP.md` exists:
```bash
ls .pm/ROADMAP.md 2>/dev/null
```
If it DOES NOT exist, initialize it first with the basic scaffold (use `AskUserQuestion` to confirm this is a new project if unsure, but generally just create the file structure).

Read:
- `.pm/PROJECT.md` — To understand the core value and stack
- `.pm/SCOPE.md` — To see what's in scope for v1
- `.pm/ROADMAP.md` — To see what Features already exist and find the next logical Feature number (e.g., if Feature 2 exists, we are building Feature 3).

## 2. Generate the Feature Definition

Use `@~/.claude/ship-pm/agents/pm-strategist.md` to analyze the scope and pick the *next highest-priority* chunk of work. Group 1-3 related scope items into a single cohesive Feature.

**Formatting Rules for Agent Compatibility:**
The Feature MUST be formatted structurally to work well with downstream agents:

```markdown
### Feature [X]: [Feature Name]
**Goal**: [What this Feature delivers]
**Depends on**: [Previous Feature, or Nothing]
**Requirements**: [[REQ-01], [REQ-02] - optional mapping to scope items]
**Success Criteria** (what must be TRUE):
  1. [Observable behavior from user perspective]
  2. [Observable behavior from user perspective]
**Tasks**: TBD

Tasks:
- [ ] [X]-01: [Brief task idea]
- [ ] [X]-02: [Brief task idea]
```

## 3. Append to ROADMAP.md

Inject the new Feature definition into `.pm/ROADMAP.md` under the `## Feature Details` section.

If the file does not have a `## Feature Details` section, create it.

Update the `## Features` overview list at the top of the file to include the newly added Feature:
`- [ ] **Feature [X]: [Name]** - [One-line description]`

Update the `## Progress` table at the bottom of the file to include the newly added Feature:
`| [X]. [Name] | 0/TBD | Not started | - |`

## 4. Commit Changes

After the new feature has been added to the roadmap, perform a git commit:

```bash
git add .pm/
git commit -m "pm: add Feature [X] to roadmap"
```

## 5. User Output

Display the newly created Feature to the user:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► NEXT FEATURE SCOPED & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Added Feature [X]: [Feature Name] to ROADMAP.md

 Goal:
 [Feature goal]

 Scope covered:
 - [Scope item 1]
 - [Scope item 2]

 Next step: 
 To plan this Feature for execution with your agent, run its planning command.
```

## 6. Sync State
Remind the user that they can run `/pm:sync` later to check off these items in `SCOPE.md` once the coding agent finishes building them.
