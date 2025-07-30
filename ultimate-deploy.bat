@echo off
echo === GALUTINIS GITHUB PAGES DEPLOYMENT ===

REM 1. Sukuriame build
echo 1. Kuriame build...
call npm run build

REM 2. Kopijuojame build į root
echo 2. Kopijuojame build failus...
copy /Y dist\index.html .\
if exist assets rmdir /S /Q assets
if exist dist\assets (
    mkdir assets
    xcopy /E /Y dist\assets\* assets\
)

REM 3. Kopijuojame nuotraukas TIESIOGIAI į root
echo 3. Kopijuojame nuotraukas į root...
if exist img rmdir /S /Q img
if exist images rmdir /S /Q images

xcopy /E /I /Y public\img img
xcopy /E /I /Y public\images images

REM 4. Pakeičiame HTML faile nuorodas
echo 4. Taisome nuorodas HTML faile...
powershell -Command "(Get-Content index.html) -replace 'src=\"./assets/', 'src=\"assets/' | Set-Content index.html"

REM 5. Rodome kas bus įkelta
echo 5. Failai kurie bus įkelti:
dir /B img 2>nul
dir /S /B images 2>nul

REM 6. Keliame į GitHub
echo 6. Keliame į GitHub...
git add .
git commit -m "Ultimate GitHub Pages deployment with images"
git push

echo.
echo === DEPLOYMENT BAIGTAS ===
echo Svetainė: https://stainius.github.io/Portfolio/
echo Palaukite 2-3 minutes kol atnaujins!
echo.
echo Nuotraukos turėtų būti pasiekiamos:
echo - https://stainius.github.io/Portfolio/img/im.png
echo - https://stainius.github.io/Portfolio/images/web/1.png
pause