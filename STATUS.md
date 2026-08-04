# Projektállapot

Utolsó forrásellenőrzés: 2026. augusztus 4.

## Aktuális kapu

A felhasználó a 2. és az összes további modult jóváhagyta. Mind a hat modul és mind a 42 részletes lecke elkészült. A következő és egyben utolsó kapu a teljes asztali/mobil böngészős QA, majd siker esetén a jóváhagyott nyilvános GitHub Pages-publikáció.

## Elkészült

- [x] React + Vite projekt és reszponzív vizuális rendszer
- [x] 6 modul, 42 részletes lecke és 42 menthető munkatermék
- [x] Leckeszintű tudásellenőrzés és helyi haladásmentés
- [x] Következő lecke és utolsó munkatermék visszatérési útvonala
- [x] Hatdimenziós, 12 pontos prompt-önértékelő rubrika
- [x] Haladás, munkatermékek és rubrika JSON-exportja
- [x] Kétlépcsős helyiadat-törlés
- [x] Pénzügyi, adatelemzési, értékesítési és üzleti működési labor
- [x] Plugin–skill–MCP–Browser–Chrome–Computer Use döntési modell
- [x] Jogosultság-, távoli kapcsolat- és automatizálási tananyag
- [x] 20/20 egyedi hivatalos forrás leckeszintű hozzárendelése
- [x] GitHub Pages production workflow

## Automatikus ellenőrzési eredmények

- `npm run check`: sikeres
- Tartalom: 6 modul, 42 lecke, 4 szerepkör, 20 egyedi forrás
- Modulleckeszámok: 6, 6, 7, 8, 8, 7
- Minden modul záróleckéje legalább három helyzetalapú kérdést tartalmaz
- Mind a 20 forrást használja legalább egy lecke
- `npm run build`: sikeres Vite production build
- `npm audit --audit-level=moderate`: 0 ismert sérülékenység

## Forrásállapot

A korábbi Academy- és Codex-dokumentációs URL-ek helyett a forrásjegyzék közvetlenül az aktuális `learn.chatgpt.com` célcímeket használja. Az oldal nem jelenít meg külön ellenőrzési dátumot; az csak a karbantartási dokumentáció része.

## Környezeti megjegyzés

A Documents-könyvtár helyi fájlszolgáltatója a `node_modules` bejárásakor időnként blokkolt. A reprodukálható kiadási ellenőrzés ezért a forrásokból felépített tiszta ideiglenes könyvtárban is lefutott. A GitHub Actions ugyanilyen tiszta `npm ci` telepítést használ.
