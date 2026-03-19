---
name: pm:help
description: List all PM Assistant commands
allowed-tools:
  - Read
---

<objective>
Display all available PM Assistant commands with descriptions.
</objective>

<process>
Display this help text:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ASSISTANT — Ship, don't plan.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 CORE WORKFLOW

 /pm:new-project [--auto]     Initialize project bible and roadmap
 /pm:ideas [idea|--refresh]   Brainstorm new ideas or discuss one
 /pm:refine [feature]         Deep dive and spec out a feature
 /pm:next                     Queue the next MVP feature for building
 /pm:brief <feature>          Generate design brief for coding agent
 /pm:review <feature>         Review work against acceptance criteria
 /pm:sync [feature]           Sync feature state from codebase
 /pm:gaps                     Scan codebase for missing features
 /pm:ship-check               Run launch readiness audit

 UTILITIES

 /pm:cut-scope [feature]      Move MVP items to backlog to ship faster
 /pm:prioritize [--auto]      Re-rank roadmap based on new signals
 /pm:user-feedback [text]     Log and analyze user feedback
 /pm:bug [desc]               Log a bug report and evaluate severity
 /pm:decision [desc]          Log a product decision/learning
 /pm:map [--regen]            Map architecture and integrations
 /pm:progress                 Show project status
 /pm:update                   Check for and install updates
 /pm:help                     This help text

 TYPICAL FLOW

 /pm:new-project → /pm:next → /pm:brief → [build with agent]
 → /pm:sync → /pm:review → /pm:next → ...
 → /pm:ideas → /pm:refine → /pm:prioritize → /pm:ship-check
```
</process>
