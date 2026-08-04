# Loop 02 — Tartalmi architektúra és publikálási kapu

## Eredmény

A jelenlegi hat rövid modul helyére 42 leckéből álló, feladatközpontú tanulási út kerül. Minden lecke egy megfigyelhető tanulási célt, saját magyar magyarázatot, hivatalos forráshivatkozást, példát, gyakorlást és ellenőrzést kap. A loop nem írja meg a teljes leckeszöveget, és nem publikál nyilvános oldalt: ezek külön implementációs és kiadási kapuk.

## Célközönség és tanulási ígéret

- **Nem technikai operációs vezető:** kis kockázatú munkatermékkel indul, majd saját ismételhető folyamatot tervez.
- **Kontroller vagy adatelemző:** forrás-, szám- és feltételezés-ellenőrzést tanul, majd szerepkörspecifikus labort végez.
- **Technikai automatizálási felelős:** jogosultsági, skill-, plugin-, felületi és automatizálási döntéseket gyakorol.

A résztvevő nem pusztán „jó promptot” ír. Képes lesz egy munkaterméket bemenetekkel, kimeneti szerződéssel, emberi kapukkal, jogosultsági határral és ellenőrzési módszerrel együtt megtervezni.

## Egy lecke kötelező szerkezete

1. **Cél:** egy mondatban megfigyelhető képesség.
2. **Miért számít:** valós munkahelyi helyzet és kockázat.
3. **Magyarázat:** saját magyar feldolgozás, fogalmi ábra vagy rövid összehasonlítás.
4. **Mutasd:** konkrét, biztonságos példa bemenettel és kimenetrészlettel.
5. **Próbáld ki:** irányított feladat, majd önálló változat.
6. **Ellenőrizd:** 1–3 helyzetalapú kérdés és azonnali, magyarázó visszajelzés.
7. **Munkatermék:** menthető vagy exportálható eredmény.
8. **Források:** a kapcsolódó hivatalos OpenAI-oldalak közvetlen linkjei.

Egy átlagos lecke 8–15 perc; a szerepkörlaborok és a záróprojekt 20–40 percesek. A modulidők csak a részletes szöveg elkészülte után kerülnek újraszámításra.

## 01 — Alapok: chat helyett munkaeredmény

| ID | Lecke | Megfigyelhető cél | Gyakorlati kimenet |
|---|---|---|---|
| 1.1 | Chat, Work és Codex-felületek | A feladat alapján megfelelő munkafelületet választ | Felületválasztási mini-döntési fa |
| 1.2 | Az első biztonságos feladat | Kicsi, visszafordítható és gyorsan ellenőrizhető kezdőfeladatot jelöl ki | Első feladatkártya |
| 1.3 | Projekt, beszélgetés és munkatér | A fájl-, kontextus- és döntési határokat helyesen rendezi el | Mintaprojekt térképe |
| 1.4 | Fájlok, eszközök, állapot és irányítás | Felismeri, mikor kell közbeavatkozni, pontosítani vagy jóváhagyni | Irányítási ellenőrzőlista |
| 1.5 | Beállítások és alap-jogosultságok | A legszűkebb szükséges kezdőbeállítást választja | Biztonságos induló profil |
| 1.6 | Labor: első munka-brief | Egy valós, alacsony kockázatú munkaterméket teljes briefként ad át | Egyoldalas munka-brief + modulkvíz |

## 02 — A delegálható feladat anatómiája

| ID | Lecke | Megfigyelhető cél | Gyakorlati kimenet |
|---|---|---|---|
| 2.1 | Először a munkatermék | Képességkérdés helyett konkrét, átvehető eredményt nevez meg | Munkatermék-katalógus |
| 2.2 | Cél, kontextus, korlátok, kész definíció | A négy elemet hiánytalanul alkalmazza egy feladatban | Strukturált feladatleírás |
| 2.3 | Biztonságos bemenet és forrásjegyzék | Elválasztja a használható, tiltott és hiányzó inputokat | Bemeneti leltár |
| 2.4 | Kimeneti szerződés | Formátumot, közönséget, terjedelmet és kötelező elemeket rögzít | Kimeneti specifikáció |
| 2.5 | Terv, kérdések és jóváhagyási pontok | Meghatározza, mikor kérjen tervet és mikor álljon meg a rendszer | Rövid végrehajtási terv |
| 2.6 | Promptlabor: homályostól ellenőrizhetőig | Rubrika alapján javít, összevet és indokol két feladatleírást | Előtte–utána prompt + modulkvíz |

## 03 — Gyors és felelős felülvizsgálat

