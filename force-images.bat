@echo off
echo Priverstinai kopijuojame nuotraukas...

REM Istrineme esamus folderius
rmdir /S /Q img 2>nul
rmdir /S /Q images 2>nul

REM Sukuriame naujus
mkdir img
mkdir images
mkdir images\web
mkdir images\import

REM Kopijuojame failus
copy /Y public\img\im.png img\
copy /Y public\images\web\*.png images\web\
copy /Y public\images\import\*.png images\import\

echo Tikrinimas:
dir /S img
dir /S images

echo Pridedam i git...
git add img/ images/ --force
git status
git commit -m "Force add images"
git push

pause