@echo off
REM 使用启动参数强制界面语言为简体中文（与 VS Code / Cursor 一致）
REM 若仍只有部分英文：Cursor 的 AI 对话等自有界面可能未完全翻译，属常见情况。
start "" "d:\Programs\cursor\Cursor.exe" --locale zh-cn
