$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

Write-Host "[gpt-image-prompts] Importing inbox items..."
node ".\scripts\import-inbox.js"
if ($LASTEXITCODE -ne 0) {
  throw "Inbox import failed."
}
Write-Host "[gpt-image-prompts] Inbox import completed."
