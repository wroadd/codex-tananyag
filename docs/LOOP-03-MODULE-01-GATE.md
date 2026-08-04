# Loop 03 — 01. modul emberi kapu

## Elkészült eredmény

Az „Alapok: Chat helyett munkaeredmény” modul hat teljes leckével került az oldalba:

1. Chat, Work és Codex;
2. az első biztonságos feladat;
3. projekt, beszélgetés és munkatér;
4. fájlok, eszközök és irányítás;
5. beállítások és alap-jogosultságok;
6. labor: az első munka-brief.

Minden lecke tartalmaz tanulási célt, munkahelyi indoklást, három magyarázó részt, döntési térképet, gyenge és erős példát, saját munkaterméket, helyzetalapú tudásellenőrzést és közvetlen hivatalos OpenAI-forrásokat.

## Tartalmi döntések

- A Chat, Work és Codex közötti választást a kívánt eredmény alapján tanítjuk, nem általános képességlistával.
- Az első feladat négy feltétele: kicsi hatókör, szükséges forrás, visszafordítható kimenet és gyors kontroll.
- A projektet tartós közös kontextusként, a beszélgetést egy munkamenet történeteként, a helyi mappát pedig tényleges fájlhatárként különítjük el.
- A munkaközi kérdés, irányváltás és jóváhagyás a delegálás része.
- A jogosultságot feladathoz kötött hatókörként tanítjuk; az alapértelmezett első futás olvas és új vázlatot készít.
- A labor egy teljes munka-briefet kér cél, közönség, forrás, kimenet, korlát, jogosultság, ellenőrzés és megállási pont megadásával.

## Forráskezelés

Az azonos `get-started-with-work` bejegyzések összevonása megtörtént. A felszabadult forráshelyre a különálló [Projects and chats](https://learn.chatgpt.com/docs/projects) oldal került. A forrásjegyzék továbbra is 19 elemes, de mind a 19 kanonikus URL különböző.

Az első modul elsődleges hivatalos forrásai:

- [ChatGPT Learn](https://learn.chatgpt.com/)
- [Get started with Work mode](https://learn.chatgpt.com/docs/get-started-with-work)
- [Quickstart](https://learn.chatgpt.com/docs/quickstart)
- [Projects and chats](https://learn.chatgpt.com/docs/projects)
- [Settings](https://learn.chatgpt.com/docs/reference/settings)

## Haladás és teljesítési szabály

- A haladás verziózott `codex-course-progress-v2` sémában, helyben tárolódik.
- A régi, sekély első modul kész állapota nem migrálódik automatikusan a hat új leckére.
- A tanuló válaszai és saját munkatermékei leckénként megmaradnak.
- Egy lecke csak akkor zárható le, ha minden kérdésre helyesen válaszolt, és a munkatermék eléri az adott feladat minimális terjedelmét.
- Az első modul csak mind a hat lecke lezárása után számít késznek.

## Ellenőrzési bizonyíték

| Ellenőrzés | Eredmény |
|---|---|
| ESLint + tartalomvalidáció | Sikeres |
| Produkciós Vite build | Sikeres, 17 modul transzformálva |
| Tartalmi darabszám | 6 részletes lecke, 19 egyedi forrás |
| Első lecke lezárási kapuja | Helyes válasz és minimum 70 karakter nélkül tiltott |
| Mentett visszatérés | Újratöltés után 1/6 és „Lecke kész” megmarad |
| Zárólabor | 3 helyzetalapú kérdés megjelenik |
| Alapforrás-szűrő | 5 sor, ebből 1 Projects-link |
| Mobilnézet | 390 px dokumentumszélesség, vízszintes oldal-túlcsordulás nélkül |
| Böngészőkonzol | 0 warning, 0 error |
| Függőségaudit | 0 ismert sérülékenység |

## Fejlesztői megjegyzés

Az `eslint-plugin-react-hooks` 6.x és 7.x ága ebben a helyi környezetben a `zod` betöltési láncánál elakadt. A projekt ezért az ESLint 9.39.5, `@eslint/js` 9.39.5 és `eslint-plugin-react-hooks` 5.2.0 verziókat használja pontosan rögzítve. Ez a pluginverzió biztosítja a projektben szükséges `rules-of-hooks` és `exhaustive-deps` ellenőrzést. A production build sikeres, de a CSS-plugin feldolgozása ezen a gépen 59,7 másodpercet vett igénybe; ezt a következő loopokban figyelni kell.

## Ismert határ

- Csak a 01. modul rendelkezik részletes leckefelülettel. A további öt modul még a korábbi rövid összefoglalót használja.
- Nincs még haladástörlés vagy export; ezek a teljes leckeszintű séma elkészülte után kerülnek be.
- A modul gyakorlati értékelése jelenleg helyes válaszra és minimális szöveghosszra épül. A 0–2 pontos, hatdimenziós rubrika részletes önértékelő felülete a következő tartalmi modulokkal együtt készül.
- GitHub-repó és GitHub Pages továbbra sem készülhet a publikálási minimum teljesülése előtt.

## Emberi jóváhagyási kérdések

1. Megfelelő-e a magyarázatok mélysége és magyar hangja?
2. Használható-e a lecke sorrendje: cél → magyarázat → döntési térkép → példa → saját munkatermék → ellenőrzés?
3. Maradjon-e a munkatermék minimális szöveghossza ideiglenes technikai kapuként, amíg a teljes rubrikafelület elkészül?
4. Jóváhagyható-e a 02. modul, „A delegálható feladat anatómiája” hat leckéjének implementációja ugyanezzel a szerkezettel?
