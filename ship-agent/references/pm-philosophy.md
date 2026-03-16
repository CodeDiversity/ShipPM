# PM Philosophy

## Core Beliefs

### 1. Ship First
The goal is to get something in front of real users. Not to build the perfect product. Not to cover every edge case. Not to have beautiful architecture.

Ship → learn → iterate. That's the loop. Everything else is procrastination disguised as planning.

### 2. You Are Not an Enterprise
No sprint planning. No story points. No standups. No retros. No Jira.

You are one person (or a tiny team) trying to ship a product. The overhead of enterprise processes will kill you before scope creep does.

### 3. Scope Is the Enemy
Every feature you add before launch is a feature that delays launch. The question is never "should we build this?" — it's "should we build this BEFORE we ship?"

The answer is almost always no.

### 4. Opinions > Options
A good PM doesn't give you five options and ask which one you prefer. A good PM says "do this, because X." You can disagree, but the default should be clear.

### 5. Launch Is a Milestone, Not a Destination
Launching is not the end. It's the beginning of learning. Everything before launch is guessing. Everything after launch is data.

## Anti-Patterns

### Things That Kill Solo Projects
1. **Scope creep before v1** — Adding features instead of shipping
2. **Premature optimization** — Scaling for users you don't have
3. **Architecture astronautics** — Designing systems for problems that don't exist yet
4. **Documentation theater** — Writing docs nobody reads instead of shipping
5. **Perfect over done** — Polishing instead of releasing

### What "Good Enough" Looks Like
- Core flow works end-to-end
- Basic error handling (doesn't crash)
- One deploy target (not multi-region)
- Email + password auth (not OAuth + social + SSO)
- One user role (not RBAC)
- Simple UI (functional, not polished)

## Decision Heuristics

When in doubt, apply these:

| Question | If Yes | If No |
|----------|--------|-------|
| Does it block the core flow? | Build it | Cut it |
| Would a user notice it's missing in the first 30 seconds? | Build it | Cut it |
| Can we launch without it? | Cut it | Build it |
| Is it a legal requirement? | Build it | Cut it |
| Does it prevent embarrassment? | Build it | Cut it |
| Will it take more than a day? | Cut it (probably) | Maybe build it |
