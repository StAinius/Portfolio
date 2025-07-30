@echo off
echo === DEBUG: Tikriname nuotrauku strukturą ===

echo.
echo 1. Tikriname public folderį:
if exist public\img (
    echo ✓ public\img egzistuoja
    dir /B public\img
) else (
    echo ✗ public\img neegzistuoja
)

if exist public\images (
    echo ✓ public\images egzistuoja
    dir /B public\images
) else (
    echo ✗ public\images neegzistuoja
)

echo.
echo 2. Tikriname root folderį:
if exist img (
    echo ✓ img folderis root'e egzistuoja
    dir /B img
) else (
    echo ✗ img folderis root'e neegzistuoja
)

if exist images (
    echo ✓ images folderis root'e egzistuoja
    dir /B images
) else (
    echo ✗ images folderis root'e neegzistuoja
)

echo.
echo 3. Tikriname dist folderį:
if exist dist (
    echo ✓ dist folderis egzistuoja
    dir /B dist
) else (
    echo ✗ dist folderis neegzistuoja
)

echo.
echo === Bandome nukopijuoti nuotraukas ===
if exist public\img (
    if not exist img mkdir img
    xcopy /E /Y /I public\img img
    echo Nukopijuota img folderis
)

if exist public\images (
    if not exist images mkdir images
    xcopy /E /Y /I public\images images
    echo Nukopijuota images folderis
)

echo.
echo 4. Patikrinimas po kopijavimo:
if exist img (
    echo ✓ img folderis dabar egzistuoja root'e
    dir /B img
)
if exist images (
    echo ✓ images folderis dabar egzistuoja root'e
    dir /B images
)

pause