# Roadmap (Deliverables by modules)

## Workflow (Protocols)

### Now
- Stabilize ticket format + tracker rules.
- Define verify/release protocols.

### Next
- Add “scope guardrails” checklist to tickets.

### Later
- Optional PR template + release checklist generator.

## Backlog + Decisions (Docs contract)

### Now
- Single active backlog file with “Next:” tracker.
- Single `DECISIONS.md` with decision triggers.

### Next
- Validator that checks ticket frontmatter consistency.

### Later
- Export decisions to JSON for tooling.

## Help Site (HTML docs)

### Now
- Next.js viewer for `docs/` markdown.
- Basic navigation + readable rendering.

### Next
- Full-text search index (local).

### Later
- Publish static docs (GitHub Pages).

## Tooling / Enforcement

### Now
- CI: lint/build help site.
- CI: hard enforcement for “docs must change when non-docs change”.

### Next
- Configurable allowlist/paths via `tfw.config.json`.

### Later
- `tfw` CLI (next ticket, status, checkpoint, validate).

