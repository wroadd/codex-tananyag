# Loop 01 — Perszóna- és teljes útvonalaudit

Dátum: 2026. július 20.  
Módszer: megfigyelés, három perszóna, perszónánként egy teljes útvonal.  
Vizsgált build: helyi Vite-fejlesztői build, asztali böngésző.  
Változtatási határ: ebben a loopban nem történt felhasználói felületet vagy tananyagot érintő módosítás és nem történt publikálás.

## Pozicionálás

A jelenlegi oldal ígérete: magyar nyelvű, gyakorlati útvonal a biztonságos első feladattól az ellenőrizhető, ismételhető munkafolyamatig. A fő célközönség irodai tudásmunkát végző szakemberek és a Codex/ChatGPT Work csapatmunkába illesztéséért felelős technikai vezetők.

## Perszónák

### P1 — Nem technikai operációs vezető

- Cél: heti helyzetképet vagy vezetői döntési csomagot szeretne készíteni szétszórt projektanyagokból.
- Előismeret: ChatGPT-t használt már, de a Work módot, plugineket és skilleket nem ismeri.
- Kockázatérzékenység: közepes; fontos neki, hogy mi ellenőrizhető és mi marad emberi döntés.
- Mentális modell: rövid LinkedIn Learning-lecke + Notion-sablon.

### P2 — Kontrollér / adatelemző

- Cél: forrásokkal, számokkal és feltételezésekkel együtt ellenőrizhető elemzési munkaterméket szeretne.
- Előismeret: erős szakmai és táblázatos háttér, kevés agentikus munkafolyamat-tapasztalat.
- Kockázatérzékenység: magas; adatvédelem, definíciók, egyeztetés és reprodukálhatóság fontos.
- Mentális modell: szakmai playbook + auditálható Excel/BI ellenőrzőlista.

### P3 — Technikai automatizálási felelős

- Cél: egy bevált kézi munkafolyamatot pluginnel, skillel vagy ütemezett feladattal skálázna.
- Előismeret: ismeri a repókat, jogosultságokat, integrációkat és automatizálási fogalmakat.
- Kockázatérzékenység: magas; felületek, jogosultsági határok, verziók és izoláció érdeklik.
- Mentális modell: termékdokumentáció + GitHub Skills-szerű, végrehajtható labor.

## Teljes útvonalak

### P1 útvonala — Operációs vezető

| Útvonalpillanat | Elvárt | Tényleges | Értékelés |
|---|---|---|---|
| Landing | Gyorsan értse meg, milyen munkát érdemes delegálni | Az értékígéret és a „valódi munka” metafora azonnal érthető | Örömteli, erős első képernyő |
| Regisztráció | Nyilvános tananyagnál ne legyen kötelező fiók | Nincs regisztráció vagy bejelentkezés | Helyes a statikus oldalhoz |
| Első modul | Kapjon fogalmi alapot és egy kipróbálható feladatot | Három magyarázó pont és egy rövid gyakorlat | Könnyen fogyasztható, de túl sekély |
| Alapmunkafolyamat | Tudja saját feladatra alkalmazni a formulát | A promptműhely a mintapromptot ellenőrzi, de a három feltétel kulcsszó-alapú | Jó azonnali visszajelzés, gyenge tanulási diagnózis |
| Másodlagos funkció | Találjon szerepköréhez példát | Az „Üzleti működés” tab döntési csomagot, bemenetet és review-szempontot mutat | Jó relevancia, kevés részlet |
| Korlátok | Értse, mit ne adjon át és mikor kell emberi kapu | Az emberi felelősség megjelenik, de nincs érzékeny adat- vagy jóváhagyási szituáció | Fontos hiány |
| Visszatérés | Folytassa ott, ahol abbahagyta | Újratöltés után az 1/6 haladás megmarad | Örömteli és egyértelmű |
| Kilépés / lezárás | Tudja újrakezdeni, törölni vagy összefoglalni a haladását | Nincs nullázás, export, záró összefoglaló vagy következő lépés | Hiányos offboarding |

### P2 útvonala — Kontrollér / adatelemző

