# PM Assistant

**Ship, don't plan.** An opinionated meta-prompting framework for solo builders.

PM Assistant gives your coding agent (Claude Code, Gemini CLI) the product thinking it needs to ship features that actually solve real problems — not just features that compile.

## What It Does

PM Assistant adds `/pm:*` slash commands to your coding agent. These commands guide the agent to think like an opinionated PM: scoping MVPs, prioritizing tasks, writing implementation briefs, reviewing work, and auditing launch readiness.

**It is NOT a project management tool.** No Jira, no sprints, no story points. It's a set of prompts that make your coding agent smarter about *what* to build and *why*.

## Install

```bash
npx ship-pm@latest
```

Choose your runtime (Claude Code, Codex, Gemini, or all) and install location (global or local).

Verify:
```
/pm:help
```

## Commands

### Core Workflow

```
/pm:new-project [--auto]     Initialize project through questioning
/pm:scope [--regen]          Generate MVP scope from project
/pm:next-feature             Append the next highest priority feature to ROADMAP
/pm:brief <feature-id>       Create coding-agent brief from feature
/pm:review <feature-id>      Review work against acceptance criteria
/pm:sync                     Sync roadmap state from codebase
/pm:audit                    Scan codebase for gaps and tech debt
/pm:retro <feature-id>       Post-feature retrospective
/pm:ship-check               Run launch readiness audit
```

### Strategy

```
/pm:roadmap [--refresh]      Suggest new features and moonshots
/pm:discuss [idea]           Brainstorm/pitch a specific feature
/pm:prioritize [--auto]      Re-rank roadmap based on new signals
/pm:competitor [name]        Run competitive analysis
/pm:user-feedback [text]     Log and analyze user feedback
```

### Utilities

```
/pm:decision [desc]          Log a product decision
/pm:cut-scope [item]         Remove scope to accelerate launch
/pm:progress                 Show project status
/pm:help                     List all commands
```

## Typical Flow

1. Define the product: `/pm:new-project`
2. Extract the v1 MVP: `/pm:scope`
3. Identify the next chunk of work: `/pm:next-feature`
4. Generate the technical design: `/pm:brief 1`
5. **[Execution Layer builds the code using the Brief]**
6. Verify the code meets the design: `/pm:review 1`
7. Reflect on what was learned: `/pm:retro 1`
8. Mark the feature complete: `/pm:sync`
9. **[Repeat 3-8 until MVP is complete]**
10. Check for gaps or tech debt: `/pm:audit`
11. Audit launch readiness: `/pm:ship-check`
11. **[Post-launch]** Collect feedback: `/pm:user-feedback`
12. Pressure test a new idea: `/pm:discuss`
13. Re-rank priorities: `/pm:prioritize`
14. Plan what's next: `/pm:roadmap`

## Works with Autonomous Agents

PM Assistant handles the *product* layer. It is designed to constrain and guide autonomous coding agents that handle the *engineering* layer. They complement each other:

| PM Assistant (Product) | Coding Agent (Engineering) |
|-------------|-----|
| `/pm:scope` — what to build | Plans the roadmap feature |
| `/pm:brief` — implementation constraints | Writes the code |
| `/pm:review` — meets acceptance criteria? | Verifies the code |
| `/pm:ship-check` — ready to launch? | Audits code quality |

## Philosophy

1. **Ship first.** The goal is to get in front of users, not to build the perfect product.
2. **Scope is the enemy.** Every feature before launch delays launch.
3. **Opinions > options.** The system makes recommendations, not suggestions.
4. **Launch is the beginning.** Everything before launch is guessing.

## How It Works

PM Assistant is a collection of `.md` files that function as meta-prompts:

```
ship-pm/
├── commands/pm/    # Slash command definitions
├── workflows/      # Step-by-step processes
├── agents/         # Specialized PM personas
├── references/     # Shared PM knowledge
└── templates/      # Document templates
```

Each command references workflows, which reference agents and references. The coding agent reads these files and follows the instructions — acting as an opinionated PM that pushes you to ship.

## Output

All PM output lives in `.pm/` in your project:

```
.pm/
├── PROJECT.md              # Project context
├── SCOPE.md                # MVP scope
├── ROADMAP.md              # Roadmap concepts
├── DECISIONS.md            # Decision log
├── STATE.md                # Project state
├── features/               # Detailed feature specs
├── briefs/                 # Constraints for coding agents
├── reviews/                # Work reviews
└── audits/                 # Launch audits
```

*Note: All PM Assistant files live safely in `.pm/` to isolate them from your coding agent's execution layer.*

## Contributing

Want to help make PM Assistant more opinionated? Check out our [Contributing Guide](CONTRIBUTING.md).

## License

MIT
