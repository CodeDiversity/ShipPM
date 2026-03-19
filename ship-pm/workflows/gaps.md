# Workflow: Gaps (Forensic Scan)

## 1. Load Context

Read:
- `.pm/ROADMAP.md` — The source of truth for what *should* exist.

## 2. Codebase Scan

Scan the codebase for each feature in the MVP.
Compare reality (code) against the ROADMAP requirements.

## 3. Write Gaps Report

Create `.pm/audits/GAPS-[timestamp].md`.

Report structure:
- **Missing Features:** [List what exists in ROADMAP but not in code]
- **Incomplete Features:** [List what's partially done]
- **Unexpected Features:** [List what's in code but not in ROADMAP]

## 4. Done

Display summary:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► GAPS REPORT GENERATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Wrote: .pm/audits/GAPS-[timestamp].md
```
