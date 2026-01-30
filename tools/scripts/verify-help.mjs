import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const port = Number(process.env.TFW_DOCS_PORT || 4311);
const baseUrl = `http://127.0.0.1:${port}`;
const docsSiteCwd = new URL("../../tools/docs-site/", import.meta.url);

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      cwd: opts.cwd,
      env: { ...process.env, ...(opts.env || {}) },
      stdio: "inherit",
      shell: process.platform === "win32",
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(" ")} exited ${code}`));
    });
  });
}

async function waitForOk(url, timeoutMs = 30_000) {
  const started = Date.now();
  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.ok) return;
    } catch {
      // ignore
    }
    if (Date.now() - started > timeoutMs) {
      throw new Error(`Timeout waiting for ${url}`);
    }
    await delay(250);
  }
}

async function fetchOk(pathname) {
  const url = `${baseUrl}${pathname}`;
  const res = await fetch(url, { redirect: "manual" });
  if (!res.ok) throw new Error(`GET ${pathname} -> ${res.status}`);
  const text = await res.text();
  if (!text || text.length < 100) throw new Error(`GET ${pathname} -> empty`);
}

async function main() {
  await run("npm", ["run", "build"], { cwd: docsSiteCwd });

  const server = spawn(
    "npm",
    ["run", "start", "--", "-p", String(port)],
    {
      cwd: docsSiteCwd,
      env: { ...process.env, TFW_DOCS_PORT: String(port) },
      stdio: "inherit",
      shell: process.platform === "win32",
    }
  );

  try {
    await waitForOk(`${baseUrl}/`);
    await fetchOk("/");
    await fetchOk("/doc/workflow/PLAN_PROTOCOL");
    await fetchOk("/doc/workflow/TICKET_PROTOCOL");
    process.stdout.write("verify-help: ok\n");
  } finally {
    server.kill("SIGTERM");
  }
}

main().catch((err) => {
  process.stderr.write(`verify-help: failed: ${err.message}\n`);
  process.exit(2);
});

