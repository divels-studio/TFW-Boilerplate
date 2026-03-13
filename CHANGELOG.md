# Changelog

Format: Keep a Changelog + SemVer (see `VERSION`).

## [0.2.0] — 2026-03-13

### Added
- Cross-model handoff system (`docs/handoff/`) for Implementor ↔ Auditor communication
- Claude Code hooks (opt-in): skill activation, file tracker, build check (`.claude/hooks/`)
- Declarative skill activation config (`.claude/skills/skill-rules.json`)
- Agent definitions: code-reviewer (Sonnet), plan-reviewer (Opus) (`.claude/agents/`)
- Codex audit skills: `tfw-start-audit`, `tfw-ticket-audit`, `tfw-ticket-next` (`.codex/skills/`)
- `AGENTS.md` — centralized agent rules (all agent entrypoints reference it)
- Checkpoint protocol with hard guards (`docs/guides/CHECKPOINT_PROTOCOL.md`)
- Context policy — "context diet" philosophy (`docs/ai/CONTEXT_POLICY.md`)
- Handoff rules — cross-model handoff format (`docs/ai/HANDOFF_RULES.md`)
- Multiple active backlogs support + numbered archive convention
- Ticket Tracker with checkbox-based progress in backlog template

### Changed
- All agent entrypoints (Claude, Gemini, Cursor, Codex) now reference `AGENTS.md` and `docs/handoff/`
- Backlog template updated with naming convention and progress tracker
- Ticket protocol updated with multi-backlog and archive sections
- HOW_TO guide expanded with handoff workflow, hooks, and multi-backlog docs

## [0.1.0] — 2026-01-30

### Added
- Initial TFW boilerplate skeleton
- Ticket-first workflow protocols (ticket, verify, release, plan)
- Agent packs (Claude, Codex, Gemini, Cursor)
- CI enforcement (enforce-docs, validate-backlog)
- Docs site (Next.js viewer + Docker)
- Checkpoint tool + one-command UX (tfw.ps1/tfw.sh)
- Start project generator
