import { execSync } from "node:child_process";

const enforcement = (process.env.TFW_ENFORCEMENT || "soft").toLowerCase();
const base = process.env.GITHUB_BASE_SHA || "";
const head = process.env.GITHUB_HEAD_SHA || "";

function git(cmd) {
  return execSync(`git ${cmd}`, { stdio: ["ignore", "pipe", "pipe"] })
    .toString("utf8")
    .trim();
}

function getChangedFiles() {
  if (base && head) {
    return git(`diff --name-only ${base} ${head}`).split("\n").filter(Boolean);
  }

  try {
    return git("diff --name-only HEAD~1 HEAD").split("\n").filter(Boolean);
  } catch {
    return [];
  }
}

const changed = getChangedFiles();

if (changed.length === 0) {
  process.stdout.write("enforce-docs: no changed files detected\n");
  process.exit(0);
}

const isDocsLike = (p) =>
  p.startsWith("docs/") ||
  p === "CHANGELOG.md" ||
  p === "ROADMAP.md" ||
  p === "VERSION" ||
  p === "PROJECT_STATUS.md";

const hasDocsChange = changed.some(isDocsLike);
const hasNonDocsChange = changed.some((p) => !isDocsLike(p));

if (hasNonDocsChange && !hasDocsChange) {
  const msg =
    "enforce-docs: non-docs changes without docs/decision/changelog update";
  if (enforcement === "hard") {
    process.stderr.write(`${msg}\n`);
    process.exit(2);
  } else {
    process.stdout.write(`${msg} (soft)\n`);
    process.exit(0);
  }
}

process.stdout.write("enforce-docs: ok\n");

