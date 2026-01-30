import fs from "node:fs/promises";

const backlogPath = "docs/backlogs/active/BACKLOG.md";
const raw = await fs.readFile(backlogPath, "utf8");

function fail(msg) {
  process.stderr.write(`validate-backlog: ${msg}\n`);
  process.exit(2);
}

const nextMatch = raw.match(/^\s*-\s*Next:\s*(TFW-\d+)\s*$/m);
if (!nextMatch) fail("missing 'Next:' in Ticket Tracker");
const nextId = nextMatch[1];

const ticketRegex =
  /^##\s+(?<heading>.+)\r?\n\r?\n---\r?\n(?<fm>[\s\S]*?)\r?\n---/gm;

const tickets = [];
for (const match of raw.matchAll(ticketRegex)) {
  const heading = (match.groups?.heading || "").trim();
  const fm = match.groups?.fm || "";
  const idLine = fm
    .split(/\r?\n/)
    .map((l) => l.trim())
    .find((l) => l.startsWith("id:"));

  const id = idLine ? idLine.replace(/^id:\s*/, "").trim() : "";
  if (!id) fail(`ticket without id frontmatter (heading: ${heading})`);
  tickets.push({ id, heading });
}

if (tickets.length === 0) fail("no tickets detected");
if (!tickets.some((t) => t.id === nextId)) fail(`Next points to missing ticket: ${nextId}`);

process.stdout.write("validate-backlog: ok\n");

