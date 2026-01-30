import fs from "node:fs/promises";
import { execSync } from "node:child_process";

const backlogPath = "docs/backlogs/active/BACKLOG.md";
const sessionMemoryPath = "SESSION_MEMORY.md";
const sessionLogPath = "docs/workflow/SESSION_LOG.md";

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function tryGit(cmd) {
  try {
    return execSync(`git ${cmd}`, { stdio: ["ignore", "pipe", "ignore"] })
      .toString("utf8")
      .trim();
  } catch {
    return null;
  }
}

async function readText(path) {
  try {
    return await fs.readFile(path, "utf8");
  } catch {
    return null;
  }
}

async function writeText(path, content) {
  await fs.mkdir(path.split(/[\\/]/).slice(0, -1).join("/") || ".", {
    recursive: true,
  });
  await fs.writeFile(path, content, "utf8");
}

function extractNextId(backlogRaw) {
  const match = backlogRaw.match(/^\s*-\s*Next:\s*(TFW-\d+)\s*$/m);
  return match ? match[1] : null;
}

function extractLastToSha(sessionLogRaw) {
  if (!sessionLogRaw) return null;
  const matches = [...sessionLogRaw.matchAll(/^\s*-\s*To:\s*([0-9a-f]{7,40})\s*$/gim)];
  if (matches.length === 0) return null;
  return matches[matches.length - 1][1];
}

function ensureSectionReplace(raw, heading, lines) {
  const header = `## ${heading}`;
  const sectionStart = raw.indexOf(header);

  const body = [header, "", ...lines, ""].join("\n");

  if (sectionStart === -1) {
    const trimmed = raw.trimEnd();
    return `${trimmed}\n\n${body}`;
  }

  const afterHeader = raw.indexOf("\n", sectionStart);
  const nextSection = raw.slice(afterHeader + 1).search(/^##\s+/m);
  const sectionEnd =
    nextSection === -1 ? raw.length : afterHeader + 1 + nextSection;

  const before = raw.slice(0, sectionStart).trimEnd();
  const after = raw.slice(sectionEnd).trimStart();
  return `${before}\n\n${body}\n${after}`.trimEnd() + "\n";
}

function listCommitsSince(prevSha, headSha) {
  if (!headSha) return [];
  const range = prevSha ? `${prevSha}..${headSha}` : headSha;
  const out = tryGit(`log --oneline --no-decorate ${range} -n 20`);
  if (!out) return [];
  return out
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(0, 10);
}

const date = todayISO();
const backlogRaw = await readText(backlogPath);
if (!backlogRaw) {
  process.stderr.write(`checkpoint: missing ${backlogPath}\n`);
  process.exit(2);
}

const nextId = extractNextId(backlogRaw) || "UNKNOWN";
const headSha = tryGit("rev-parse --short HEAD");
const headLine = tryGit("log -1 --oneline --no-decorate");
const branch = tryGit("rev-parse --abbrev-ref HEAD");

const sessionLogRaw = await readText(sessionLogPath);
const prevSha = extractLastToSha(sessionLogRaw);
const commits = listCommitsSince(prevSha, headSha);

const memoryRaw =
  (await readText(sessionMemoryPath)) ||
  "# SESSION_MEMORY (TFW-Boilerplate)\n\nКратка “handoff” памет за следващи сесии.\n";

const memoryLines = [
  `- Date: ${date}`,
  `- Next: ${nextId}`,
  `- Branch: ${branch || "N/A"}`,
  `- Head: ${headLine || headSha || "N/A"}`,
];

const updatedMemory = ensureSectionReplace(
  memoryRaw.endsWith("\n") ? memoryRaw : `${memoryRaw}\n`,
  "Last checkpoint",
  memoryLines
);

await writeText(sessionMemoryPath, updatedMemory);

const logEntryLines = [
  `## ${date} — checkpoint`,
  "",
  `- Next: ${nextId}`,
  `- Branch: ${branch || "N/A"}`,
  `- To: ${headSha || "N/A"}`,
  `- From: ${prevSha || "N/A"}`,
];

if (commits.length > 0) {
  logEntryLines.push("- Commits:");
  for (const c of commits) logEntryLines.push(`  - ${c}`);
}

logEntryLines.push("");

const newLog =
  (sessionLogRaw ? sessionLogRaw.trimEnd() + "\n\n" : "") +
  logEntryLines.join("\n");

await writeText(sessionLogPath, newLog);

process.stdout.write(
  `checkpoint: updated ${sessionMemoryPath} and ${sessionLogPath}\n`
);

