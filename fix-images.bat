@echo off
echo Taisome nuotrauku problemas...

REM Sukuriame build
call npm run build

REM Isvalome senas nuotraukas
if exist img rmdir /S /Q img
if exist images rmdir /S /Q images

REM Kopijuojame nauja build
copy /Y dist\index.html .\

REM Kopijuojame assets
if exist assets rmdir /S /Q assets
if exist dist\assets (
    mkdir assets
    xcopy /E /Y dist\assets\* assets\
)

REM Kopijuojame nuotraukas tiesiogiai
echo Kopijuojame nuotraukas...
if exist public\img (
    xcopy /E /Y public\img img\
)
if exist public\images (
    xcopy /E /Y public\images images\
)

REM Keliame i GitHub
git add .
git commit -m "Fix images for GitHub Pages"
git push

echo.
echo Pataisymai issiusti! Nuotraukos turetu veikti po 2-3 minuciu.
echo Tikrinkite: https://stainius.github.io/Portfolio/
pause