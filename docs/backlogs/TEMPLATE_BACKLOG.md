# Backlog (Template)

> **Naming convention:** `BACKLOG_<PROJECT_NAME>.md` (e.g., `BACKLOG_AUTH_SYSTEM.md`)
> Multiple active backlogs are supported in `docs/backlogs/active/`.
> `SESSION_MEMORY.md` should reference which backlog is currently active.

## Brief

Describe "what we're building" in 3-6 bullets:

- What product/tool (1 sentence)
- Target audience
- Must-have goals (up to 5)
- Non-goals (what we explicitly don't build)
- Constraints (deadline / budget / tech limitations)

## Ticket Tracker

- **Progress:** 0/1
- **Next:** PRJ-001

- [ ] PRJ-001 — <Title>

---

## PRJ-001 — <Title>

**Goal:** What we're achieving and why.

**Scope:**
- What's included in this ticket (2-5 bullets)

**Out of scope:**
- What's explicitly NOT part of this ticket

**Acceptance Criteria:**
- [ ] Criterion 1 (testable, specific)
- [ ] Criterion 2
- [ ] Criterion 3

**Affected paths:**
- `src/path/to/file.ts`
- `src/path/to/other.ts`

**Verify:**
```bash
# Exact commands to validate the work
npm run type-check
npm run test -- --filter=relevant-test
# Manual: navigate to /page and verify X
```

**Risks / Notes:**
- Edge cases to watch for
- Dependencies on other tickets

---

### Metadata (optional YAML frontmatter)

```yaml
id: PRJ-001
type: feature | fix | chore | refactor
status: todo | in_progress | for_audit | done
priority: p0 | p1 | p2
docs_impact:
  - docs/DECISIONS.md
```
