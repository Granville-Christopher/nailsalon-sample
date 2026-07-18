# Salon Website Template

A mobile-first, single-page salon website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed for quick re-skins when selling sites to salon owners — almost everything editable lives in one config file.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize a client in ~10 minutes

### 1. Edit the config (main file)

Open **`src/data/salonConfig.ts`** and update:

| Field | What to change |
|--------|----------------|
| `name`, `tagline`, `about` | Brand copy |
| `colors.*` | Hex palette (primary, secondary, backgrounds, text) |
| `hero.image` / `hero.ctaLabel` | Hero photo + Book Now label |
| `services` | Names, descriptions, prices |
| `gallery` | Image URLs + alt text |
| `hours` | Business hours rows |
| `location` | Address + Google Maps **embed** URL |
| `contact.email` | Contact email |
| `contact.whatsappNumber` | Digits only with country code (e.g. `2349133871053`) |
| `contact.whatsappMessage` | Optional prefilled chat message |
| `seo.*` | Title, description, OG image, live `siteUrl` |
| `siteCredit` | Footer “Site by …” — set `enabled: false` to hide |

WhatsApp links are built automatically as `https://wa.me/{whatsappNumber}`.

### 2. Swap images

**Option A — remote (Unsplash, Cloudinary, etc.)**  
Paste HTTPS URLs into `hero.image`, `gallery[].src`, and `seo.ogImage`.

If you use a new image host, add its hostname in `next.config.ts`:

```ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" },
    { protocol: "https", hostname: "your-cdn.com" },
  ],
},
```

**Option B — local files**  
1. Drop images into `public/` (e.g. `public/hero.jpg`, `public/gallery/1.jpg`)  
2. Reference them in config as `/hero.jpg` or `/gallery/1.jpg`

### 3. Google Map embed (no API key)

1. Open Google Maps → search the salon address  
2. **Share** → **Embed a map** → copy the `src` from the iframe  
3. Paste into `location.mapEmbedUrl` in the config

### 4. Colors

Change hex values under `colors` in `salonConfig.ts`. They are applied as CSS variables on the page — no need to edit Tailwind theme files for a normal re-skin.

### 5. Footer credit

```ts
siteCredit: {
  enabled: true,              // false = hide entirely
  businessName: "Your Agency",
  url: "https://your-site.com", // optional; leave "" for plain text
},
```

## Project structure

```
src/
  data/salonConfig.ts     ← edit this per client
  components/             ← UI sections + WhatsAppButton
  app/
    layout.tsx            ← fonts, SEO metadata, theme vars
    page.tsx              ← single-page section order
    globals.css           ← Tailwind + base styles
```

## Deploy to Vercel

### Option A — CLI

```bash
npm i -g vercel
vercel --prod
```

### Option B — GitHub

1. Push this repo to GitHub  
2. Go to [vercel.com/new](https://vercel.com/new)  
3. Import the repo → Deploy (Next.js is detected automatically)

After deploy, set `seo.siteUrl` in the config to your live domain and redeploy so Open Graph URLs resolve correctly.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Notes

- **Primary CTA** everywhere is WhatsApp (hero, header, contact, floating button).  
- The floating green button is fixed bottom-right on all screen sizes.  
- Single-page with anchor nav keeps customization simple for cold-call demos; SEO metadata still comes from the config.
