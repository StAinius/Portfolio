@echo off
echo Building project...
call npm run build
if errorlevel 1 (
    echo Build failed!
    pause
    exit /b 1
)

echo Deploying to GitHub Pages...

REM Push source code to main branch
git add .
git commit -m "Update portfolio - %date% %time%"
git push origin main

REM Deploy dist folder to gh-pages branch
echo Deploying dist to gh-pages branch...
git add dist -f
git commit -m "Update dist folder - %date% %time%"
git subtree push --prefix dist origin gh-pages

echo.
echo GitHub repository: https://github.com/StAinius/Portfolio
echo GitHub Pages: https://stainius.github.io/Portfolio/
echo.
echo Setup GitHub Pages:
echo 1. Eikite į https://github.com/StAinius/Portfolio/settings/pages
echo 2. Source: pasirinkite "Deploy from a branch"
echo 3. Branch: pasirinkite "gh-pages" ir "/ (root)"
echo 4. Save
echo 5. Palaukite 2-3 minutes
echo.
pause