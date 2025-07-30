@echo off
echo Building project...
call npm run build
if errorlevel 1 (
    echo Build failed!
    pause
    exit /b 1
)

echo Tikriname ar yra git repository...

REM Tikriname ar yra .git folderis
if not exist .git (
    echo Kuriame nauja GitHub repository...
    echo # Portfolio >> README.md
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/StAinius/Portfolio.git
    git push -u origin main
    echo.
    echo Pirminis ikėlimas sėkmingas!
) else (
    echo Atnaujinime egzistuojanti repository...
    git add .
    git commit -m "Update portfolio - %date% %time%"
    git push
    echo.
    echo Atnaujinimas sėkmingas!
)

echo.
echo GitHub repository: https://github.com/StAinius/Portfolio
echo GitHub Pages: https://stainius.github.io/Portfolio/
echo.
echo Jei tai buvo pirmas įkėlimas:
echo 1. Eikite į https://github.com/StAinius/Portfolio/settings/pages
echo 2. Source: pasirinkite "GitHub Actions"
echo 3. Palaukite 3-5 minutes
echo.
echo Jei GitHub Actions neveikia, Source: pasirinkite "Deploy from a branch" ^> main
echo.
pause