# Workflow: Discuss Feature

## 1. Validate Prerequisites

```bash
ls .pm/PROJECT.md 2>/dev/null
```

**If not found:**
```
Error: No project found. Run /pm:new-project first.
```
Exit.

## 2. Initialize Discussion

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► FEATURE DISCUSSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Load Context:**
Read `.pm/PROJECT.md`, `.pm/SCOPE.md`, and `.pm/ROADMAP.md`.

**Identify Topic:**
If `$ARGUMENTS` is provided, use it as the starting point.
If not, ask: "What feature idea are you thinking about? Pitch it to me."

## 3. The PM Socratic Drill

Load `@~/.claude/ship-agent/agents/pm-strategist.md`.

Run a Socratic drill to pressure-test the idea. The PM's goal is not to say "yes," but to ensure the idea is worth the builder's limited time.

**Ask questions like:**
1. "Who is this for? (Is it a core user or an edge case?)"
2. "What problem does this *actually* solve that isn't already solved?"
3. "Wait... can we ship the product *without* this? (Crucial for MVP state)"
4. "Is this a 'distraction' or a 'differentiator'?"
5. "If we do this, what are we NOT doing instead?"

**Loop:**
Listen to the user's answers. Challenge them if they are being too hand-wavy. Refine the concept together.

## 4. The Decision Gate

Once the idea has been explored, the PM must give a recommendation.

> "Okay, I've heard the case. Here is my take: [Add to Roadmap / Add to 'Later' / Scraps/Discard]."

Ask for the final decision:
> "Should we add this to the roadmap?"

## 5. Update Roadmap (if agreed)

If the user says yes:
1. Determine the appropriate **Horizon** (1, 2, 3, or 4).
2. Append the feature to `.pm/ROADMAP.md` using the standard format.
3. If this replaces something existing, remove or move the old item.

## 6. Log Decision

Append to `.pm/DECISIONS.md`:

```markdown
---

## [Date] — Feature Discussion: [Feature Name]
**Context:** Discussed adding [feature] to the roadmap.
**Decision:** [Added to Roadmap / Deferred / Dropped]
**Rationale:** [Summary of the PM/Builder consensus]
```

## 7. Done

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► DISCUSSION COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Result: [Result]
 
 [If added]
 Location: .pm/ROADMAP.md (Horizon [N])
 
 Next: Run /pm:next-feature to queue it up, or /pm:refine to spec it out.
```
