@echo off
echo Keliame portfolio i GitHub...

echo # Portfolio >> README.md
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/StAinius/Portfolio.git
git push -u origin main

echo.
echo Portfolio sekmingai ikeltas i GitHub!
echo Dabar eikite i GitHub.com ir ijunkite GitHub Pages nustatymus.
pause