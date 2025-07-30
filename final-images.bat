@echo off
echo Galutinis nuotrauku sprendimas...

REM Isvalome git cache
git rm -r --cached . 2>nul

REM Pridedam viską iš naujo
git add .
git status

echo.
echo Jei matote nuotraukas aukščiau, spauskite bet kurį klavišą...
pause

git commit -m "Final commit with all images"
git push

echo.
echo Patikrinkite GitHub repository ar nuotraukos yra!
echo https://github.com/StAinius/Portfolio
pause