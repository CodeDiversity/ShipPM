# Workflow: New Project

## 1. Check Existing Project

```bash
ls .pm/PROJECT.md 2>/dev/null
```

**If PROJECT.md exists:** Exit with error.

## 2. Check for GSD Migration

If legacy `.planning/` exists, migrate engineering facts into `.pm/PROJECT.md` and `.pm/ROADMAP.md`. Skip questioning.

## 3. Auto Mode Check

If `--auto` flag is present, skip questioning and auto-generate project documents.

## 4. Deep Questioning

Engage in a conversation to understand the product idea.
Wait until you could write a clear PROJECT.md, then ask:
> "I think I understand what you're building. Ready to create the project bible?"

## 5. Write PROJECT.md

Create `.pm/` directory structure:
```bash
mkdir -p .pm/features .pm/briefs .pm/reviews .pm/audits
```

Synthesize context into `.pm/PROJECT.md` using the template.

## 6. Generate Initial Roadmap

Analyze PROJECT.md and generate `.pm/ROADMAP.md` using the template.

**Approval gate:**
Show the generated roadmap and ask:
> "Here's the roadmap. Does the MVP (v1) look tight enough to ship quickly?"

## 7. Commit Changes

```bash
git add .pm/
git commit -m "pm: initialize project bible and roadmap"
```

## 8. Done

Display summary:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► PROJECT CREATED & COMMITTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Created:
   .pm/PROJECT.md    — project bible (vision + decisions)
   .pm/ROADMAP.md    — unified roadmap (v1 + backlog)

 Next: Run /pm:next to queue up your first Feature.
```
