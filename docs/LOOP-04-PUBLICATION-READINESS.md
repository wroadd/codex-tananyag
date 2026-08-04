# Loop 04 – teljes tananyag és publikációs kapu

## Jóváhagyási alap

A felhasználó a 2. és az összes további modult jóváhagyta, valamint kérte a projekt befejezését. Ez a kapu a teljes tananyag elkészítését és – sikeres QA esetén – a nyilvános GitHub Pages-kiadást fedi.

## Elkészült terjedelem

| Modul | Leckék | Záró munkatermék |
|---|---:|---|
| 1. Biztonságos kezdés | 6 | első feladatlap |
| 2. Projekt és brief | 6 | átadási csomag |
| 3. Bizalom és ellenőrzés | 7 | eredményelfogadási jegyzőkönyv |
| 4. Gyakorlati munkafolyamatok | 8 | saját munkafolyamat-térkép |
| 5. Kiterjesztés | 8 | minimális kiterjesztési döntési fa |
| 6. Automatizálás | 7 | végponttól végpontig capstone-csomag |
| **Összesen** | **42** | **42 menthető munkatermék** |

Minden lecke legalább három magyarázó részt, döntési térképet, gyenge–erős mintát, saját munkaterméket, helyzetalapú kérdést és közvetlen hivatalos forrást tartalmaz. Minden modul záróleckéje legalább három kérdéses kapu.

## Funkcionális kiadási feltételek

- A nyitó útvonal mutatja a kész modulok arányát, a következő leckét és az utolsó mentett munkaterméket.
- A lecke csak helyes tudásellenőrzés és a minimális munkatermék-terjedelem után zárható le.
- A promptműhely hat, látható szempontból ad 0–12 pontos önértékelést; legalább 8 pont és nem nulla biztonsági pont szükséges.
- A böngészőben tárolt haladás, válasz, munkatermék és rubrika JSON-fájlba exportálható.
- A helyi adatok törlése külön megerősítési lépést kér.
- A felület billentyűzettel elérhető fókuszjelzést, feliratozott mezőket és tab/tabpanel kapcsolatot használ.

## Forrásállapot

- 20 egyedi, hivatalos OpenAI URL.
- A korábbi Academy-linkek helyett a jelenlegi Learn-célcímek szerepelnek.
- Minden URL legalább egy konkrét leckéhez van rendelve.
- Forrásellenőrzés dátuma: **2026. augusztus 4.**
- Az oldal nem tüntet fel külön „ellenőrizve” üzenetet; a dátum csak a karbantartási dokumentációban szerepel.

## Automatikus ellenőrzések

- `npm run check`: ESLint és tartalmi invariánsok.
- Elvárt tartalmi eredmény: 6 modul, 42 lecke, 4 szerepkör, 20 egyedi forrás.
- `npm run build`: production Vite-build.
- `npm audit --audit-level=moderate`: nulla ismert sérülékenység.
- A helyi Documents-fájlszolgáltató lassú modulbetöltése miatt a reprodukálható kiadási build tiszta ideiglenes könyvtárból is lefut; a GitHub Actions ugyanilyen tiszta telepítést használ.

## Publikációs határ

A nyilvános repó és Pages-oldal csak a fenti automatikus ellenőrzések, az asztali és mobil böngészős QA, a konzolhiba-ellenőrzés, valamint a haladás–rubrika–export–törlés végponttól végpontig tesztje után készül el.
