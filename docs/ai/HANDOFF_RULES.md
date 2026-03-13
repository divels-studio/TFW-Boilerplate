# HANDOFF_RULES — Implementor ↔ Auditor

Goal: Two models work in parallel without burning context.

## Roles (default)
- **Implementor** (e.g., Claude/Opus): ticket implementation, architecture decisions
- **Auditor** (e.g., Codex/GPT): code-level audit, quality checks, next-ticket context

## Handoff format (Implementor → Auditor)
Written to `docs/handoff/opus-to-codex.md`:

1. Ticket ID + scope
2. Changed files (list)
3. Verify commands/steps
4. Migrations: yes/no
5. Notes/risks

## Handoff format (Auditor → Implementor)
Written to `docs/handoff/codex-to-opus.md`:

1. What was done (1-5 bullets)
2. Audit result (pass / pass with corrections / fail)
3. Corrections made (if any)
4. Next steps for implementor

## Reset Protocol
Both handoff files are reset (content cleared) during checkpoint to ensure clean start for next cycle.
