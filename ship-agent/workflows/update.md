# Workflow: Update

## 1. Check Installed Version

Find the installation directory and read the `VERSION` file:
```bash
# Check Claude
cat ~/.claude/ship-agent/VERSION 2>/dev/null || \
# Check Codex
cat ~/.codex/ship-agent/VERSION 2>/dev/null || \
# Check Gemini
cat ~/.gemini/ship-agent/VERSION 2>/dev/null || \
# Local check
cat .claude/ship-agent/VERSION 2>/dev/null || echo "0.0.0"
```

Save this as the `INSTALLED_VERSION`.

## 2. Check Latest Version

Run:
```bash
npm show ship-agent version 2>/dev/null
```

Save this as `LATEST_VERSION`.

## 3. Compare and Confirm

**If INSTALLED_VERSION == LATEST_VERSION:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► UP TO DATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Installed: v[INSTALLED_VERSION]
 Latest:    v[LATEST_VERSION]

 You are already running the latest version!
```
Exit.

**If INSTALLED_VERSION != LATEST_VERSION:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► UPDATE AVAILABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Installed: v[INSTALLED_VERSION]
 Latest:    v[LATEST_VERSION]
```

Ask the user: "Do you want to update to v[LATEST_VERSION] now?"
Options:
- "Yes, update"
- "No, skip for now"

**If No:** Exit.

## 4. Execute Update

Run the generic npx installer:
```bash
npx -y ship-agent@latest
```

The installer is interactive, so tell the user they will need to answer the standard installation prompts (Runtime: All, Scope: Global). Do not attempt to pipe answers; let the user interact with the terminal output natively if possible, or just re-run the script with flags if we added flags.

Wait! Our installer doesn't have CLI flags yet. Just tell the user to follow the `npx -y ship-agent@latest` prompts on the screen, or spawn the bash process interactively. 

Actually, the agent run a bash command, so just execute:
```bash
npx -y ship-agent@latest
```
and pass the inputs if required, or instruct the user to run it themselves if it hangs.
Alternatively, just instruct the user:

```
To complete the update, please run:
npx -y ship-agent@latest
```
And exit, since interactive CLI scripts inside agent bash tools often block or hang.

Wait! The agent can safely output the bash command to the user.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PM ► READY TO UPDATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Update is ready. Run this command in your terminal:

  npx -y ship-agent@latest

Follow the prompts to overwrite your current installation.
Restart your coding agent (Claude/Gemini) afterward.
```