| Útvonalpillanat | Elvárt | Tényleges | Értékelés |
|---|---|---|---|
| Landing | Lássa, hogy nem általános AI-bemutatót kap | A munkatermék- és review-központú nyelv hiteles | Erős pozicionálás |
| Regisztráció | Azonnali, fiók nélküli hozzáférés | Nincs signup | Helyes |
| Első szakmai modul | Bemenet–kimenet–ellenőrzés részletes példával | A 02-es modul három pontot és egy átírási gyakorlatot ad | A fogalom jó, az oktatási mélység kevés |
| Alapmunkafolyamat | Legyen pénzügyi vagy adatos starter prompt, mintaeredmény és ellenőrzési lista | A Pénzügy tab két rövid adatblokkot ad; nincs prompt, minta, letölthető sablon vagy végigvezetett példa | Jelentős unmet need |
| Másodlagos funkció | Szűrhető, konzisztens szakmai források | A „Gyakorlati példák” szűrés után 6 sor jelent meg az elvárt 5 helyett; egy „A Work mód kezdőoldala” sor bennmaradt | Konkrét szűrési hiba |
| Korlátok | Adatvédelmi, személyesadat- és számellenőrzési kapuk | Nem található bizalmas/személyes adatot vagy adatvédelmet magyarázó rész | Publikálás előtti tartalmi hiány |
| Visszatérés | A kész modul megmaradjon, látszódjon a következő ajánlott lépés | Az 1/6 állapot megmarad, de nincs személyre szabott következő lépés | Részben jó |
| Kilépés / lezárás | Összegzés, sablon vagy saját munkafolyamat export | Nincs lezáró artefaktum | Hiányos |

### P3 útvonala — Technikai automatizálási felelős

| Útvonalpillanat | Elvárt | Tényleges | Értékelés |
|---|---|---|---|
| Landing | Az alapoktól gyorsan elérje a technikai mélyítést | Navigációval és modulrail-lel elérhető | Jó információs architektúra |
| Regisztráció | Fiók nélkül felmérhesse a tartalmat | Nincs signup | Helyes |
| Technikai modul | Felületválasztási döntés, setup, példa és hibahatár | A 05-ös modul három pontot ad; nincs setup-lépés és nincs kód- vagy konfigurációs példa | Túl sekély |
| Alapmunkafolyamat | Tudjon választani plugin, skill és ütemezés között konkrét kritériumokkal | A három fogalom vizuálisan jól elkülönül | Jó alap, döntési fa hiányzik |
| Másodlagos funkció | Jogosultsági döntést valós következménnyel próbálhasson ki | A három jogosultsági szint választható, de csak a kiválasztási állapot változik | Interakció van, tanulási következmény nincs |
| Korlátok | Bétaállapot, felületkülönbségek, worktree, hálózat és jóváhagyások | Nincs verzió- vagy bétafigyelmeztetés, felületmátrix, worktree- vagy izolációs magyarázat | Jelentős hiány |
| Források | Pontosan 6 technikai forrás | 7 sor jelent meg; az „A Work mód kezdőoldala” bennmaradt | Ugyanaz a forráskulcs-hiba |
| Visszatérés | Haladás és technikai választás megmaradjon | A modulhaladás megmarad, a jogosultsági választás nem | Inkább demó, mint labor |
| Kilépés / lezárás | Checklist, saját konfigurációs vázlat vagy export | Nincs | Hiányos |

## Tartalmi mélység összevetése

| Téma | Jelenlegi oldal | Hivatalos Learn/Academy mélység | Rés |
|---|---|---|---|
| Work mód alapjai | 3 tanulási pont | Chat vs Work, fájlok, pluginek, jóváhagyások, haladás és irányváltás | Nagy |
| Jó feladat | Bemenet + kimenet + ellenőrzés | Cél, kontextus, korlátok és „done when”, továbbá tervezés és tisztázás | Közepes–nagy |
| Mindennapi használat | 4 szerepkör röviden | 10 külön use case, „mikor használd”, bemenet, kimenet, folyamat, starter prompt és valós példa | Nagy |
| Ismételhetőség | Plugin–skill–ütemezés egymondatos modell | Skill felépítése, készítés, tesztelés, telepítés; plugin és connector viszonya; felületenkénti használat | Nagy |
| Ütemezett feladat | 3 rövid pont | Web/desktop/CLI/IDE különbség, standalone vs chat, lokális projekt vs worktree, hozzáférés, futások, RRULE | Nagy |
| Jogosultság | 3 választógomb | Bétaállapot, profilok, régi sandbox-beállítások, fájl- és hálózati hatókör, platformkorlátok | Nagy |
| Computer Use és Chrome | 1 összevont tanulási pont | Telepítés, engedélyek, mikor strukturált integráció, mikor Chrome vagy beépített böngésző, biztonsági korlátok | Nagy |
| Távoli munka | Csak forráslink | Remote Control, SSH, hostállapot, jóváhagyás, handoff, hálózati biztonság | Teljes témaköri hiány |

