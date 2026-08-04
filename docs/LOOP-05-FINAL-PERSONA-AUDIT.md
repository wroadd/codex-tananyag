# Loop 05 – kiadás előtti perszóna-útvonalaudit

Megfigyelés dátuma: 2026. augusztus 4.  
Vizsgált build: production Vite-build, 1280 px és 390 × 844 px nézet.  
Módszer: perszónánként egy megfigyelési kör, csak a nyilvános oldalon látható elemekkel. Nem történt roadmap- vagy új funkcióbővítés a megfigyelési kör közben; csak P1-et érintő kiadási hibajavítás.

## Perszónák

1. **Kezdő tudásmunkás – Nóra.** Nem fejlesztő, heti összefoglalót vagy kutatási briefet szeretne. Elsődleges mentális modellje egy online kurzus és a ChatGPT.
2. **Operációs/pénzügyi power user – Márton.** Ismétlődő riportot akar forrás- és számkontrollal. Mentális modellje egy SOP, munkafolyamat-kezelő és táblázatos ellenőrzőlista.
3. **Technikai csapatbajnok – Eszter.** Plugin-, skill-, jogosultság- és automatizálási döntést készít elő. Mentális modellje fejlesztői dokumentáció, sandbox és CI-kapu.

## Teljes útvonal megfigyelése

| Útvonalmoment | Nóra – várható / tényleges | Márton – várható / tényleges | Eszter – várható / tényleges |
|---|---|---|---|
| Landing | Gyorsan értse, mire való / A főüzenet munkatermékkel indít, a hatmodulos útvonal látható | Ellenőrizhető üzleti eredményt keressen / A hero és a szerepköri példák ezt mutatják | Hivatalos forrású, nem marketinganyag / A független feldolgozás és 20 közvetlen link látható |
| Signup | Ne legyen belépési akadály / Nincs regisztráció; a kurzus azonnal használható | Helyi próba fiók nélkül / Teljesül | Publikus, auditálható hozzáférés / Teljesül |
| Alapmunkafolyamat | Lecke → példa → gyakorlat → visszajelzés / Mind a 42 lecke azonos szerkezetet használ | Input → kontroll → artifact / A munkatermék és tudásellenőrzés együtt zárja a leckét | Forrás → döntés → teszt / Külön döntési térkép, labor és forrásblokk van |
| Másodlagos funkció | Saját prompt javítása / Hatdimenziós, látható rubrika | Szerepköri labor és számellenőrzés / Külön pénzügyi és adatlabor | Skill, MCP, Browser, Chrome, Computer Use, remote / Külön leckék és minimális kiterjesztési labor |
| Korlátok | Tudja, mi marad emberi feladat / A jóváhagyás és érzékenyadat-határ ismétlődik | Hiányos adatnál ne legyen hamis kész állapot / A 3. és 6. modul megállási szabályt tanít | Platformfüggés legyen jelölve / A felületi és beállítási leckék ezt külön kimondják |
| Visszatérés | Lássa, hol folytassa / Következő lecke és utolsó munkatermék újratöltés után megmarad | Saját artifact visszakereshető legyen / Cím szerint látható, teljes tartalma a leckében őrződik | A modulváltás ne veszítse el az állapotot / 8 leckésről 6 leckésre váltás és újratöltés sikeres |
| Offboarding | Letöltés és tiszta újrakezdés / A JSON elkészül, névvel és download attribútummal; törlés kétlépcsős | Saját sablonokat el tudja vinni / A JSON tartalmazza a munkatermékeket és rubrikát | Ne maradjon rejtett fiókadat / Nincs szerveroldali fiók; a helyi állapot törölhető |

## Bizonyítéknapló

| ID | Megfigyelés | Eredmény |
|---|---|---|
| E01 | Modulok bejárása | 6, 6, 7, 8, 8, 7 tab; mindegyikhez aktív tabpanel |
| E02 | Záróprojekt | 6.7 cím és 3 helyzetalapú kérdés |
| E03 | Modulváltási regresszió | 6.7-ről az 1. modulra váltva nincs összeomlás; 1.1 aktív |
| E04 | Leckezárás | Helyes válasz + 158 karakteres artifact után engedélyezett |
| E05 | Visszatérés | Újratöltés után következő lecke 1.2, utolsó artifact 1.1 |
| E06 | Rubrika | 10/12 pont biztonság=0 mellett blokkol; 11/12 és biztonság=1 mellett elfogad |
| E07 | Export | Az elkészített link `data:application/json` tartalmú, dátumozott `.json` letöltési névvel |
| E08 | Törlés | Külön „Végleges törlés” kapu; utána 0/6, 0/12, nincs artifact |
| E09 | Mobil | 390 px viewport = 390 px dokumentumszélesség; nincs túlcsordulás; mobilmenü 5 linkkel nyílik |
| E10 | Akadálymentesség | Tab/tabpanel és mezőcímkék láthatók a szemantikus fában; fókusz 3 px, 3 px offset, sötét türkiz |
| E11 | Vizuális kontraszt | Kis korallszöveg módosítva: `#b93329` fehéren 5,88:1; normál szövegkövetelményt teljesít |
| E12 | Konzol | 0 error, 0 warning |

## Megállapítások

### Használhatósági súrlódás

- **P2 – hosszú oldal:** a teljes tananyag egyetlen oldalon van; a modul- és lecketabok csökkentik a terhet, de a promptműhely és forrásjegyzék messze kerülhet az aktuális leckétől.
- **P2 – export két lépés:** az export előkészítése után külön linkkel kell letölteni. Ez megbízható és biztonságos, de kevésbé azonnali.
- **P3 – kézi önértékelés:** a rubrika tanítja a gondolkodást, viszont a tanuló maga pontoz; nincs tanári vagy modellalapú minősítés.

### Kielégítetlen igények

- Nincs több eszköz közötti szinkron vagy import; a projekt tudatosan szerver és fiók nélkül működik.
- Nincs teljes szöveges keresés a 42 leckében.
- Nincs oktatói dashboard vagy tanúsítvány.

### Javaslatok konkrét útvonalmomenthez

1. **P2, visszatérés:** későbbi verzióban JSON-import a meglévő export párjaként.
2. **P2, alapmunkafolyamat:** lecke- és forráskereső a hosszú oldal tetején.
3. **P3, modulzárás:** nyomtatható capstone-összesítő és opcionális oktatói értékelőlap.

## Kiadási döntés és jóváhagyási határ

P0 vagy P1 hiba nincs. A megfigyelés közben talált mobil túlcsordulás és alacsony kis-szöveg kontraszt a kiadás előtt javítva és újramérve. A P2/P3 elemek nem blokkolják az első publikus verziót, és külön roadmap-jóváhagyás nélkül nem kerülnek be. A felhasználó a teljes hátralévő tartalmat és a sikeres QA utáni nyilvános kiadást már jóváhagyta.
