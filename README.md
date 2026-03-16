# PM Assistant

> [!WARNING]
> **Beta Release:** Ship PM is currently in public beta. Expect some sharp edges and raw workflows as kinks are continuously being worked out. Contributions and feedback are highly encouraged!

**Ship, don't plan.** An opinionated meta-prompting framework for solo builders.

PM Assistant gives your coding agent (Claude Code, Gemini CLI and Codex) the product thinking it needs to ship features that actually solve real problems — not just features that compile.


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
/pm:refine [idea]            Conversational refinement of a feature idea
/pm:next-feature             Append the next highest priority feature to ROADMAP
/pm:po-feature <id>          Initialize/update Product Owner "Epic" state
/pm:brief <feature-id>       Create coding-agent brief from feature
/pm:review <feature-id>      Review work against acceptance criteria
/pm:sync                     Sync roadmap state from codebase & GSD phases
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
/pm:po-onboard               Generate onboarding for a new PO
```

### Utilities

```
/pm:bug [desc]               Log and assess a bug report
/pm:decision [desc]          Log a product decision
/pm:cut-scope [item]         Remove scope to accelerate launch
/pm:map [--regen]            Document architecture with diagrams
/pm:progress                 Show project status
/pm:update                   Check for PM Assistant updates
/pm:help                     List all commands
```

## Typical Flow

1. **Define the product**: `/pm:new-project`
2. **Extract the v1 MVP**: `/pm:scope`
3. **Refine a specific idea**: `/pm:refine "magic link auth"`
4. **Identify the next chunk of work**: `/pm:next-feature`
5. **Initialize PO state**: `/pm:po-feature 1`
6. **Generate the technical design**: `/pm:brief 1`
7. **[Execution Layer builds the code using the Brief]**
8. **Verify the code meets the design**: `/pm:review 1`
9. **Reflect on what was learned**: `/pm:retro 1`
10. **Mark the feature complete**: `/pm:sync`
11. **[Repeat until MVP is complete]**
12. **Check for gaps or tech debt**: `/pm:audit`
13. **Audit launch readiness**: `/pm:ship-check`

## Feature Lifecycle Example

Here is how a single feature moves through the system:

1.  **Refine**: You run `/pm:refine "user profiles"`. The PM asks about fields, avatars, and public vs. private. It creates `.po/features/user-profiles.md`.
2.  **Queue**: You run `/pm:next-feature`. It pulls the "User Profiles" spec into the main `.pm/ROADMAP.md`.
3.  **State**: You run `/pm:po-feature 2`. It initializes the "Epic" tracking for the Product Owner in `.po/features/02-user-profiles.md`.
4.  **Brief**: You run `/pm:brief 2`. It locks in the decision to use Gravatar for avatars and saves it in `.pm/briefs/02-user-profiles/02-BRIEF.md`.
5.  **Build**: Your coding agent reads the brief and writes the React components and API routes.
6.  **Review**: You run `/pm:review 2`. The PM checks the code, sees avatars are working, and marks it **PASS**.
7.  **Sync**: You run `/pm:sync`. The PM scans the codebase, confirms the new profile routes exist, and automatically updates the status in `.po/features/02-user-profiles.md` to **Implemented ✅**.
8.  **Commit**: Every step above that modifies the `.pm/` or `.po/` directories automatically triggers a git commit to keep your product history clean.

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

All PM output lives in `.pm/` and `.po/` in your project:

```
.pm/
├── PROJECT.md              # Project context
├── SCOPE.md                # MVP scope
├── ROADMAP.md              # Roadmap concepts
├── DECISIONS.md            # Decision log
├── STATE.md                # Project state
├── briefs/                 # Constraints for coding agents
├── reviews/                # Work reviews
└── audits/                 # Launch audits

.po/
└── features/               # Detailed feature specs and state
```

*Note: All PM Assistant files live safely in `.pm/` and `.po/` to isolate them from your coding agent's execution layer.*

## Contributing

Want to help make PM Assistant more opinionated? Check out our [Contributing Guide](CONTRIBUTING.md).

## License

MIT
