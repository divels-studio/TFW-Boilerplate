# TFW Boilerplate (Ticket-First Workflow)

Universal, language-agnostic boilerplate for disciplined AI-driven development: backlog, protocols, decision log, cross-model audit, and slash commands out of the box.

## Quick Start

### 1. Clone

```bash
git clone https://github.com/divels-studio/TFW-Boilerplate.git my-project
cd my-project
```

### 2. Remove TFW git history (start fresh)

```bash
rm -rf .git
git init
git add -A
git commit -m "init: TFW boilerplate"
```

Or keep it if you want to receive TFW updates later (see [Updating TFW](#updating-tfw)).

### 3. Open as a standalone project

> **Important:** Open `my-project/` as its own project/workspace in your IDE — NOT as a subfolder inside an existing workspace. Otherwise your agent won't read the config files.

### 4. Start your AI agent

Pick whichever AI agent you have. Each one reads the project config automatically, detects `VERSION 0.0.0`, and enters the **Start Project** flow.

**Claude Code (recommended)**
- VSCode: Open the Claude Code panel (sidebar) → type anything ("hi", "let's go", whatever)
- CLI: run `claude` in the project folder → type anything
- The agent reads `.claude/CLAUDE.md` automatically — no setup needed

**Codex / GPT (VS Code)**
- Open VS Code Copilot/Codex panel → run the `tfw-start` skill
- The skill reads `.codex/skills/tfw-start/SKILL.md` and starts the flow

**Gemini**
- Start a conversation and paste the contents of `GEMINI.md` as context
- Or tell Gemini: "Read GEMINI.md and follow the instructions"

**Cursor**
- Just open the project — Cursor auto-reads `.cursor/rules/tfw.md`
- Start chatting normally, Cursor follows the TFW workflow

### 5. Answer 5 questions

The agent detects a fresh project (`VERSION 0.0.0`) and asks:

1. **What are we building?** — product/tool in 1-2 sentences
2. **Who is the target audience?**
3. **Must-have features for MVP?**
4. **Technical constraints?** — language, framework, hosting
5. **Non-goals?** — what we explicitly won't build

### 6. Agent takes over

After your answers, the agent:
- Proposes 1-2 stack options → records decision
- Fills the backlog Brief + generates 10-15 MVP tickets
- Bumps `VERSION` to `0.1.0`
- Starts working ticket by ticket

### Agent commands

Each agent has its own way to trigger actions. You don't need to memorize these — the agent knows them automatically.

#### Claude Code (slash commands)

Type these in the Claude Code panel or CLI:

| Command | What it does |
|---------|-------------|
| `/tfw:start` | Start or resume a session — detects if project is new or existing |
| `/tfw:ticket next` | Pick the next ticket from backlog and implement it |
| `/tfw:ticket PRJ-001` | Implement a specific ticket by ID |
| `/tfw:status` | Show project overview (branch, progress, next ticket) |
| `/tfw:checkpoint` | Update docs (SESSION_MEMORY, CHANGELOG) — no git ops |
| `/tfw:backlog [name]` | Create or update a backlog with tickets |

#### Codex / GPT (skills)

Run these as Codex skills in VS Code:

| Skill | What it does |
|-------|-------------|
| `tfw-start` | Start session — reads project state, asks 5 questions if new |
| `tfw-ticket-next` | Generate context for the next ticket |
| `tfw-ticket-audit` | Audit a completed ticket (enterprise-grade checklist) |
| `tfw-start-audit` | Start a full audit session |

#### Gemini / Cursor

These agents don't have slash commands. Instead:

- **Gemini** — give it `GEMINI.md` at the start. It contains all instructions. Then just tell it what to do ("start the project", "run next ticket", etc.)
- **Cursor** — rules auto-load from `.cursor/rules/tfw.md`. Just talk to it normally — it follows the same ticket-first workflow.

Both agents read `AGENTS.md` for detailed rules and `docs/backlogs/active/` for tickets.

---

## Updating TFW

To get the latest TFW workflow updates without losing your project files:

```bash
# One-time setup: add TFW as upstream
git remote add tfw https://github.com/divels-studio/TFW-Boilerplate.git

# When you want to update
git fetch tfw
git merge tfw/master --allow-unrelated-histories
```

TFW updates touch only workflow files (`.claude/`, `AGENTS.md`, `docs/workflow/`, `docs/guides/`). Your project files (`SESSION_MEMORY.md`, `CHANGELOG.md`, `ROADMAP.md`, backlogs) are clean templates on `master`, so merge conflicts are minimal.

---

## Project Structure

### Core files

| File | Purpose |
|------|---------|
| `AI_BRIEF.md` | Project overview for AI agents |
| `AGENTS.md` | Detailed agent rules and protocols |
| `SESSION_MEMORY.md` | Short handoff memory between sessions |
| `VERSION` | Semantic version (`0.0.0` = new project) |
| `CHANGELOG.md` | Release history |
| `ROADMAP.md` | Done / Now / Later planning |

### Backlogs & decisions

| Path | Purpose |
|------|---------|
| `docs/backlogs/active/` | Active backlogs with ticket trackers |
| `docs/backlogs/archive/` | Completed backlogs |
| `docs/DECISIONS.md` | Decision log (stack, architecture) |

### Cross-model handoff (optional)

For teams using two AI models (e.g. Claude + GPT):

| Path | Purpose |
|------|---------|
| `docs/handoff/opus-to-codex.md` | Implementor → Auditor summary |
| `docs/handoff/codex-to-opus.md` | Auditor → Implementor context |
| `docs/ai/HANDOFF_RULES.md` | Handoff format and rules |
| `docs/guides/CHECKPOINT_PROTOCOL.md` | When and how to checkpoint |

### Agent entrypoints

| Agent | Entrypoint |
|-------|-----------|
| Claude Code | `.claude/CLAUDE.md` (auto-read) |
| Codex (GPT) | `.codex/skills/tfw-start/SKILL.md` |
| Gemini | `GEMINI.md` |
| Cursor | `.cursor/rules/tfw.md` (auto-read) |

---

## Claude Code Extras

These features are specific to Claude Code. Other agents (Codex, Gemini, Cursor) have their own equivalents.

### Slash commands
Located in `.claude/commands/tfw/`. See [Agent commands](#agent-commands) above for the full list.

### Hooks (opt-in — advanced)

Hooks are **disabled by default**. They add automation to Claude Code but are NOT required for normal use.

To enable:
1. `cd .claude/hooks && npm install`
2. Copy the hook config into `.claude/settings.json` (see `.claude/hooks/README.md` for the exact JSON)

Available hooks:
- **skill-activation-prompt.ts** — analyzes your prompt and suggests relevant skills automatically
- **post-tool-use-tracker.ts** — logs which files Claude edits (used by build check)
- **stop-build-check.ts** — runs your build/type-check command after Claude responds (catches errors early)

Configure build check in `.claude/hooks/hooks-config.json` — set `buildCheck.enabled: true` and your build command.

### Agents (specialized sub-agents)

Claude Code can delegate work to specialized agents:

- **code-reviewer** (runs on Sonnet — fast) — reviews code for architecture, multi-tenancy, i18n, and security before audit
- **plan-reviewer** (runs on Opus — thorough) — reviews implementation plans before you start coding, catches scope gaps and better alternatives

These are triggered automatically by Claude Code when relevant, or you can ask: "review this code" / "review my plan".

---

## CLI tools

```bash
# Windows
scripts/tfw.ps1 help
scripts/tfw.ps1 validate
scripts/tfw.ps1 checkpoint

# macOS/Linux
scripts/tfw.sh help
scripts/tfw.sh validate
scripts/tfw.sh checkpoint
```

### Docs site (optional)

```bash
# Docker
docker compose up --build docs

# Or Node
cd tools/docs-site && npm install && npm run dev
```

---

## Acknowledgements

Claude Code hooks and agents infrastructure inspired by [claude-code-infrastructure-showcase](https://github.com/diet103/claude-code-infrastructure-showcase).

## License

MIT License — Use freely in your projects, commercial or personal.
