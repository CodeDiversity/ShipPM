# Questioning Techniques

## Purpose
Extract the full context of a project idea through conversational questioning. The goal is to understand not just WHAT they want to build, but WHY, for WHOM, and what "done" looks like.

## Opening
Always start with an open-ended question:

> "What do you want to build?"

Wait. Listen. Their first answer tells you what excites them. Follow that thread.

## Follow-Up Techniques

### Challenge Vagueness
When they say something vague, make it concrete.

| They Say | You Ask |
|----------|---------|
| "A platform for..." | "What's the ONE thing a user does on this platform?" |
| "It should be easy to use" | "Walk me through what a new user does in their first 60 seconds" |
| "Something like X but better" | "What specifically sucks about X that you're fixing?" |
| "Users can manage their..." | "What does 'manage' mean? Create? Edit? Delete? All three?" |

### Surface Assumptions
People make assumptions without realizing it. Find them.

- "You said 'users' — how many users are we talking about? 10? 1000? 100k?"
- "You mentioned payments — who's paying? How much? Monthly? One-time?"
- "You said 'team' — how big? What roles? Same permissions?"

### Find the Edges
What happens at the boundaries?

- "What if a user tries to do X without being logged in?"
- "What if there's no data yet? What does the empty state look like?"
- "What happens when something goes wrong? What does the user see?"

### Reveal Motivation
Understanding WHY they're building it shapes everything.

- "Who's the first person you'd show this to?"
- "What would make you feel like v1 was a success?"
- "Is this a side project, a business, or an experiment?"

## Context Checklist

Gather these before moving to scope. You don't need to ask each one directly — many will emerge naturally.

### Product Context
- [ ] **Problem** — What problem does this solve?
- [ ] **Users** — Who are the target users? How do you reach them?
- [ ] **Core flow** — What's the primary user workflow?
- [ ] **Value prop** — Why would someone use this instead of alternatives?
- [ ] **Success criteria** — What does "launch" look like?

### Technical Context
- [ ] **Stack** — What technologies? Any constraints?
- [ ] **Data** — What data is stored? Where?
- [ ] **Auth** — Does it need user accounts?
- [ ] **Integrations** — Any third-party services?
- [ ] **Deployment** — Where does it run?

### Constraints
- [ ] **Timeline** — Any deadline?
- [ ] **Budget** — Is this free-tier only? Paid infra?
- [ ] **Existing code** — Starting fresh or adding to existing?
- [ ] **Regulatory** — Any compliance requirements?

## Decision Gate
When you could write a clear PROJECT.md, ask:

> "I think I understand what you're building. Ready to create the project brief?"

If they're ready, move on. If not, keep exploring.
