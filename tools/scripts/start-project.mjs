import fs from "node:fs/promises";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const args = new Set(process.argv.slice(2));
const getArgValue = (name) => {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] || null;
};

const outDir = getArgValue("--out-dir") || ".";
const force = args.has("--force");
const nonInteractive = args.has("--non-interactive");

const productArg = getArgValue("--product");
const audienceArg = getArgValue("--audience");
const mustArg = getArgValue("--must");
const nonGoalsArg = getArgValue("--non-goals");
const constraintsArg = getArgValue("--constraints");

const ticketIdPattern = /^[A-Z][A-Z0-9_]*-\d+$/;

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function readText(p) {
  return fs.readFile(p, "utf8");
}

async function writeText(p, content) {
  await ensureDir(path.dirname(p));
  await fs.writeFile(p, content, "utf8");
}

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function bullets(items) {
  return items
    .filter(Boolean)
    .map((x) => `- ${x}`)
    .join("\n");
}

function normalizeLines(raw) {
  return raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
}

async function main() {
  const root = path.resolve(process.cwd(), outDir);

  const backlogPath = path.join(root, "docs/backlogs/active/BACKLOG.md");
  const decisionsPath = path.join(root, "docs/DECISIONS.md");
  const stackPath = path.join(root, "docs/tech/STACK.md");
  const archPath = path.join(root, "docs/architecture/ARCHITECTURE.md");
  const foundationsPath = path.join(root, "docs/foundations/FOUNDATIONS.md");
  const uiPath = path.join(root, "docs/ui/UI_STANDARDS.md");

  if ((await exists(backlogPath)) && !force) {
    const existing = await readText(backlogPath);
    const looksLikeRealProject = existing.includes("## Ticket Tracker");
    if (looksLikeRealProject) {
      process.stderr.write(
        `start-project: ${backlogPath} already exists. Re-run with --force to overwrite, or use --out-dir.\n`
      );
      process.exit(2);
    }
  }

  const rl = nonInteractive ? null : readline.createInterface({ input, output });
  try {
    const product = nonInteractive
      ? (productArg || "").trim()
      : (await rl.question("1) Какъв проект правим (1 изречение)? ")).trim();

    const audience = nonInteractive
      ? (audienceArg || "").trim()
      : (await rl.question("2) За кого е (аудитория)? ")).trim();

    let mustHaves = [];
    if (nonInteractive) {
      mustHaves = mustArg ? mustArg.split(",").map((s) => s.trim()).filter(Boolean) : [];
    } else {
      output.write("3) Must-have функции (3–5). Пиши по една на ред. Празен ред = край.\n");
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const line = (await rl.question("> ")).trim();
        if (!line) break;
        mustHaves.push(line);
        if (mustHaves.length >= 8) break;
      }
    }

    const nonGoalsRaw = nonInteractive
      ? (nonGoalsArg || "").trim()
      : (await rl.question("4) Non-goals (едно поле, може празно): ")).trim();

    const constraintsRaw = nonInteractive
      ? (constraintsArg || "").trim()
      : (
          await rl.question(
            "5) Constraints + има ли UI? (пример: '2 седмици, low budget, има UI'): "
          )
        ).trim();

    const profile = (() => {
      const c = `${constraintsRaw} ${product}`.toLowerCase();
      if (c.includes("cli")) return "CLI tool";
      if (c.includes("api")) return "API service";
      if (c.includes("ui") || c.includes("web") || c.includes("site")) return "Web UI";
      return "General";
    })();

    const suggestedStack = (() => {
      switch (profile) {
        case "Web UI":
          return "Web UI: React/Next или Vue/Nuxt + DB по избор (Postgres/SQLite) + auth по нужда";
        case "API service":
          return "API: Node/Fastify или Python/FastAPI или Go/Fiber + Postgres";
        case "CLI tool":
          return "CLI: Node (tsx) или Python (typer) или Go (cobra)";
        default:
          return "Избери минимален stack според нуждите; записвай решенията в DECISIONS.";
      }
    })();

    const ticketPrefix = "PRJ";
    const nextId = `${ticketPrefix}-001`;
    if (!ticketIdPattern.test(nextId)) {
      throw new Error("Invalid default ticket id format");
    }

    const briefLines = [
      product && `Продукт: ${product}`,
      audience && `Аудитория: ${audience}`,
      mustHaves.length > 0 && `Must-haves: ${mustHaves.join("; ")}`,
      nonGoalsRaw && `Non-goals: ${nonGoalsRaw}`,
      constraintsRaw && `Constraints: ${constraintsRaw}`,
      `Профил: ${profile}`,
      `Stack (предложение): ${suggestedStack}`,
    ];

    const templatePath = path.join(process.cwd(), "docs/backlogs/TEMPLATE_BACKLOG.md");
    const template = (await exists(templatePath))
      ? await readText(templatePath)
      : "# Backlog (Active)\n\n## Brief\n\n## Ticket Tracker\n\n- Next: PRJ-001\n\n---\n";

    const out = [];
    out.push("# Backlog (Active)");
    out.push("");
    out.push("## Brief");
    out.push("");
    out.push(bullets(briefLines));
    out.push("");
    out.push("## Ticket Tracker");
    out.push("");
    out.push(`- Next: ${nextId}`);
    out.push("");
    out.push("---");
    out.push("");

    const mvpTickets = [
      { id: `${ticketPrefix}-001`, title: "MVP: backlog + docs contract попълнени", type: "docs" },
      { id: `${ticketPrefix}-002`, title: "MVP: първа вертикална функционалност", type: "feature" },
      { id: `${ticketPrefix}-003`, title: "MVP: basic deploy plan", type: "chore" },
    ];

    for (const t of mvpTickets) {
      out.push(`## ${t.id} — ${t.title}`);
      out.push("");
      out.push("---");
      out.push(`id: ${t.id}`);
      out.push(`type: ${t.type}`);
      out.push("status: queued");
      out.push("priority: p0");
      out.push("docs_impact:");
      out.push("  - docs/DECISIONS.md");
      out.push("verify:");
      out.push("  - <описани стъпки за проверка>");
      out.push("done:");
      out.push("  - <Definition of done>");
      out.push("---");
      out.push("");
    }

    await writeText(backlogPath, out.join("\n"));

    const decisionsAppend = [
      "",
      `## ${todayISO()} — ${ticketPrefix}-000: Project start`,
      "",
      `**Context:** ${product || "New project"}`,
      "",
      `**Decision:** Профил: ${profile}. Stack (initial): ${suggestedStack}`,
      "",
      `**Consequences:** Ticket-first workflow; decisions се записват в този файл.`,
      "",
    ].join("\n");

    const existingDecisions = (await exists(decisionsPath))
      ? await readText(decisionsPath)
      : "# Decisions\n\n";
    await writeText(decisionsPath, existingDecisions.trimEnd() + decisionsAppend);

    const stackDoc = [
      "# Tech Stack",
      "",
      `- Profile: ${profile}`,
      `- Suggested: ${suggestedStack}`,
      "",
      "## Versions",
      "",
      "- TBD (agent/user chooses)",
      "",
    ].join("\n");
    await writeText(stackPath, stackDoc);

    const archDoc = [
      "# Architecture",
      "",
      "## Overview",
      "",
      `- Product: ${product || "TBD"}`,
      `- Profile: ${profile}`,
      "",
      "## Modules",
      "",
      "- TBD",
      "",
    ].join("\n");
    await writeText(archPath, archDoc);

    const foundationsDoc = [
      "# Foundations",
      "",
      "## Goals",
      "",
      bullets([
        "Ticket-first работа (Next ticket).",
        "Docs като contract.",
        "Verify steps във всеки ticket.",
      ]),
      "",
      "## Non-goals",
      "",
      bullets(normalizeLines(nonGoalsRaw) || ["TBD"]),
      "",
    ].join("\n");
    await writeText(foundationsPath, foundationsDoc);

    const uiDoc =
      profile === "Web UI"
        ? [
            "# UI Standards",
            "",
            "## Basics",
            "",
            bullets(["Accessibility first", "Loading/empty/error states", "Consistent forms"]),
            "",
          ].join("\n")
        : [
            "# UI Standards",
            "",
            "N/A — този проект няма UI (или още не е дефиниран).",
            "",
          ].join("\n");
    await writeText(uiPath, uiDoc);

    process.stdout.write("start-project: ok (wrote backlog + docs)\n");
  } finally {
    rl?.close();
  }
}

main().catch((err) => {
  process.stderr.write(`start-project: failed: ${err.message}\n`);
  process.exit(2);
});
