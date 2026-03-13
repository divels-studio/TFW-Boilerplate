---
description: Checkpoint — update docs only (no git ops)
allowed-tools: Bash, Read, Edit, Write, AskUserQuestion
---

# /checkpoint - Update Documentation

Quick checkpoint — update documentation only. No git operations.

## Instructions

1. **Verify current state:** run build/type-check if relevant code was modified
2. **Update mandatory docs:**
   - `SESSION_MEMORY.md` — update "Last checkpoint" section
   - Active backlog tracker — mark completed tickets
3. **Update optional docs (only if real progress shipped):**
   - `CHANGELOG.md` — new entries under `[Unreleased]`
   - `ROADMAP.md` — move completed items to Done
   - `PROJECT_STATUS.md` — update phase progress
4. **Reset handoff files** (if cross-model workflow active):
   - Clear `docs/handoff/opus-to-codex.md`
   - Clear `docs/handoff/codex-to-opus.md`

## Rules
- No git commit/push — that's the user's job
- Only update docs that reflect actual shipped work
- Follow `docs/guides/CHECKPOINT_PROTOCOL.md` if it exists
