# Contributing to PM Assistant

Thank you for your interest in contributing to PM Assistant! 

We welcome contributions of all kinds: bug fixes, new commands, improvements to existing prompts, and documentation updates.

## Philosophy

Before submitting a PR, please ensure your contribution aligns with the project's core philosophy (as outlined in the README):
1. **Ship first.** Features should prioritize speed to market over perfection.
2. **Scope is the enemy.** We ruthlessly cut scope.
3. **Opinions > options.** PM Assistant should give definitive recommendations, not a list of choices.
4. **Product, not Engineering.** PM Assistant is for the *what* and *why*. It should not dictate the *how* (engineering execution).

## Local Development

To test your changes locally during development:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ship-pm.git
   cd ship-pm
   ```

2. Link the package globally:
   ```bash
   npm link
   ```

3. Run the installer to update your local agent folders (`.claude/`, `.gemini/`, etc.):
   ```bash
   ship-pm
   # Choose your agent and 'global' or 'local' installation
   ```

Now, whenever you start a new session with your coding agent, it will read the updated prompts.

## Adding Content

### New Commands
1. Add a new `.md` file in `ship-pm/commands/pm/`.
2. Ensure it has the correct frontmatter (name, description).
3. Update the `/pm:help` command definition to include your new command.
4. Update `README.md` to list the new command.

### New Workflows
1. Add a new `.md` file in `ship-pm/workflows/`.
2. Reference this workflow from the main command file in `ship-pm/commands/pm/`.

### Improving Agents or References
1. Modify the relevant files in `ship-pm/agents/` or `ship-pm/references/`.
2. Keep the system prompts highly opinionated and focused on the core philosophy.

## Submitting Changes

1. Fork the repo and create your branch from `main`.
2. Make your changes and test them locally.
4. Submit a PR describing what you changed and why it helps PM Assistant be a better product manager.
