# TFW Boilerplate (Ticket-First Workflow)

Universal (language-agnostic) boilerplate for disciplined "ticket-first" development: backlog, protocols, decision log, roadmap, changelog, cross-model audit, and HTML help site.

## Quick start (Docs / Help)

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