| ID | Lecke | Megfigyelhető cél | Gyakorlati kimenet |
|---|---|---|---|
| 3.1 | A bizalom modellje | A gördülékeny szöveget nem keveri össze az igazolt eredménnyel | Átvételi kockázattérkép |
| 3.2 | Forrás, tény, következtetés | Megkülönbözteti és külön jelölteti a három állítástípust | Forráskövetési sablon |
| 3.3 | Számok, egyeztetés és visszaszámolás | Eltéréslistával és kontrollösszeggel ellenőriz számokat | Számellenőrző lap |
| 3.4 | Érzékeny és személyes adatok | Adatminimalizálást alkalmaz, és felismeri a bevonandó felelőst | Biztonságos inputváltozat |
| 3.5 | Legkisebb jogosultság és emberi kapu | Műveletenként választ hozzáférést és jóváhagyási pontot | Jogosultsági mátrix |
| 3.6 | Hibamódok és nem megbízható tartalom | Felismeri a webes utasítás, hiányzó kontextus és téves feltételezés kockázatát | Hibakeresési forgatókönyv |
| 3.7 | Labor: eredményátvétel | Forrás, szám, feltételezés és következő lépés mentén auditál egy mintát | Kitöltött review-lap + modulkvíz |

## 04 — Munkafolyamatok és szerepkörlaborok

| ID | Lecke | Megfigyelhető cél | Gyakorlati kimenet |
|---|---|---|---|
| 4.1 | Projekt- és beszélgetésfolyam | Egy munkafolyamatot követhető kontextushatárokra bont | Folyamatvázlat |
| 4.2 | A mindennapi munka alapmintája | Bemenet → feldolgozás → ellenőrzés → átadás láncot készít | Általános workflow-kártya |
| 4.3 | Pénzügyi labor | Varianciaelemzést és vezetői narratívát tervez ellenőrzési pontokkal | Havi review-brief |
| 4.4 | Adatelemzési labor | Metrikadefiníciót, exportot és döntési kérdést reprodukálható elemzéssé kapcsol | Elemzési terv |
| 4.5 | Értékesítési labor | CRM- és jegyzetforrásokból ellenőrizhető account briefet tervez | Account-brief sablon |
| 4.6 | Üzleti működési labor | Tradeoffot, felelőst és döntési pontot tartalmazó vezetői csomagot tervez | Döntési csomag |
| 4.7 | Brief, deck, táblázat, audit és webes eredmény | A munkatermékhez megfelelő formátumot és átadási módot választ | Formátumválasztási indoklás |
| 4.8 | Labor: saját folyamat feltérképezése | Saját esetét teljes munkafolyamattá alakítja és társ-review-ra előkészíti | Workflow-vászon + modulkvíz |

## 05 — Skill, plugin, eszköz és felület

| ID | Lecke | Megfigyelhető cél | Gyakorlati kimenet |
|---|---|---|---|
| 5.1 | Prompt, AGENTS.md és konfiguráció | Megkülönbözteti az egyszeri, projekt- és környezeti utasításokat | Utasításelhelyezési térkép |
| 5.2 | Skill: módszer csomagolása | Leírja egy ismételhető skill célját, lépéseit, tesztjét és erőforrásait | Skill-brief |
| 5.3 | Plugin, connector és MCP | Adat- vagy eszközkapcsolathoz megfelelő integrációs szintet választ | Integrációs döntési lap |
| 5.4 | Browser, Chrome és Computer Use | A munkakörnyezet és kockázat alapján választ felületi hozzáférést | Eszközválasztási esetmegoldás |
| 5.5 | Desktop, web, CLI, IDE és felhő | Felismeri a felületek eltérő képességeit és átadási mintáit | Felületi összehasonlító mátrix |
| 5.6 | Jogosultsági profilok és változó képességek | Verzió- és platformfüggő állítást jelöl, majd legkisebb jogosultságot választ | Profiljavaslat indoklással |
| 5.7 | Távoli kapcsolat és handoff | Távoli gép állapotát, jóváhagyását és átadását biztonságosan tervezi | Távoli munkamenet runbook |
| 5.8 | Labor: a legkisebb működő kiterjesztés | Egy esethez a legegyszerűbb elégséges megoldást választja | Döntési fa + modulkvíz |

## 06 — Automatizálás és záróprojekt

