param(
  [int]$Port = 0
)

$ErrorActionPreference = 'Stop'

Set-Location (Join-Path $PSScriptRoot '..\\tools\\docs-site')

if ($Port -le 0) {
  if ($env:TFW_DOCS_PORT) { $Port = [int]$env:TFW_DOCS_PORT } else { $Port = 3001 }
}

if (-not (Test-Path node_modules)) {
  npm install
}

npm run dev -- -p $Port
