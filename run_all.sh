#!/usr/bin/env bash
# Serve the portfolio locally. Usage: ./run_all.sh [port]
set -euo pipefail
cd "$(dirname "$0")"

PORT="${1:-8123}"

# Free the port if a previous run is still holding it
if command -v fuser >/dev/null 2>&1; then
  fuser -k "${PORT}/tcp" 2>/dev/null || true
fi

echo ""
echo "  Portfolio running at:  http://localhost:${PORT}"
echo "  (Ctrl+C to stop)"
echo ""

python3 -m http.server "$PORT"
