#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CMD="${1:-help}"
shift || true

cd "$ROOT_DIR"

case "$CMD" in
  help)
    if [ $# -ge 1 ] && [ -n "${1:-}" ]; then
      "$ROOT_DIR/scripts/help.sh" "$1"
    else
      "$ROOT_DIR/scripts/help.sh"
    fi
    ;;

  validate)
    export TFW_ENFORCEMENT="${TFW_ENFORCEMENT:-soft}"
    node tools/scripts/validate-backlog.mjs
    node tools/scripts/enforce-docs.mjs
    echo "validate: ok"
    ;;

  checkpoint)
    node tools/scripts/checkpoint.mjs
    ;;

  start)
    node tools/scripts/start-project.mjs "$@"
    ;;

  status)
    git status
    ;;

  *)
    echo "Usage: scripts/tfw.sh {help|validate|checkpoint|start|status} [arg]" >&2
    exit 2
    ;;
esac
