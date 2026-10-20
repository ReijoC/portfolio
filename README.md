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
| Projektid | `content.json` → `projects`: nimi, aasta, staatus, kirjeldus, roll, CV-tekst, tehnoloogiad, link ja pildid koos allkirjadega. |
| Projektipildid | `src/assets/projects/<projekt>/` (PNG/JPG, 16:10, vähemalt 2400 × 1500 px). Ehitus teeb neist ise AVIF/WebP variandid laiustega 600, 1200 ja 2400 px. |
| CV | pane PDF kausta `public/` ja failinimi `content.json` välja `person.cv` alla; tühja välja korral „Laadi CV“ nuppu ei näidata |
| Open Graph pilt | `public/og-image.png` (1200 × 630) |
| Favicon | `public/favicon.svg` |
| Värvid, fondid, vahed | `src/styles/global.css` (`:root` muutujad) |

Veel täitmata: oskuste protsendid on hinnangulised, tagasisidede plokk on peidetud kuni `testimonials` on tühi, CV PDF puudub.

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
