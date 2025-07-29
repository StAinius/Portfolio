@echo off
echo Kuriame production build...
npm run build

echo Kopijuojame build failus...
if exist dist (
    copy /Y dist\index.html .\
    if exist dist\assets (
        if not exist assets mkdir assets
        copy /Y dist\assets\* assets\
    )
    echo Build failai nukopijuoti.
) else (
    echo KLAIDA: dist folderis nerastas!
    pause
    exit /b 1
)

echo Keliame i GitHub...
git add .
git commit -m "Production build for GitHub Pages"
git push

echo.
echo Puslapis bus pasiekiamas: https://stainius.github.io/Portfolio/
echo Palaukite 2-5 minuciu kol GitHub Pages atnaujiins puslapi.
pause