#!/usr/bin/env node

/**
 * Ship PM Installer
 *
 * Installs Ship Agent slash commands for coding agents.
 * Modeled after standard agent installer patterns.
 *
 * Usage: npx ship-agent@latest
 */

import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { createInterface } from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SOURCE_DIR = resolve(__dirname, '..', 'ship-agent');

// ─── Colors ────────────────────────────────────────

const bold = (s) => `\x1b[1m${s}\x1b[0m`;
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

// ─── Prompts ───────────────────────────────────────

function ask(question, options) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    console.log();
    console.log(bold(question));
    options.forEach((opt, i) => {
      console.log(`  ${i + 1}. ${opt.label}`);
    });
    rl.question(`\n  Choice [1-${options.length}]: `, (answer) => {
      rl.close();
      const idx = parseInt(answer, 10) - 1;
      if (idx >= 0 && idx < options.length) {
        resolve(options[idx].value);
      } else {
        resolve(options[0].value); // default to first
      }
    });
  });
}

// ─── File Copy ─────────────────────────────────────

function copyDirRecursive(src, dest) {
  let count = 0;
  mkdirSync(dest, { recursive: true });

  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    const stat = statSync(srcPath);

    if (stat.isDirectory()) {
      count += copyDirRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
      count++;
    }
  }
  return count;
}

// ─── Runtime Configs ───────────────────────────────

const RUNTIMES = {
  claude: {
    label: 'Claude Code',
    commandsDir: (home) => join(home, '.claude', 'commands', 'pm'),
    configBase: (home) => join(home, '.claude', 'ship-agent'),
  },
  gemini: {
    label: 'Gemini CLI',
    commandsDir: (home) => join(home, '.gemini', 'commands', 'pm'),
    configBase: (home) => join(home, '.gemini', 'ship-agent'),
  },
  codex: {
    label: 'Codex CLI',
    // Codex uses ~/.codex/prompts/ for custom commands (flat structure)
    commandsDir: (home) => join(home, '.codex', 'prompts'),
    configBase: (home) => join(home, '.codex', 'ship-agent'),
    // Codex command files are prefixed with pm- instead of nested in pm/
    flatCommands: true,
  },
  all: {
    label: 'All runtimes',
    runtimes: ['claude', 'gemini', 'codex'],
  },
};

// ─── Install Logic ─────────────────────────────────

async function installForRuntime(runtime, home, scope) {
  const config = RUNTIMES[runtime];
  if (!config || config.runtimes) return 0;

  // Determine base paths
  const configBase = config.configBase(home);
  let commandsDir;

  if (scope === 'global') {
    commandsDir = config.commandsDir(home);
  } else {
    if (config.flatCommands) {
      // Codex local: .codex/prompts/ in the project root
      commandsDir = join(process.cwd(), '.codex', 'prompts');
    } else {
      // Claude/Gemini local: .claude/commands/pm or .gemini/commands/pm
      commandsDir = join(process.cwd(), `.${runtime}`, 'commands', 'pm');
    }
  }

  // Copy core files (agents, references, templates, workflows)
  let totalFiles = 0;
  for (const dir of ['agents', 'references', 'templates', 'workflows']) {
    const srcDir = join(SOURCE_DIR, dir);
    if (existsSync(srcDir)) {
      totalFiles += copyDirRecursive(srcDir, join(configBase, dir));
    }
  }

  // Copy commands
  const commandsSrc = join(SOURCE_DIR, 'commands', 'pm');
  if (existsSync(commandsSrc)) {
    if (config.flatCommands) {
      // Codex: flatten pm/*.md into prompts/pm-*.md
      mkdirSync(commandsDir, { recursive: true });
      for (const entry of readdirSync(commandsSrc)) {
        if (entry.endsWith('.md')) {
          const srcPath = join(commandsSrc, entry);
          const destName = `pm-${entry}`; // e.g. pm-new-project.md
          const destPath = join(commandsDir, destName);

          // Read source, rewrite @~/.claude/ references to @~/.codex/
          let content = readFileSync(srcPath, 'utf-8');
          content = content.replace(/~\/.claude\/ship-agent/g, '~/.codex/ship-agent');
          writeFileSync(destPath, content);
          totalFiles++;
        }
      }
    } else {
      totalFiles += copyDirRecursive(commandsSrc, commandsDir);
    }
  }

  return totalFiles;
}

// ─── Main ──────────────────────────────────────────

async function main() {
  const home = process.env.HOME || process.env.USERPROFILE;
  if (!home) {
    console.error(red('Error: Could not determine home directory.'));
    process.exit(1);
  }

  // Get current version
  const pkgPath = join(SOURCE_DIR, '..', 'package.json');
  let version = 'unknown';
  if (existsSync(pkgPath)) {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
    version = pkg.version;
  }

  console.log();
  console.log(bold('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
  console.log(bold(' SHIP AGENT — Ship, don\'t plan.'));
  console.log(bold('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));

  // Choose runtime
  const runtime = await ask('Choose your coding agent runtime:', [
    { label: 'Claude Code', value: 'claude' },
    { label: 'Codex CLI', value: 'codex' },
    { label: 'Gemini CLI', value: 'gemini' },
    { label: 'All', value: 'all' },
  ]);

  // Choose scope
  const scope = await ask('Install location:', [
    { label: `Global ${dim('(all projects)')}`, value: 'global' },
    { label: `Local ${dim('(current project only)')}`, value: 'local' },
  ]);

  // Install
  console.log();
  console.log(dim('Installing...'));

  let totalFiles = 0;
  const runtimes = runtime === 'all' ? RUNTIMES.all.runtimes : [runtime];

  for (const rt of runtimes) {
    const count = await installForRuntime(rt, home, scope);
    
    // Write VERSION file
    const configBase = RUNTIMES[rt].configBase(home);
    if (existsSync(configBase)) {
      writeFileSync(join(configBase, 'VERSION'), version);
    }

    totalFiles += count;
    console.log(green(`  ✓ ${RUNTIMES[rt].label}: ${count} files`));
  }

  console.log();
  console.log(bold('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
  console.log(green(bold(` ✓ Installed ${totalFiles} files`)));
  console.log(bold('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
  console.log();
  console.log(' Verify with:');
  console.log(bold('   /pm:help'));
  console.log();
  console.log(' Start with:');
  console.log(bold('   /pm:new-project'));
  console.log();
}

main().catch((err) => {
  console.error(red(`Error: ${err.message}`));
  process.exit(1);
});
