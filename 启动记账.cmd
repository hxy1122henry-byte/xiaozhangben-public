@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Please install Node.js LTS first: https://nodejs.org/
  pause
  exit /b 1
)
echo Open http://127.0.0.1:18769/ in your browser.
echo Keep this window open while the server is in use.
node server.cjs
pause
