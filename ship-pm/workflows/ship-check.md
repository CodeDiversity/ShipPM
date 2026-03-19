# Workflow: Ship Check

## 1. Validate Prerequisites

```bash
ls .pm/PROJECT.md 2>/dev/null
```

**If not found:**
```
Error: No project found. Run /pm:new-project first.
```
Exit.

## 2. Load Context

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► SHIP CHECK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Read:
- `.pm/PROJECT.md` — project name, stack, constraints
- `.pm/ROADMAP.md` — what's in scope (to know what to check for)

**Load persona:** `@~/.claude/ship-pm/agents/pm-auditor.md`
**Load checklist:** `@~/.claude/ship-pm/references/launch-checklist.md`

## 3. Scan Repository

Inspect the codebase systematically for each checklist category. Use Glob, Grep, and selective file reading.

### Auth & Security (if project has auth)
- [ ] Grep for password handling — look for bcrypt, argon2, scrypt, plaintext
- [ ] Check for session/token expiry configuration
- [ ] Look for password reset flow
- [ ] Grep for rate limiting middleware
- [ ] Grep for hardcoded secrets, API keys, passwords
- [ ] Check CORS configuration

### Legal
- [ ] Look for privacy policy page/route
- [ ] Look for terms of service page/route
- [ ] Check if they're linked from the app

### Billing (if project has payments)
- [ ] Look for webhook handlers (Stripe, etc.)
- [ ] Check for subscription lifecycle handling
- [ ] Look for customer portal integration

### Ops
- [ ] Check for README.md with setup instructions
- [ ] Look for .env.example
- [ ] Look for health check endpoint
- [ ] Check for deployment config (Dockerfile, vercel.json, etc.)

### Testing
- [ ] Count test files
- [ ] Check for test framework config
- [ ] Check if test script exists in package.json (or equivalent)

### UX
- [ ] Look for error boundary / global error handler
- [ ] Look for 404 page
- [ ] Look for loading state patterns

## 4. Classify Findings

For each signal found (or missing), classify:
- 🔴 **Blocker** — legal liability, security vulnerability, broken core flow
- 🟡 **Warning** — should fix but won't break things
- 🔵 **Info** — nice to have

## 5. Determine Verdict

- **READY TO LAUNCH ✅** — No blockers. Warnings noted.
- **NOT READY ❌** — Blockers found that must be fixed.

## 6. Generate Report

Write `.pm/audits/SHIP-CHECK-[YYYY-MM-DD].md` using `@~/.claude/ship-pm/templates/ship-check.md`.

## 7. Done

Display:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► SHIP CHECK COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Verdict: [READY ✅ / NOT READY ❌]

 🔴 Blockers: [count]
 🟡 Warnings: [count]
 🔵 Info:     [count]

 Report: .pm/audits/SHIP-CHECK-[date].md
```

If NOT READY, list blockers:
```
 Blockers:
   🔴 [blocker 1]
   🔴 [blocker 2]

 Fix blockers and run /pm:ship-check again.
```