A jelenlegi tananyag tehát vizuálisan és navigációsan publikálható minőségű, de tartalmilag még nem teljesíti azt az elvárást, hogy legalább olyan mély legyen, mint a kapcsolódó Learn-oldalak.

## Bizonyítéknapló

| ID | Megfigyelés | Bizonyíték |
|---|---|---|
| E01 | Friss belépéskor 0/6 modul, 6 modul és 19 forrás látszik | Böngésző DOM-mérés, P1 |
| E02 | Nincs signup/login elem | 0 egyező link vagy gomb mindhárom útvonalon |
| E03 | A fő CTA egyértelműen az első modulhoz visz | Egyedi „Kezdem az alapokkal” link, célmodul látható |
| E04 | A mintaprompt mindhárom feltételt teljesíti | „Jó alap…” visszajelzés |
| E05 | A haladás újratöltés után megmarad | 0/6 → 1/6 P1, P2 és P3 esetén |
| E06 | Nincs reset/export/offboarding vezérlő | 0 egyező vezérlő mindhárom útvonalon |
| E07 | Minden kiválasztott modul 3 tanulási pontot tartalmaz | DOM-listaszám P2 és P3 |
| E08 | A pénzügyi szerepkörnél nincs starter prompt vagy kapcsolt labor | 0 `textarea`, `pre`, `code` és 0 link a szerepkörpanelen |
| E09 | Nincs érzékenyadat/adatvédelmi tananyagrész | 0 releváns szövegegyezés P2 útvonalon |
| E10 | Nincs setup vagy kódpélda a technikai modulban | 0 kódblokk; setup-kifejezés nem található |
| E11 | A technikai forrásszűrő 7 sort ad a helyes 6 helyett | DOM-listaszám és sorcímek P3 |
| E12 | A forrásszűrési hiba oka a duplikált React-kulcs | Két forrássor azonos `get-started-with-work` URL-t használ `key={url}` mellett; a Vite-konzol ezt explicit React-hibaként hatszor jelezte |
| E13 | Nincs béta/verziófigyelmeztetés | 0 releváns szövegegyezés P3 útvonalon |
| E14 | A GitHub CLI hitelesített, de a projekt még nem Git-repó | `gh auth status` sikeres; `git rev-parse` nem adott repógyökeret |

## Megállapítások

### Használhatósági súrlódások

1. **P0 — Hibás forrásszűrés.** A duplikált `key={url}` miatt kategóriaváltáskor korábbi sor marad a listában. Journey: másodlagos funkció / forráskeresés. Bizonyíték: E11–E12.
2. **P1 — A „kész” túl könnyen elérhető.** Egy modul három pont elolvasása után egyetlen kattintással kész, tudásellenőrzés nélkül. Journey: alapmunkafolyamat. Bizonyíték: E07.
3. **P1 — Kulcsszó-alapú promptértékelés túl magabiztos.** Formailag visszajelez, de nem mutatja meg, miért jó vagy hogyan javítható a prompt. Journey: promptműhely. Bizonyíték: E04.
4. **P2 — Nincs haladáskezelés.** A felhasználó nem tud újrakezdeni vagy saját összefoglalót kinyerni. Journey: visszatérés és offboarding. Bizonyíték: E05–E06.

### Kielégítetlen igények

