---
description: Show project status
allowed-tools: Bash, Read, Glob
---

# /status - Project Status

Quick overview of current project state.

## Instructions

Show:

1. **Branch:** `git branch --show-current`
2. **Working Tree:** clean or modified
3. **Version:** from `VERSION` file
4. **Active Backlog:** list `docs/backlogs/active/` and show progress + next ticket
5. **Recent Work:** last entries from `SESSION_MEMORY.md`
6. **Build Status:** run project build/type-check command if configured

## Output Format

```
Project Status
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Branch: [branch-name]
Working Directory: [clean/modified]
Version: [X.Y.Z]

Active Backlog: [BACKLOG_NAME]
   Progress: [X/Y tickets]
   Next: [TICKET_ID] — [title]

Recent Work:
   - [work description]
   - [work description]

Build: [OK / ERRORS / not configured]

Next Steps:
   - [next task]
```
