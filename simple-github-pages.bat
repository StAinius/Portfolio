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