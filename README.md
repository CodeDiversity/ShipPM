# PM Assistant 🚢

**Ship, don't plan.**

PM Assistant is an opinionated, minimalist product management framework designed for solo builders and small teams. It turns your IDE into a high-powered PM partner that forces you to define a tight MVP, cut scope ruthlessly, and ship features fast.

## Installation

```bash
# Add to your global clauderic setup (or use as a standalone template)
git clone https://github.com/CodeDiversity/ShipPM ~/.claude/ship-pm
```

## Core Commands

### Workflow

```
/pm:new-project [--auto]     Initialize project and MVP roadmap
/pm:ideas [idea|--refresh]   Brainstorm new ideas or discuss one
/pm:refine [feature]         Deep dive and spec out a feature
/pm:next                     Queue the next MVP feature for building
/pm:brief <feature>          Generate design brief for coding agent
/pm:review <feature>         Review work against acceptance criteria
/pm:sync [feature]           Sync feature state from codebase
/pm:audit                    Scan codebase for gaps and tech debt
/pm:ship-check               Run launch readiness audit
```

### Utilities

```
/pm:cut-scope [feature]      Move MVP items to backlog to ship faster
/pm:prioritize [--auto]      Re-rank roadmap based on new signals
/pm:user-feedback [text]     Log and analyze user feedback
/pm:bug [desc]               Log a bug report and evaluate severity
/pm:decision [desc]          Log a product decision
/pm:map [--regen]            Map architecture and integrations
/pm:progress                 Show project status
/pm:update                   Check for and install updates
/pm:help                     This help text
```

## Typical Flow

1. **Define the product**: `/pm:new-project`
2. **Identify the first chunk of work**: `/pm:next`
3. **Generate the technical design**: `/pm:brief 1`
4. **[Execution Layer builds the code using the Brief]**
5. **Verify the code meets the design**: `/pm:review 1`
6. **Mark the feature complete**: `/pm:sync`
7. **[Repeat until MVP is complete]**
8. **Audit launch readiness**: `/pm:ship-check`

## Philosophy

1. **Ship first.** The goal is to get in front of users, not to build the perfect product.
2. **Scope is the enemy.** Every feature before launch delays launch.
3. **Opinions > options.** The system makes recommendations, not suggestions.
4. **No Enterprise overhead.** No Jira, no standups, no "PO layer". Just you and the code.

## Output

All PM output lives in `.pm/` in your project:

```
.pm/
├── PROJECT.md              # Project context
├── ROADMAP.md              # Unified roadmap (MVP + Backlog + Ideas)
├── STATE.md                # Project tracking state
├── DECISIONS.md            # Decision log
├── features/               # Detailed feature specifications
├── briefs/                 # Implementation briefs for coding agents
├── reviews/                # Work reviews
└── audits/                 # Launch audits
```

*Note: All PM Assistant files live safely in `.pm/` to isolate them from your application code.*

## License

MIT
