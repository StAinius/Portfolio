@echo off
echo Kuriame production build...
npm run build

echo Keliame i GitHub...
git add .
git commit -m "Production build for GitHub Pages"
git push

echo.
echo Puslapis bus pasiekiamas: https://stainius.github.io/Portfolio/
echo Palaukite 2-5 minuciu kol GitHub Pages atnaujiins puslapi.
pause