# Roadmap (Deliverables by modules)

## Workflow (Protocols)

### Done (v0.2.0)
- ~~Stabilize ticket format + tracker rules.~~
- ~~Define verify/release protocols.~~
- Cross-model handoff system (Implementor ↔ Auditor)
- Checkpoint protocol with hard guards

### Now
- Add "scope guardrails" checklist to tickets.

### Later
- Optional PR template + release checklist generator.

## Backlog + Decisions (Docs contract)

### Done (v0.2.0)
- ~~Single active backlog file with "Next:" tracker.~~
- ~~Single `DECISIONS.md` with decision triggers.~~
- Multiple active backlogs support
- Numbered archive convention

### Now
- Validator that checks ticket frontmatter consistency.

### Later
- Export decisions to JSON for tooling.

## Help Site (HTML docs)

### Done (v0.1.0)
- ~~Next.js viewer for `docs/` markdown.~~
- ~~Basic navigation + readable rendering.~~

### Now
- Full-text search index (local).

### Later
- Publish static docs (GitHub Pages).

## Tooling / Enforcement

### Done (v0.2.0)
- ~~CI: lint/build help site.~~
- ~~CI: hard enforcement for "docs must change when non-docs change".~~
- Claude Code hooks (opt-in): skill activation, file tracker, build check
- Declarative skill activation config (`skill-rules.json`)

### Now
- Configurable allowlist/paths via `tfw.config.json`.

### Later
- `tfw` CLI (next ticket, status, checkpoint, validate).

## Cross-Model Audit (NEW in v0.2.0)

### Done
- Agent definitions (code-reviewer, plan-reviewer)
- Codex audit skills (tfw-start-audit, tfw-ticket-audit, tfw-ticket-next)
- Handoff protocol + reset on checkpoint
- Context policy ("context diet")

### Now
- Configurable audit checklist per project

### Later
- Automated audit pipeline with CI integration
