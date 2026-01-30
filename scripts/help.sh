#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR/tools/docs-site"

PORT="${1:-${TFW_DOCS_PORT:-3001}}"

if [ ! -d node_modules ]; then
  npm install
fi

npm run dev -- -p "$PORT"
