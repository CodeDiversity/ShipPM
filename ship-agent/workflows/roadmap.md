# Workflow: Roadmap

## 1. Validate Prerequisites

```bash
ls .pm/PROJECT.md 2>/dev/null
```

**If not found:**
```
Error: No project found. Run /pm:new-project first.
```
Exit.

**If ROADMAP.md exists and `--refresh` not passed:**
```
Roadmap exists at `.pm/ROADMAP.md`. Use `/pm:roadmap --refresh` to regenerate.
```
Exit.

## 2. Load Context

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► ROADMAP — What to build next
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Read all available PM state:
- `.pm/PROJECT.md` — problem, target user, value prop
- `.pm/SCOPE.md` — what was in scope, what was deferred ("Later" and "Out of Scope")
- `.pm/FEATURES.md` — what's implemented now (if exists)
- `.pm/ARCHITECTURE.md` — current stack and integrations (if exists)
- `.pm/DECISIONS.md` — past product decisions (if exists)

**Load persona:** `@~/.claude/ship-agent/agents/pm-strategist.md`

## 3. Analyze Current State

### 3a. What Exists
From FEATURES.md and codebase, understand:
- What the product does today
- What integrations are in place
- What infrastructure is available
- What patterns are established

### 3b. What Was Deferred
From SCOPE.md, collect:
- "Out of Scope" items — were cut from v1 deliberately
- "Later" items — acknowledged as future work
- "Non-Goals" — revisit whether any have become goals

### 3c. What Users Might Need
Based on the project context, reason about:
- What's the next thing a user would ask for after using v1?
- What friction exists in the current core flow?
- What adjacent problems does the target user have?
- What would make this product sticky (retention drivers)?

## 4. Research Product Space

Use web search to research the product category:

### 4a. Competitor Analysis
Search for:
- "[product category] tools" / "[product category] apps"
- Identify 3-5 competitors or similar products
- Note which features they offer that this product doesn't
- Note which features they prioritize (what's on their homepage?)

### 4b. Market Patterns
Search for:
- "[product category] trends [current year]"
- Common feature requests in the space (Reddit, forums, Product Hunt)
- Emerging patterns or expectations

### 4c. Standard Expectations
Based on the project type, identify features users typically expect:
- **SaaS:** onboarding, settings, notifications, team features, billing
- **API:** documentation, SDKs, rate limiting, versioning
- **Consumer app:** profiles, social features, sharing, personalization
- **Tool:** templates, automation, integrations, export

## 5. Generate Feature Suggestions

For each suggested feature, evaluate:

| Factor | Question |
|--------|----------|
| **User Impact** | How much does this improve the user's experience? (1-5) |
| **Business Value** | Does this drive acquisition, retention, or revenue? |
| **Effort** | How complex to build given current architecture? (S/M/L/XL) |
| **Dependencies** | What must exist first? |
| **Risk** | What could go wrong? |

### Categorize into Horizons

**Horizon 1 — Now (Next 2-4 weeks)**
Quick wins and high-impact improvements. These build on existing architecture and address immediate user needs.
- User impact: High
- Effort: S or M
- Dependencies: None or minimal

**Horizon 2 — Next (1-3 months)**
Features that require planning or new architecture. These expand the product's value proposition.
- User impact: High to Medium
- Effort: M or L
- Dependencies: May require Horizon 1 items

**Horizon 3 — Later (3-6 months)**
Strategic features that change the product's trajectory. These are bets on where the market is going.
- User impact: Medium (but strategic)
- Effort: L or XL
- Dependencies: Require significant foundation

**Horizon 4 — Long-Term & Potential Ideas (6+ months)**
Moonshots, major architectural shifts, and raw ideas that need more validation before planning.
- User impact: Unknown / Transformative
- Effort: XL
- Dependencies: High uncertainty

## 6. Present and Approve Ideas (Interactive)

Before writing the file, you MUST present the generated roadmap suggestions to the user **one by one** (or horizon by horizon) for explicit approval.

> "Based on your current product and the market, I've come up with a few ideas. I'll run them by you one at a time. Should we add this to the roadmap?"
> 
> **Idea 1 (Horizon 1):** [Feature Name] - [Brief Goal]
> Keep it, tweak it, or discard it?

**Use `AskUserQuestion` to get their input.**

**Approval Loop:**
1. Present the first idea. Ask if it should be added to the roadmap.
2. If the user approves, add it to your working list. If they discard, drop it. If they tweak, refine it.
3. Present the next idea.
4. Once you have gone through your generated ideas, explicitly ask:
   > "Are there any specific features users have requested? More importantly, do you have any long-term moonshots or wild ideas you want to add to Horizon 4?"
5. If the user provides ideas, validate them, ask a quick follow-up to refine the "Hypothesis", and add them to the working roadmap.

Once all ideas have been reviewed and approved, proceed to save.

## 7. Write ROADMAP.md

Create `.pm/ROADMAP.md` using `@~/.claude/ship-agent/templates/roadmap.md`.

Also log a decision:
```markdown
---

## [Date] — Roadmap Created
**Context:** Post-v1, planning next features.
**Decision:** Prioritized [Horizon 1 count] immediate features, [Horizon 2 count] near-term, [Horizon 3 count] strategic, and captured [Horizon 4 count] long-term ideas.
**Rationale:** Based on current capabilities, deferred scope, competitor analysis, and user needs.
```

## 8. Done

Display:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► ROADMAP GENERATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Horizon 1 (Now):   [count] features
 Horizon 2 (Next):  [count] features
 Horizon 3 (Later): [count] features
 Horizon 4 (Ideas): [count] ideas

 Competitors analyzed: [count]

 Written: .pm/ROADMAP.md

 Next: Pick a Horizon 1 feature and run /pm:next-feature to queue it.
```
