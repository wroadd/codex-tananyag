# Loop 03 — 02. modul ellenőrzési kapu

## Eredmény

A „Delegálható feladat anatómiája” modul hat részletes leckével elkészült. A tanuló egy saját munkaterméket választ, majd célra, kontextusra, bemenetekre, kimeneti szerződésre, tervre és emberi kapukra bontja. A zárólaborban egy homályos kérést ír át ellenőrizhető munkamegbízássá.

## Leckék és kimenetek

| Lecke | Munkatermék |
|---|---|
| 2.1 Először a munkatermék | Munkatermék-katalógus |
| 2.2 Cél, kontextus, korlátok, kész definíció | Strukturált feladatleírás |
| 2.3 Biztonságos bemenet és forrásjegyzék | Bemeneti leltár |
| 2.4 Kimeneti szerződés | Kimeneti specifikáció |
| 2.5 Terv, kérdések és jóváhagyási pontok | Rövid végrehajtási terv |
| 2.6 Promptlabor: homályostól ellenőrizhetőig | Előtte–utána prompt és három kérdéses modulkvíz |

## Forrásellenőrzés

A modul közvetlenül a jelenlegi hivatalos oldalakra hivatkozik:

- [Prompting](https://learn.chatgpt.com/docs/prompting)
- [Get started with Work mode](https://learn.chatgpt.com/docs/get-started-with-work)
- [ChatGPT use cases](https://learn.chatgpt.com/use-cases)
- [Best practices](https://learn.chatgpt.com/guides/best-practices)

A „Prompting” külön forrásként került a jegyzékbe. Nem azonos a technikai Codex best-practice útmutatóval, ezért nincs ok az összevonására.

## Kész definíciója

- [x] Hat lecke, leckénként legalább három magyarázó rész
- [x] Leckénként döntési térkép, gyenge és erős példa
- [x] Leckénként mentett saját munkatermék
- [x] Leckénként legalább egy helyzetalapú kérdés
- [x] Három kérdéses modulzáró labor
- [x] Általánosított, nem modulszámhoz kötött haladáskezelés
- [x] Automatikus tartalomellenőrzés
- [x] Production build
- [x] Asztali és 390 px-es böngészős QA

## Ellenőrzési bizonyíték

- `npm run check`: sikeres; 6 modul, 12 részletes lecke, 4 szerepkör és 20 egyedi forrás.
- `npm run build`: sikeres; 17 modul transzformálva, a build 184 ms alatt készült el.
- Böngésző: a 2. modul 6/6 leckefüle elérhető, a 2.6 labor 3 kérdést és 260 karakteres munkaterméket kér.
- Leckezárás: a 2.1 lezáró gomb csak a helyes válasz és a 130 karakteres minimum teljesítése után vált aktívvá.
- Visszatérés: újratöltés és a modul újbóli kiválasztása után a 2.1 lecke kész állapota és az 1/6 modulszámláló megmaradt.
- Mobil: 390 × 844 px-en a dokumentum `clientWidth` és `scrollWidth` értéke egyaránt 390 px; a mobilmenü kinyílt.
- Forrásszűrés: az „Alapok” kategória 6 sort mutat, a Promptírás forrás pontosan egyszer szerepel.
- Konzol: 0 hiba és 0 figyelmeztetés.

## Következő emberi kapu

A 03. modul csak a 02. modul tartalmi mélységének, hangjának és használhatóságának jóváhagyása után készülhet el. GitHub-repó és GitHub Pages továbbra sem hozható létre.
