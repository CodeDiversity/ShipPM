# Workflow: Next (Queue Feature)

## 1. Context Gathering

Check if `.pm/ROADMAP.md` exists:
```bash
ls .pm/ROADMAP.md 2>/dev/null
```

Read:
- `.pm/PROJECT.md` — To understand the core value and stack
- `.pm/ROADMAP.md` — To see "The MVP (v1)" list and existing "Feature Details".

## 2. Generate the Feature Definition

Use `@~/.claude/ship-pm/agents/pm-strategist.md` to analyze the MVP list and pick the *next highest-priority* item that isn't yet in "Feature Details".

**Formatting Rules:**
```markdown
### Feature [X]: [Feature Name]
**Goal**: [What this Feature delivers]
**Depends on**: [Previous Feature, or Nothing]
**Requirements**: [[REQ-01], [REQ-02]]
**Success Criteria**:
  1. [Observable behavior]
  2. [Observable behavior]

Tasks:
- [ ] [X]-01: [Brief task idea]
- [ ] [X]-02: [Brief task idea]
```

## 3. Append to ROADMAP.md

Inject the new Feature definition into `.pm/ROADMAP.md` under the `## Feature Details` section.

Update the `## 1. The MVP (v1)` list to mark the feature status if applicable (e.g., mark it as Queued or leave as Not Started).

## 4. Commit Changes

```bash
git add .pm/
git commit -m "pm: queue Feature [X] for execution"
```

## 5. User Output

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► NEXT FEATURE QUEUED & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Added Feature [X]: [Feature Name] to ROADMAP.md

 Goal:
 [Feature goal]

 Next step: 
 Run /pm:brief [X] to generate the design brief.
```
