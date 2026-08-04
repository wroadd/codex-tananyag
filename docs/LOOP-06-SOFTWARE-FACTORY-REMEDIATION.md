# Loop 06 – software factory javítási kapu

## Cél

A publikus tananyag factory auditjában talált állapotkezelési, adatkezelési, mobil és kiadási kockázatok megszüntetése úgy, hogy a hibák visszatérését automatizált kapuk akadályozzák meg.

## Javított termékfolyamatok

- A lezárt lecke azonnal újranyílik, ha a válasz vagy a munkatermék többé nem teljesíti a feltételeket.
- A végleges törlés eltávolítja a korábban elkészített exportlinket is.
- Bármely későbbi haladásmódosítás érvényteleníti a régi export-pillanatképet.
- A visszatérési panel időbélyeg alapján a valóban utoljára módosított munkaterméket mutatja.
- A helyi mentés késleltetett és hibajelzést ad, ha a böngészőtárhely nem írható.
- A mobil menü navigáció után bezáródik.
- A lecke- és szerepkörtabok nyílbillentyűkkel, Home és End billentyűvel kezelhetők.
- A döntési táblázatok oszlopfejléceket, a haladásjelző progressbar szemantikát kapott.

## Automatizált kapuk

- 10 Node-alapú regressziós teszt a teljesítés, hidratálás, törlés, export és utolsó munkatermék állapotaira.
- Bővített tartalomvalidáció a kérdés-, visszajelzés-, helyesválasz-, munkatermék- és összehasonlítási sémára.
- Egyetlen `npm run verify` parancs: lint, tartalomvalidáció, tesztek és production build.
- Pull requesten csak a `verify` job fut; a Pages-feltöltés és telepítés kizárólag `main` push vagy kézi indítás után történhet.
- Az Actions teljes commit-SHA-ra, az npm-csomagok pontos verzióra vannak rögzítve.
- Heti npm- és GitHub Actions-frissítési PR-eket Dependabot készít.
- A `main` ág védett: PR és naprakész `verify` szükséges, a lineáris előzmény és a beszélgetések feloldása kötelező, a force push és az ágtörlés tiltott.

## Bizonyíték

- `npm ci`: sikeres, 109 auditált csomag.
- `npm run verify`: sikeres.
- `npm test`: 10/10 sikeres.
- `npm audit --audit-level=moderate`: 0 sérülékenység.
- Vite production build: sikeres.
- Helyi böngészős QA: desktop és 390 × 844 mobil nézet, 0 konzolhiba.

## Publikációs határ

A javítási ág és a pull request elkészíthető. Az élő GitHub Pages-oldal csak a PR státuszellenőrzése, review-ja és külön merge-jóváhagyása után változik.