1. **P0 — Learn-szintű oktatási mélység.** Részletes magyarázat, döntési pont, lépésről lépésre példa, ellenpélda, gyakorlat és ellenőrzés kell minden modulhoz.
2. **P0 — Biztonság és érzékeny adatok.** Külön rész kell arról, milyen adatot ne adjunk át, hogyan szűkítsük a hatókört, mikor kell emberi jóváhagyás.
3. **P1 — Szerepkörönkénti végigvezetett labor.** Legalább egy teljes pénzügyi, adatelemzési, sales és ops munkafolyamat bemenettel, prompttal, mintakimenettel és review-listával.
4. **P1 — Technikai felület- és döntési mátrix.** Chat/Work, desktop/web, CLI/IDE, plugin/skill/MCP, Browser/Chrome/Computer Use, lokális/remote különbségek.
5. **P1 — Automatizálási labor.** Stabilitási kapu, worktree, hozzáférés, futásellenőrzés, hibakezelés és leállítás.
6. **P2 — Záró munkatermék.** A tanuló saját workflow briefet vagy ellenőrzőlistát exportálhasson.

### Funkciójavaslatok, konkrét útvonalpillanathoz kötve

| Rang | Javaslat | Útvonalpillanat | Érintett perszóna |
|---|---|---|---|
| 1 | Javítsuk a források stabil azonosítóját, és adjunk szűrési regressziótesztet | Forráskeresés | P1–P3 |
| 2 | A 6 rövid modulból készítsünk 6 mély fejezetet, fejezetenként 4–7 leckével | Core workflow | P1–P3 |
| 3 | Modulonként „Mutasd → magyarázd → próbáld ki → ellenőrizd” szerkezet | Core workflow | P1–P3 |
| 4 | Szerepkörönként teljes, másolható labor és letölthető review-sablon | Szakmai alkalmazás | P1–P2 |
| 5 | Biztonsági döntési szimuláció valós következményekkel | Korlátok | P1–P3 |
| 6 | Felületválasztó és ismételhetőségi döntési fa | Másodlagos/advanced | P3 |
| 7 | Modulzáró rövid tudáspróba, csak utána kész állapot | Modulzárás | P1–P3 |
| 8 | „Saját munkafolyamatom” összefoglaló, export és haladásnullázás | Offboarding | P1–P3 |

## Jóváhagyási és változtatási határok

1. **Publikálási kapu:** a jelenlegi buildet nem javasolt „teljes tananyagként” publikálni, mert a tartalmi mélység lényegesen elmarad a hivatkozott Learn-oldalaktól.
2. **Következő loop javasolt határa:** tartalmi információarchitektúra, részletes fejezetvázak, forrás–lecke lefedettségi mátrix és a P0 hibajavítás. Ezután implementációs loop következhet.
3. **Nyilvános külső változtatás:** a GitHub-hozzáférés rendelkezésre áll, de a mappa még nem Git-repó. A nyilvános repó és Pages létrehozása csak a tartalmi, jogi/forrásjelölési, funkcionális és mobil QA-kapu után történjen.
4. **Forráskezelés:** a hivatalos OpenAI-forrásokat röviden, saját magyar megfogalmazással kell feldolgozni; hosszú vagy teljes átvétel nem kerülhet az oldalra.

## Javasolt további loopok

- **Loop 02 — Tartalmi architektúra és forráslefedettség:** fejezetek, leckék, tanulási célok, gyakorlatok, forrásmátrix, publikálási minimum.
- **Loop 03 — Implementáció:** mély tananyag, laborok, tudáspróbák, haladásmodell, P0–P1 hibák.
- **Loop 04 — Persona-regresszió és hozzáférhetőségi QA:** ugyanaz a három útvonal, asztali és mobil nézet, tartalmi pontosság.
- **Loop 05 — GitHub Pages publikálás:** repó, workflow, publikus URL, live smoke teszt és forráslink-ellenőrzés.

## Felhasznált hivatalos összehasonlítási alapok

- [Get started with Work mode](https://learn.chatgpt.com/docs/get-started-with-work)
- [Best practices](https://learn.chatgpt.com/guides/best-practices)
- [Skills & Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [Permissions](https://learn.chatgpt.com/docs/permissions)
- [Computer Use](https://learn.chatgpt.com/docs/computer-use)
- [Chrome extension](https://learn.chatgpt.com/docs/chrome-extension)
- [Remote connections](https://learn.chatgpt.com/docs/remote-connections)
- [How to use Codex for everyday work](https://openai.com/academy/how-to-use-codex-for-everyday-work/)
