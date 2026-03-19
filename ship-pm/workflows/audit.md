# Workflow: Audit Codebase

## 1. Validate Prerequisites

```bash
ls .pm/PROJECT.md 2>/dev/null
```

**If not found:**
```
Error: No project found. Run /pm:new-project first.
```
Exit.

## 2. Initialize Audit

**Display banner:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► FORENSIC AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Scanning codebase for gaps, tech debt, and incomplete work...
```

**Load Context:**
Read `.pm/ROADMAP.md` and `.pm/ROADMAP.md` to establish the "source of truth" for what *should* exist.

Ensure the audits directory exists:
```bash
mkdir -p .pm/audits
```

## 3. Deep Codebase Scan

Use bash tools (`grep`, `find`) to look for the classic signs of unfinished work and technical debt:

**Look for pending work markers:**
- Grep for `TODO`, `FIXME`, `HACK`, `XXX` across the source code.
- How many are there? Are they concentrated in a specific area?

**Look for mocked/stubbed data:**
- Grep for `mock`, `stub`, `dummy`, `hardcoded`
- Are there UI components still using dummy data instead of an API?

**Look for missing error handling:**
- Grep for `console.log(error)`, `// catch error`, or empty catch blocks.

**Analyze Feature Implementation:**
Pick 3-5 core features from `.pm/ROADMAP.md` that are marked as "done" or are supposedly in progress.
Try to find their actual implementation in the code. Do the files exist? Do they look complete? Are they wired up to the frontend?

## 4. Run PM Forensic Agent

Load `@~/.claude/ship-pm/agents/pm-forensic.md`.

Feed the raw findings from your bash scans to the PM Forensic agent. Ask it to synthesize a structured audit report based on the evidence.

## 5. Write Audit Report

Create an audit file with the current date: `.pm/audits/AUDIT-[YYYY-MM-DD].md`

The content should look like:
```markdown
# Forensic Audit: [Project]
**Date:** [Date]

## 1. Feature Progress vs Reality
- **[Feature Name]**: Claimed complete, but backend endpoint `POST /api/x` is missing.
- **[Feature Name]**: UI built, but using hardcoded mock data.

## 2. Technical Debt & Shortcuts
- Found [N] `TODO` comments. Major concentration in `src/auth/`.
- [Specific shortcut identified, e.g. "No global error boundary"]

## 3. Scope Gaps
- [Requirement from ROADMAP.md] is completely missing from the codebase.

## 4. PM Recommendation
[What should the builder do next? Should we pause new features to clean this up, or push through?]
```

## 6. Commit Changes

After the audit report has been written, perform a git commit:

```bash
git add .pm/
git commit -m "pm: log forensic audit results"
```

## 7. Done

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► AUDIT COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Findings written and committed to: .pm/audits/AUDIT-[YYYY-MM-DD].md
 
 Top issues found:
 - [Key finding 1]
 - [Key finding 2]
 
 Next: Run /pm:next to plan a tech-debt sprint, or fix the gaps manually.
```
