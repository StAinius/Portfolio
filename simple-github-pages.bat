@echo off
echo Kuriame simple GitHub Pages deployment...

REM Sukuriame build
echo Kuriame production build...
call npm run build

REM Kopijuojame build failus į root
echo Kopijuojame build failus...
copy /Y dist\index.html .\
if exist assets rmdir /S /Q assets
if exist dist\assets (
    mkdir assets
    xcopy /E /Y dist\assets\* assets\
)

REM Kopijuojame nuotraukas iš public
echo Kopijuojame nuotraukas...
if exist public\img (
    if not exist img mkdir img
    xcopy /E /Y public\img\* img\
)
if exist public\images (
    if not exist images mkdir images
    xcopy /E /Y public\images\* images\
)

REM Keliame į GitHub
echo Siųnčiame į GitHub...
git add .
git commit -m "Simple GitHub Pages deployment"
git push

echo.
echo Dabar eikite į GitHub Pages nustatymus:
echo https://github.com/StAinius/Portfolio/settings/pages
echo.
echo Source: pasirinkite "Deploy from a branch"
echo Branch: main
echo Folder: / (root)
echo.
echo Svetainė bus: https://stainius.github.io/Portfolio/
pause