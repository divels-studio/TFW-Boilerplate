# Claude Code Hooks (Opt-In)

These hooks are **disabled by default**. To enable them:

## 1. Install dependencies

```bash
cd .claude/hooks && npm install
```

## 2. Add hooks to `.claude/settings.json`

Add this `hooks` key to your existing settings:

```json
{
  "permissions": {
    "allow": ["Bash"]
  },
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "cd \"$CLAUDE_PROJECT_DIR/.claude/hooks\" && npx tsx skill-activation-prompt.ts"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|MultiEdit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "cd \"$CLAUDE_PROJECT_DIR/.claude/hooks\" && npx tsx post-tool-use-tracker.ts"
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "cd \"$CLAUDE_PROJECT_DIR/.claude/hooks\" && npx tsx stop-build-check.ts"
          }
        ]
      }
    ]
  }
}
```

## 3. Configure build check (optional)

Edit `.claude/hooks/hooks-config.json`:

```json
{
  "buildCheck": {
    "enabled": true,
    "command": "npm run type-check",
    "cwd": "."
  }
}
```

## Available hooks

| Hook | Trigger | What it does |
|------|---------|-------------|
| `skill-activation-prompt.ts` | UserPromptSubmit | Suggests relevant skills based on prompt keywords |
| `post-tool-use-tracker.ts` | PostToolUse (Edit/Write) | Logs edited files for build check |
| `stop-build-check.ts` | Stop | Runs build command if files were edited (disabled by default in hooks-config.json) |
