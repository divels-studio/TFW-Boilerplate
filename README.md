# TFW Boilerplate (Ticket-First Workflow)

Universal (language-agnostic) boilerplate for disciplined "ticket-first" development: backlog, protocols, decision log, roadmap, changelog, cross-model audit, and HTML help site.

## Quick start

1. Clone: `git clone https://github.com/divels-studio/TFW-Boilerplate.git my-project`
2. Open your AI agent (Claude Code, Codex, Cursor, or Gemini) in the project folder
3. Say: *"What project are we building today?"*
4. The agent asks 5 questions, picks a stack, generates backlog, and starts working

## Updating TFW

To get the latest TFW workflow updates without losing your project files:

```bash
# One-time setup: add TFW as upstream
git remote add tfw https://github.com/divels-studio/TFW-Boilerplate.git

# When you want to update
git fetch tfw
git merge tfw/master --allow-unrelated-histories
```

TFW updates touch only workflow files (`.claude/`, `AGENTS.md`, `docs/workflow/`, `docs/guides/`). Your project files (`SESSION_MEMORY.md`, `CHANGELOG.md`, `ROADMAP.md`, backlogs) won't conflict because they start as empty templates.

## Docs / Help

### Node (default)

One entry point:

- Windows: `scripts/tfw.ps1 help`
- macOS/Linux: `scripts/tfw.sh help`

### Docker (option)

1. Copy `tools/docs-site/.env.example` → `tools/docs-site/.env.local` (optional)
2. Start: `docker compose up --build docs`

## Repo contracts

- Backlog: `docs/backlogs/active/BACKLOG*.md`
- Decisions: `docs/DECISIONS.md`
- Agent rules: `AGENTS.md`
- Roadmap: `ROADMAP.md`
- Changelog: `CHANGELOG.md`
- Version: `VERSION`

## Session memory

- Handoff: `SESSION_MEMORY.md`
- Detailed log: `docs/workflow/SESSION_LOG.md`

## Cross-model handoff

- Implementor → Auditor: `docs/handoff/opus-to-codex.md`
- Auditor → Implementor: `docs/handoff/codex-to-opus.md`
- Rules: `docs/ai/HANDOFF_RULES.md`
- Checkpoint: `docs/guides/CHECKPOINT_PROTOCOL.md`

## Agent packs

| Agent | Entrypoint |
|-------|-----------|
| Claude Code | `.claude/CLAUDE.md` |
| Codex (GPT) | `.codex/skills/tfw-start/SKILL.md` |
| Gemini | `GEMINI.md` |
| Cursor | `.cursor/rules/tfw.md` |

## Claude Code extras

- **Hooks** (opt-in): `.claude/hooks/` — skill activation, file tracking, build check
- **Agents**: `.claude/agents/` — code-reviewer (Sonnet), plan-reviewer (Opus)
- **Skill rules**: `.claude/skills/skill-rules.json` — declarative activation triggers
- Setup: `cd .claude/hooks && npm install`

## Codex audit skills

- `tfw-start-audit` — start audit session
- `tfw-ticket-audit` — audit a completed ticket
- `tfw-ticket-next` — generate context for next ticket

## Commands (one entry)

- `scripts/tfw.ps1 validate` / `scripts/tfw.sh validate`
- `scripts/tfw.ps1 checkpoint` / `scripts/tfw.sh checkpoint`
- `scripts/tfw.ps1 start` / `scripts/tfw.sh start`

## AI brief

- Quick context: `AI_BRIEF.md`

## Acknowledgements

Claude Code hooks and agents infrastructure inspired by [claude-code-infrastructure-showcase](https://github.com/diet103/claude-code-infrastructure-showcase).

## License

MIT License — Use freely in your projects, commercial or personal.
