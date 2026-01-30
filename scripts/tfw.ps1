param(
  [Parameter(Position = 0)]
  [ValidateSet('help','validate','checkpoint','status')]
  [string]$Command = 'help',

  [Parameter(Position = 1)]
  [string]$Arg1 = ''
)

$ErrorActionPreference = 'Stop'

function Get-RepoRoot {
  return (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
}

function Run-Node {
  param([string]$ScriptRelPath)
  $root = Get-RepoRoot
  Set-Location $root
  node $ScriptRelPath
}

switch ($Command) {
  'help' {
    $port = 0
    if ($Arg1) { $port = [int]$Arg1 }
    if ($port -gt 0) {
      & (Join-Path $PSScriptRoot 'help.ps1') -Port $port
    } else {
      & (Join-Path $PSScriptRoot 'help.ps1')
    }
    break
  }

  'validate' {
    $root = Get-RepoRoot
    Set-Location $root
    $env:TFW_ENFORCEMENT = if ($env:TFW_ENFORCEMENT) { $env:TFW_ENFORCEMENT } else { 'soft' }
    node tools/scripts/validate-backlog.mjs
    node tools/scripts/enforce-docs.mjs
    Write-Host 'validate: ok'
    break
  }

  'checkpoint' {
    Run-Node 'tools/scripts/checkpoint.mjs'
    break
  }

  'status' {
    $root = Get-RepoRoot
    Set-Location $root
    git status
    break
  }
}

