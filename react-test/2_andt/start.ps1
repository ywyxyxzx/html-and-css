# 自动进入项目目录并启动 dev server
$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectPath
yarn install
yarn dev
