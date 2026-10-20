# Portfolio

Üheleheküljeline isiklik portfoolio leht, ehitatud [Astro](https://astro.build) staatilise saidi generaatoriga.

## Arendus

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # valmis leht kausta dist/
npm run preview   # vaata ehitatud lehte
```

Vaja on Node.js 18.20+ (soovitatav 22).

## Sisu muutmine

Kogu tekstisisu (nimi, amet, teenused, oskused, projektid, haridus, tagasisided, sotsiaallingid, e-post)
on failis [`src/data/content.json`](src/data/content.json). Koodi pole vaja puutuda.

| Mida | Kuhu |
| --- | --- |
| Projektipildid | `src/assets/projects/` (PNG/JPG, 16:10, vähemalt 2400 × 1500 px, nt `projekti-nimi-01.png`). Faili nimi kirjuta `content.json` projekti välja `image` alla. Ehitus teeb neist ise AVIF/WebP variandid laiustega 600, 1200 ja 2400 px. |
| CV | `public/cv.pdf` (praegu ajutine fail) |
| Open Graph pilt | `public/og-image.png` (1200 × 630) |
| Favicon | `public/favicon.svg` |
| Värvid, fondid, vahed | `src/styles/global.css` (`:root` muutujad) |

## Ülesehitus

```
src/
  data/content.json      kogu sisu
  pages/index.astro      lehe plokkide järjekord
  components/            iga plokk eraldi komponendina (Hero, Services, Skills, ...)
  styles/global.css      disainitokenid ja ühised stiilid
```

## Hostimine

Ehitus annab puhta staatilise kausta `dist/`, mis sobib igale staatilisele hostile
(GitHub Pages, Netlify, Cloudflare Pages, Vercel). Kui leht ei asu domeeni juures, vaid alamkaustas
(nt GitHub Pages `kasutaja.github.io/portfolio`), sea ehituse ajal `SITE_URL` ja `BASE_PATH`:

```sh
SITE_URL=https://kasutaja.github.io BASE_PATH=/portfolio npm run build
```

Arendusspec: https://claude.ai/code/artifact/07b2fbea-fa26-458c-aa8e-672cc2f10cc8
