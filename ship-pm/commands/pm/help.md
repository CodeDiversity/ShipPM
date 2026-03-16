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

 /pm:new-project [--auto]     Initialize project through questioning
 /pm:refine [feature]         Discuss and flesh out a feature spec
 /pm:scope [--regen]          Generate MVP scope from project
 /pm:next-feature             Append the next logical feature to ROADMAP
 /pm:brief <feature>          Generate design brief for coding agent
 /pm:review <feature>         Review work against acceptance criteria
 /pm:sync [feature]           Sync feature state from codebase
 /pm:audit                    Scan codebase for gaps and tech debt
 /pm:retro <feature>          Post-feature retrospective
 /pm:ship-check               Run launch readiness audit

 PRODUCT OWNER DOCS

 /pm:po-onboard               Generate an onboarding document for the Product Owner
 /pm:po-feature <feature>     Generate/update PO documentation for a specific Feature

 STRATEGY

 /pm:roadmap [--refresh]      Research and suggest next features
 /pm:discuss [idea]           Topic-specific feature discussion
 /pm:prioritize [--auto]      Re-rank roadmap based on new signals
 /pm:competitor [name]        Run competitive analysis
 /pm:user-feedback [text]     Log and analyze user feedback
 /pm:map [--regen]            Map architecture and integrations

 UTILITIES

 /pm:bug [desc]               Log a bug report and evaluate severity
 /pm:decision [desc]          Log a product decision
 /pm:cut-scope [item]         Remove scope to accelerate launch
 /pm:progress                 Show project status
 /pm:update                   Check for and install updates
 /pm:help                     This help text

 TYPICAL FLOW

 /pm:new-project → /pm:refine → /pm:scope → /pm:next-feature → /pm:brief
 → [build with agent] → /pm:sync → /pm:review → /pm:retro
 → /pm:next-feature → ... → /pm:discuss → /pm:prioritize → /pm:roadmap
```
</process>
