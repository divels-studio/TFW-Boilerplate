import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

type DocIndexItem = {
  title: string;
  href: string;
  relPath: string;
};

type LoadedDoc = {
  title: string;
  markdown: string;
  relPath: string;
};

const repoRoot = path.resolve(process.cwd(), "..", "..");
const docsRoot = path.join(repoRoot, "docs");

async function listMarkdownFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMarkdownFiles(fullPath)));
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function toRelPath(fullPath: string) {
  const rel = path.relative(docsRoot, fullPath);
  return rel.split(path.sep).join("/");
}

function toHref(relPath: string) {
  const withoutExt = relPath.replace(/\.md$/i, "");
  return `/doc/${withoutExt}`;
}

function safeResolveDocPath(relNoExt: string) {
  const full = path.resolve(docsRoot, `${relNoExt}.md`);
  const normalizedDocsRoot = path.resolve(docsRoot) + path.sep;
  const normalizedFull = path.resolve(full) + "";
  if (!normalizedFull.startsWith(normalizedDocsRoot)) return null;
  return full;
}

export async function getDocsIndex(): Promise<DocIndexItem[]> {
  const files = await listMarkdownFiles(docsRoot);
  const items: DocIndexItem[] = [];

  for (const file of files) {
    const relPath = toRelPath(file);
    const raw = await fs.readFile(file, "utf8");
    const parsed = matter(raw);
    const title =
      (typeof parsed.data?.title === "string" && parsed.data.title) ||
      raw.match(/^#\s+(.+)$/m)?.[1] ||
      relPath;
    items.push({ title, href: toHref(relPath), relPath });
  }

  items.sort((a, b) => a.relPath.localeCompare(b.relPath));
  return items;
}

export async function getDocBySlug(slug: string[]): Promise<LoadedDoc | null> {
  const relNoExt = slug.join("/");
  const fullPath = safeResolveDocPath(relNoExt);
  if (!fullPath) return null;

  try {
    const raw = await fs.readFile(fullPath, "utf8");
    const parsed = matter(raw);
    const relPath = toRelPath(fullPath);
    const title =
      (typeof parsed.data?.title === "string" && parsed.data.title) ||
      raw.match(/^#\s+(.+)$/m)?.[1] ||
      relPath;
    return { title, markdown: parsed.content.trimStart(), relPath };
  } catch {
    return null;
  }
}
