@echo off
echo Siunčiame atnaujinimus į GitHub...

git add .
git commit -m "Update portfolio"
git push

echo.
echo GitHub Actions automatiškai sukurs build ir publikuos svetainę.
echo Puslapis: https://stainius.github.io/Portfolio/
echo Palaukite 3-5 minutes kol atnaujins.
pause