| ID | Lecke | Megfigyelhető cél | Gyakorlati kimenet |
|---|---|---|---|
| 6.1 | Automatizálási érettség | Manuális próba alapján eldönti, automatizálható-e a folyamat | Érettségi pontozólap |
| 6.2 | Ütemezett feladatok felületenként | Felülethez illeszkedő futtatási módot választ | Futtatási terv |
| 6.3 | Önálló futás vagy folytatódó beszélgetés | A kontextusigény alapján választ futástípust | Döntési indoklás |
| 6.4 | Helyi projekt vagy elkülönített munkaterület | Ütközési és visszagörgetési kockázat szerint választ | Munkatérterv |
| 6.5 | Ütemezés, bemenet, hozzáférés és eredmény | A futás minden működési paraméterét rögzíti | Automatizálási specifikáció |
| 6.6 | Megfigyelés, hiba, szüneteltetés és leállítás | Sikerkritériumot, riasztást és biztonságos leállítást ad meg | Üzemeltetési ellenőrzőlista |
| 6.7 | Záróprojekt: saját munkafolyamat | Teljes, review-zható és kézzel kipróbált workflow-t ad át | Capstone-csomag + zárókvíz |

## Értékelési modell

### Tudásellenőrzés

- Leckénként 1–3 helyzetalapú kérdés, nem puszta fogalom-visszamondás.
- Minden válasz után rövid magyarázat: miért jó, és miért kockázatos a másik döntés.
- A kérdések újrapróbálhatók; a tanulás fontosabb az első próbálkozás pontszámánál.

### Gyakorlati rubrika

Minden modulzáró és a záróprojekt 0–2 pontot kap hat dimenzióban:

1. cél és hatókör;
2. bemenetek és források;
3. kimeneti szerződés;
4. ellenőrizhetőség;
5. biztonság és emberi kapuk;
6. ismételhetőség és átadhatóság.

`0` = hiányzik vagy veszélyesen homályos, `1` = használható, de javítandó, `2` = egyértelmű és ellenőrizhető. Modulzáráshoz legalább 8/12 pont kell, de a biztonság dimenzió nem lehet 0. A záróprojekt célja legalább 10/12 pont.

### Haladás és visszatérés

- A jelenlegi modulpipa helyett leckeszintű állapot: `nem kezdett`, `folyamatban`, `kész`.
- Modul csak a tudásellenőrzés és a munkatermék-rubrika után lesz kész.
- A kezdőoldal következő leckét, utolsó munkaterméket és befejezési arányt mutat.
- Legyen külön **haladás törlése** és **eredmények exportálása** funkció.
- Az export személyes adat nélkül tartalmazza a teljesítést, a saját sablonokat és az önértékelést.

## Tartalmi és jogi szerkesztési szabályok

- A tananyag önálló magyar magyarázat, nem hivatalos fordítás.
- Hosszú forrásszöveget nem másol; idézet csak kivételesen, röviden és pontos linkkel szerepelhet.
- Termékképességet csak aktuális hivatalos OpenAI-forrás alapján állít.
- A béta-, platform- és felületfüggő viselkedést láthatóan jelöli.
- Érzékeny ügyfél-, munkáltatói, jelölti, egészségügyi, jogi vagy pénzügyi adatot a gyakorlatok nem kérnek.
- A példák fiktívek vagy biztonságosan anonimizáltak.

## Publikálási minimum

GitHub Pages csak akkor hozható létre, ha mind teljesül:

- [x] Mind a 42 lecke teljes szövege, példája, gyakorlata és visszajelzése elkészült.
- [x] A 20 hivatalos forrás minden kapcsolódó leckénél megjelenik; nincs hibás vagy indokolatlanul duplikált listaelem.
- [x] A forráslinkek, terméknevek és platformjelölések az aktuális állapotot követik.
- [x] A promptellenőrző valódi rubrikát használ; a siker nem kulcsszó-egyezésen múlik.
- [x] A leckeszintű haladás, visszatérés, törlés és export működik.
- [x] Billentyűzetes használat, fókusz, kontraszt, képernyőolvasó-címkék és mobilnézet ellenőrzött.
- [x] Automatikus lint, tartalomvalidáció és produkciós build sikeres.
- [x] A három perszóna új, teljes útvonalauditja nem tartalmaz P0/P1 hibát.
- [x] A független oktatási feldolgozás jelölése és az adatvédelmi figyelmeztetés látható.
- [x] Emberi szerkesztő jóváhagyta a tartalmi mélységet, hangot és nyilvános kiadást.

## Következő emberi döntési kapu

A Loop 03 előtt jóváhagyandó:

1. megfelel-e a 42 leckés bontás és a sorrend;
2. megfelelő-e a gyakorlati rubrika és a teljesítési küszöb;
3. a részletes tartalom egyszerre vagy modulonként, újabb emberi kapukkal készüljön-e.

Publikus repó, GitHub Actions vagy GitHub Pages ezen jóváhagyás előtt nem készül.
