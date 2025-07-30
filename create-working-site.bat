@echo off
echo Kuriame veikianti HTML su nuotraukomis...

REM Sukuriame build
npm run build

REM Kopijuojame dist turinį
xcopy /E /Y dist\* .\

REM Kopijuojame nuotraukas
xcopy /E /I /Y public\img img
xcopy /E /I /Y public\images images

REM Keičiame index.html kad naudotų teisingus path'us
powershell -Command "& {$content = Get-Content 'index.html' -Raw; $content = $content -replace 'src=\"./img/', 'src=\"img/'; $content = $content -replace 'src=\"./images/', 'src=\"images/'; Set-Content 'index.html' $content}"

REM Tikriname ar nuotraukos nukopijuotos
echo Nuotraukos root direktorijoje:
if exist img\im.png echo ✓ img\im.png
if exist images\web\1.png echo ✓ images\web\1.png
if exist images\import\AD.png echo ✓ images\import\AD.png

REM Keliame į GitHub
git add .
git commit -m "Working site with images"
git push

echo.
echo Svetainė su nuotraukomis sukurta!
echo Tikrinkite: https://stainius.github.io/Portfolio/
pause