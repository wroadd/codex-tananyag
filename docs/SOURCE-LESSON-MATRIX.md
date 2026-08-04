# Hivatalos forrás–lecke lefedettségi mátrix

Ez a mátrix a projektben nyilvántartott 20 hivatalos OpenAI-forrást köti a 42 elkészült leckéhez. A „Feldolgozva” állapotot a tartalmi validátor is ellenőrzi: minden URL-nek legalább egy konkrét leckében szerepelnie kell.

| ID | Kategória | Hivatalos forrás | Elsődleges leckék | Feldolgozandó témák | Állapot |
|---|---|---|---|---|---|
| S01 | Alapok | [ChatGPT Learn központ](https://learn.chatgpt.com/) | 1.1, 1.2 | pozicionálás, kezdő útvonal, munkatermék | Feldolgozva az 1. modulban |
| S02 | Alapok | [A Work mód kezdőoldala](https://learn.chatgpt.com/docs/get-started-with-work) | 1.1, 1.3, 1.4 | Chat és Work, fájlok, eszközök, irányítás | Feldolgozva az 1. modulban |
| S03 | Alapok | [Gyors kezdés](https://learn.chatgpt.com/docs/quickstart) | 1.2, 1.5, 1.6 | első projekt, kis feladat, első átadás | Feldolgozva az 1. modulban |
| S04 | Alapok | [Projektek és beszélgetések](https://learn.chatgpt.com/docs/projects) | 1.3, 1.4 | projekt, beszélgetés, forrás- és munkatérhatár | Feldolgozva az 1. modulban |
| S05 | Alapok | [Beállítások](https://learn.chatgpt.com/docs/reference/settings) | 1.5, 5.5, 5.6 | beállítások, felületfüggő lehetőségek | Feldolgozva |
| S20 | Alapok | [Promptírás](https://learn.chatgpt.com/docs/prompting) | 2.1–2.6 | cél, kontextus, kimenet, határok, források, review | Feldolgozva a 2. modulban |
| S06 | Gyakorlati példák | [Mindennapi munkafolyamatok](https://learn.chatgpt.com/use-cases) | 2.1, 4.2, 4.7 | brief, összefoglaló, deck, táblázat, audit | Feldolgozva |
| S07 | Gyakorlati példák | [Pénzügyi munkafolyamatok](https://learn.chatgpt.com/use-cases/collections/finance) | 3.3, 4.3 | variancia, egyeztetés, vezetői csomag | Feldolgozva |
| S08 | Gyakorlati példák | [Adatelemzési munkafolyamatok](https://learn.chatgpt.com/use-cases/collections/data-science) | 3.2, 3.3, 4.4 | metrikák, export, reprodukálható elemzés | Feldolgozva |
| S09 | Gyakorlati példák | [Értékesítési munkafolyamatok](https://learn.chatgpt.com/use-cases/collections/sales) | 3.4, 4.5 | account brief, meeting prep, forecast-kockázat | Feldolgozva |
| S10 | Gyakorlati példák | [Üzleti működési munkafolyamatok](https://learn.chatgpt.com/use-cases/collections/business-operations) | 4.1, 4.6 | kezdeményezésfrissítés, tradeoff, döntési csomag | Feldolgozva |
| S11 | Kiterjesztés | [Pluginek és skillek](https://learn.chatgpt.com/docs/skills-and-plugins) | 5.2, 5.3, 5.8 | skill és plugin szerepe, támogatott erőforrások | Feldolgozva |
| S12 | Kiterjesztés | [Ütemezett feladatok](https://learn.chatgpt.com/docs/automations) | 6.1–6.7 | futástípus, munkatér, ütemezés, megfigyelés | Feldolgozva |
| S13 | Kiterjesztés | [Codex minden szerepkörhöz és folyamathoz](https://openai.com/index/codex-for-every-role-tool-workflow/) | 4.7, 5.3 | szerepköri pluginek, webes eredmények, annotációk | Feldolgozva |
| S14 | Technikai mélyítés | [Bevált gyakorlatok](https://learn.chatgpt.com/guides/best-practices) | 2.2, 2.5, 3.1, 5.1, 6.1, 6.6, 6.7 | kontextus, terv, konfiguráció, review | Feldolgozva |
| S15 | Technikai mélyítés | [Skillkészítés](https://learn.chatgpt.com/docs/build-skills) | 5.2, 5.8 | felépítés, készítés, teszt, telepítés | Feldolgozva |
| S16 | Technikai mélyítés | [Jogosultságok](https://learn.chatgpt.com/docs/permissions) | 3.5, 5.6, 6.4–6.7 | fájl-, hálózati és számítógép-hozzáférés, profilok | Feldolgozva |
| S17 | Technikai mélyítés | [Computer Use](https://learn.chatgpt.com/docs/computer-use) | 3.6, 5.4 | UI-műveletek, rendszerengedélyek, hatókör | Feldolgozva |
| S18 | Technikai mélyítés | [Chrome-bővítmény](https://learn.chatgpt.com/docs/chrome-extension) | 3.6, 5.4 | bejelentkezett profil, nem megbízható webes tartalom | Feldolgozva |
| S19 | Technikai mélyítés | [Távoli kapcsolatok](https://learn.chatgpt.com/docs/remote-connections) | 5.5, 5.7 | távoli gép, hostállapot, jóváhagyás, handoff | Feldolgozva |

## Lefedettségi összesítés

- **Forráslefedettség:** 20/20 forrásnak van tantervi helye.
- **Leckelefedettség:** mind a 42 leckének van legalább egy közvetlen hivatalos forrása.
- **Szerepkörlefedettség:** pénzügy, adatelemzés, értékesítés és üzleti működés külön laborral rendelkezik.
- **Kockázati lefedettség:** forrásellenőrzés, számellenőrzés, érzékeny adatok, jogosultság, nem megbízható webes tartalom és automatizálási felügyelet önálló leckét kap.

## Összevont forráskonvergencia

Az eredeti „A Work mód kezdőoldala” és „Munka a Work móddal” bejegyzés ugyanarra a `get-started-with-work` oldalra mutatott. A jóváhagyott összevonás után az S02 egyetlen kanonikus bejegyzésként őrzi mindkét tantervi szerepet. Az S04 helyére a különálló, aktuális „Projects and chats” forrás került. A 2. modul forrásellenőrzésekor bekerült a különálló, jelenlegi „Prompting” alapoldal S20-ként, így 20, egymástól eltérő hivatalos URL szerepel a jegyzékben.

## Szerkesztési ellenőrzés a Loop 03-ban

Minden részletes lecke előtt és után ellenőrizendő:

1. a link közvetlenül az aktuális hivatalos célra mutat-e;
2. a forrás ténylegesen alátámasztja-e a termékállítást;
3. van-e béta-, platform- vagy felületfüggő korlátozás;
4. a magyar szöveg önálló magyarázat-e, nem hosszú átvétel;
5. a gyakorlatban nincs-e szükség érzékeny adatra.
