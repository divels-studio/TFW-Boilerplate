---
description: Run one ticket (locate → execute → wrap-up)
argument-hint: <TICKET_ID|next>
allowed-tools: Read, Edit, Write, Bash, AskUserQuestion
---

# /ticket - Run One Ticket

Execute **exactly one ticket** (or package), then write FOR AUDIT handoff.

## Step 0: Read handoff context

- Check `docs/handoff/codex-to-opus.md`
- If it has content → read it. This is context from the Auditor — follow its instructions.
- If empty or missing → continue in standalone mode.

## Inputs
- `/tfw:ticket PRJ-001` — run a specific ticket
- `/tfw:ticket next` — run the next TODO ticket from active backlog

## Ticket Discovery

1. Search `docs/backlogs/active/*.md` for the ticket block.
2. Use `## Ticket Tracker` if present:
   - `next` = first `- [ ] ...` line
   - DONE = `- [x] ...` line

## Execution Rules
- Do **not** implement anything outside the ticket scope.
- If critical info is missing: ask up to **7 questions**, then stop.
- No automatic git operations (commit/push).
- Self-check against ticket acceptance criteria before finishing.

## Wrap-Up: FOR AUDIT handoff

When done:

1. Mark ticket as `FOR AUDIT` in backlog tracker (NOT as Done).

2. **Do NOT:**
   - Run checkpoint (SESSION_MEMORY, CHANGELOG)
   - Commit / push
   - These happen after audit.

3. Write summary to `docs/handoff/opus-to-codex.md`:

```markdown
# FOR AUDIT

## Ticket
- ID: <TICKET_ID>
- Title: <Title>

## Scope
<What was implemented — 2-5 bullets>

## Changed Files
<List of changed files>

## Verify
<Exact commands for verification + results>

## Notes
<Risks, edge cases, things to watch during audit>
```

4. Tell the user:
   - Outcome (1-3 bullets)
   - "FOR AUDIT summary saved to `docs/handoff/opus-to-codex.md`"
   - "Switch to Codex and run audit skill if using cross-model workflow"
