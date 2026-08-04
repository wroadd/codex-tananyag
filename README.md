# Codex Munkaműhely

Magyar nyelvű, weboldal-alapú oktatási anyag a Codex és a ChatGPT Work gyakorlati, ellenőrizhető munkafolyamatairól, hivatalos OpenAI-források alapján.

Nyilvános tananyag: **[wroadd.github.io/codex-tananyag](https://wroadd.github.io/codex-tananyag/)**

## Indítás

```bash
npm install
npm run dev
```

Éles build:

```bash
npm run check
npm run build
npm run preview
```

Az `npm run check` az ESLint mellett a modul-, szerepkör-, forráskulcs- és forrásszűrő-regressziókat is ellenőrzi.

## Mit tartalmaz?

- hatmodulos, mentett haladású tanulási útvonal;
- 42 részletes lecke saját munkatermékkel és helyzetalapú tudásellenőrzéssel;
- hatdimenziós, 12 pontos prompt-önértékelő rubrika;
- pénzügyi, adatelemzési, értékesítési és üzleti működési példák;
- plugin–skill–ütemezett feladat döntési modell;
- jogosultsági hatókör gyakorlófelület;
- 20 hivatalos, kategorizált OpenAI-forrás;
- helyben tárolt haladás, JSON-export és kétlépcsős törlés.

A 42 leckés szerkezet a [Loop 02 architektúrában](docs/LOOP-02-CONTENT-ARCHITECTURE.md), a források tantervi helye pedig a [forrás–lecke mátrixban](docs/SOURCE-LESSON-MATRIX.md) található.

Modulkapuk: [01. modul](docs/LOOP-03-MODULE-01-GATE.md) · [02. modul](docs/LOOP-03-MODULE-02-GATE.md) · [teljes kiadási kapu](docs/LOOP-04-PUBLICATION-READINESS.md)

Az oldal nem hivatalos OpenAI-fordítás. Önálló magyar oktatási feldolgozás, amely minden forrást közvetlenül hivatkozik.

## Karbantartás

Az oktatási tartalom a `src/data.js`, a források ugyanennek a fájlnak a `sources` tömbjében találhatók. Forrásfrissítéskor:

1. ellenőrizd a 20 URL elérhetőségét és címét;
2. az átirányított URL-eket cseréld közvetlenül az új célcímre;
3. futtasd az ellenőrzést és a buildet;
4. nézd végig asztali és mobil nézetben a modul-, prompt- és forrásfolyamatot.
