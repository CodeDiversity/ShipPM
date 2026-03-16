# Workflow: Decision

## 1. Parse Arguments

If `$ARGUMENTS` is provided, use it as the decision description.
If no arguments, ask the user:
- "What decision did you make?"
- "Why this choice? What alternatives did you consider?"

## 2. Load Context

Read `.pm/DECISIONS.md` if it exists.
Read `.pm/PROJECT.md` for project context.

## 3. Gather Decision Details

If arguments didn't include full context, ask the user:
1. **Context:** "What prompted this decision?"
2. **Alternatives:** "What options did you consider?"
3. **Rationale:** "Why this choice over the alternatives?"
4. **Impact:** "What does this affect going forward?"

## 4. Log Decision

Append to `.pm/DECISIONS.md` using `@~/.claude/ship-pm/templates/decision.md` format:

```markdown
---

## [Date] — [Decision Title]
**Context:** [What prompted this]
**Decision:** [What was decided]
**Rationale:** [Why]
**Alternatives Considered:**
- [Option] — [rejected because]
**Impact:** [What this affects]
```

## 5. Commit Changes

After the decision has been logged, perform a git commit:

```bash
git add .pm/
git commit -m "pm: log product decision"
```

## 6. Done

```
Decision logged and committed to .pm/DECISIONS.md
```
