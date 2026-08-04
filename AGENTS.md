# AGENTS.md

## Nyelv és tartalom

- Minden felhasználói szöveg magyar, UTF-8 kódolású és helyes magyar ékezeteket használ.
- Termékneveket, fájlneveket és technikai azonosítókat ne fordíts le.
- Az OpenAI-termékekről csak aktuális, hivatalos forrás alapján állíts tényt.
- Átirányított forrásnál közvetlenül az aktuális cél URL-jét használd.
- Egyértelműen különítsd el a hivatalos forrást a saját oktatási feldolgozástól.

## Fejlesztés

- A felület React + Vite alapú.
- A tartalmi adatokat a `src/data.js` fájlban tartsd.
- Őrizd meg a szemantikus HTML-t, a billentyűzetes használhatóságot és a mobilnézetet.
- Új függőséget csak akkor adj hozzá, ha az meglévő HTML/CSS/React megoldással érdemben nem helyettesíthető.

## Kész definíciója

- `npm run check` sikeres.
- `npm run build` sikeres.
- Asztali és 390 px széles mobilnézetben nincs vízszintes túlcsordulás.
- A modulválasztás, haladásmentés, prompt-ellenőrzés, szerepkörváltás, jogosultságválasztás és forrásszűrés működik.
