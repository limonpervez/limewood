# Limewood — website (limewood.app)

The official website of **Limewood**, an independent mobile-app studio. This repo is the
**website only** — a static, hand-built site with no framework and no build step. It also hosts
the public **privacy policies** that Limewood's apps and browser extensions point their store
listings at.

> **This is not an app source repo.** The apps themselves (Renewfox, etc.) each live in their own
> separate repositories. No app source code, keystores, or signing credentials belong here — and
> they are not here. See [Scope & security](#scope--security).

- **Live:** https://limewood.app
- **Repo:** https://github.com/limonpervez/limewood (⚠️ **public**)
- **Host:** GitHub Pages (auto-deploys `main`), custom domain via `CNAME` → `limewood.app`
- **Stack:** static HTML5 + CSS3 + a little vanilla JS. No framework, no bundler, no npm.
- **Last updated:** 2026-08-29

---

## Quick start (clone and continue)

```bash
git clone https://github.com/limonpervez/limewood.git
cd limewood
# preview locally over HTTP (NOT file:// — see gotchas)
python3 -m http.server 4173
# open http://localhost:4173
```

To ship a change: edit files → commit → `git push origin main`. GitHub Pages rebuilds in ~30s.
There is nothing to compile.

---

## Directory structure

```
limewood/
├── CNAME                     # "limewood.app" — GitHub Pages custom domain
├── .nojekyll                 # tells Pages to serve files as-is (no Jekyll build)
├── index.html                # Home
├── apps.html                 # All apps (one showcase section per app)
├── about.html                # Team (founder + 17 team cards)
├── contact.html              # Contact (working form + Organization schema/address)
├── privacy.html              # Site-wide privacy policy (also covers Renewfox)
├── terms.html                # Terms of Service
├── disclaimer.html           # Disclaimer
├── sitemap.xml               # SEO sitemap (submit in Google Search Console)
├── robots.txt                # points crawlers at the sitemap
├── favicon.svg / favicon-32.png / apple-touch-icon.png   # lemon mark
│
├── css/
│   ├── colors.css            # design tokens (palette, spacing, radii, shadows, fonts)
│   ├── style.css             # all components
│   └── responsive.css        # breakpoints + reduced-motion
├── js/
│   └── main.js               # header scroll, mobile nav, scroll-reveal, contact form, clean-URL
│
├── renewfox/                 # ── APP DETAIL PAGES (one dir per app) ──
│   ├── index.html            #    /renewfox
│   └── screenshots/          #    real Play Store screenshots (shot-01..07.png)
├── wordsearch-cove/          #    /wordsearch-cove  + privacy.html
├── daily-bible-verse/        #    /daily-bible-verse + privacy.html  (was "Stillwaters")
├── arrow-escape/             #    /arrow-escape     + privacy.html
├── riddle-trail/             #    /riddle-trail     + privacy.html
├── ascend/                   #    /ascend  (Gym Coach) + privacy.html
├── blood-sugar-logbook/      #    /blood-sugar-logbook + privacy/ + screenshots/
│
├── tabbatch/                 # ── EXTENSION privacy hosting (no detail page) ──
│   └── privacy.html          #    TabBatch (Chrome extension)
├── limeshot/
│   └── privacy.html          #    LimeShot (Chrome extension)
│
├── COLOR_PALETTE.md          # palette reference (legacy design doc)
├── TEAM_DATA.md              # team names + photo URLs
├── WEBSITE_BUILD_DOCUMENTATION.md   # original v2 build notes (2026-07-06)
└── README.md                 # ← this file (master doc)
```

Not tracked (local tooling only, git-ignored): `.claude/`, `.impeccable/`, `PRODUCT.md`.

---

## Pages & URLs

Clean URLs (no `.html`) work because GitHub Pages serves `foo.html` at `/foo`, and `foo/index.html`
at `/foo/`. All internal links use the clean form. `js/main.js` also strips `.html` from the
address bar if someone lands on the old form.

### Core pages
| URL | File | Purpose |
|---|---|---|
| `/` | index.html | Home: hero (Renewfox mockup), trust bar, featured + per-app blocks, philosophy, CTA |
| `/apps` | apps.html | One `app-showcase` section per app |
| `/about` | about.html | Mission + founder + team cards |
| `/contact` | contact.html | Working contact form, email, business address, Organization JSON-LD |
| `/privacy` | privacy.html | Site-wide privacy policy (explicitly covers Renewfox) |
| `/terms` | terms.html | Terms of Service |
| `/disclaimer` | disclaimer.html | Disclaimer |

### App detail pages
Each app has a dedicated page at `/<slug>` with: hero (identity, fact chips, store button +
"More details"), feature deep-dive, a "why it's different" story, FAQ, and a download CTA.

| App | Slug / URL | Platform | Status | Store |
|---|---|---|---|---|
| **Renewfox** | `/renewfox` | iOS &amp; Android | **LIVE (Android)** | [Google Play](https://play.google.com/store/apps/details?id=app.renewfox) — `app.renewfox` |
| Word Search Cove | `/wordsearch-cove` | Android | Coming soon | — |
| Daily Bible Verse | `/daily-bible-verse` | Android | Coming soon | — (was "Stillwaters") |
| Arrow Escape | `/arrow-escape` | Android | Coming soon | — |
| Riddle Trail | `/riddle-trail` | Android | Coming soon | — |
| Gym Coach | `/ascend` | Android | Coming soon | — (dir is `ascend`, ex-"ASCEND") |
| Blood Sugar Logbook | `/blood-sugar-logbook` | Android | Coming soon | — (SugarJournal) |

### Per-app privacy policies (used as Play Store / Web Store privacy URLs)
`/<slug>/privacy` for each app that has one, plus two browser extensions that live here for their
privacy hosting only (no detail page): **`/tabbatch/privacy`** and **`/limeshot/privacy`**.

> Renewfox has no `/renewfox/privacy`; its listing uses the site-wide `/privacy`, which names
> Renewfox specifically.

---

## Design system

Tokens live in `css/colors.css`. Match them — don't hard-code new colors.

| Token | Value | Use |
|---|---|---|
| `--lemon-500` | `#F5C518` | primary CTA / brand accent |
| `--lime-500` / `--lime-600` | `#55A630` / `#427F25` | links, secondary accent |
| `--ink-900` | `#131C13` | text, dark buttons |
| `--bg` | `#FDFBF4` | warm cream page background |
| `--surface-dark` | `#16241A` | footer, CTA bands |
| `--font-display` | Plus Jakarta Sans | headings, buttons |
| `--font-body` | Inter | body text |

Fonts load from Google Fonts. Spacing scale `--sp-1..10`, radii `--radius-sm..xl`, shadows
`--shadow-xs..lg`, plus `--shadow-lemon`.

### Key reusable classes
- **Layout:** `.container`, `.section`, `.featured` / `.featured-grid` (2-col), `.page-hero`
- **App cards:** `.app-showcase` (apps.html), `.app-identity` / `.app-tile`, `.spec-grid` /
  `.spec-cell`, `.feature-list` / `.feature-item`, `.badge` (`.badge-soon` / `.badge-live`)
- **Phone mockups:** `.phone` (300px, fixed) → `.phone-screen`; per-app screens are inline-styled
- **Buttons:** `.btn` + `.btn-primary` / `.btn-dark` / `.btn-outline` / `.btn-link`, `.btn-lg`,
  `.is-disabled` (for "coming soon" store buttons — render as a `<span>`, not a link)
- **Detail pages (added Aug 2026):** `.detail-back`, `.fact-row`/`.fact`, `.shots`/`.device`
  (device-framed screenshot scroller), `.deep`/`.deep-item`, `.faq` (details/summary accordion)
- **Motion:** `.reveal` → `.reveal.in` (scroll-in). See gotcha below.

### JavaScript (`js/main.js`)
Sticky-header shadow on scroll · mobile hamburger nav (`aria-expanded`) · active nav link ·
`IntersectionObserver` scroll-reveal · footer year · **contact form** (AJAX to FormSubmit) ·
address-bar `.html` stripping.

---

## Contact form & email

- **Form:** posts JSON to `https://formsubmit.co/ajax/limonpervez@gmail.com` (see `main.js`).
  Has a honeypot field and success/error status UI. **FormSubmit needs a one-time "Activate Form"
  email click** before messages arrive.
- **Domain email:** `hello@limewood.app`. The domain is at **Dynadot**; incoming mail needs an
  Email-Forwarding (or MX) setup there to reach a real inbox. Never commit email/DNS passwords.

---

## SEO

- `sitemap.xml` — all pages; submit as `sitemap.xml` in Google Search Console.
- `robots.txt` — `Allow: /` + points at the sitemap.
- Each detail page has `<title>`, meta description, `<link rel="canonical">`, and Open Graph tags.
- `contact.html` carries an `Organization` JSON-LD block (name, URL, email, address).

When you add or rename a page, **update `sitemap.xml`**.

---

## How to add a new app (the established pattern)

1. **Detail page:** create `<slug>/index.html`. Easiest path is the generator used for the
   Aug-2026 batch — a shared template + per-app content, with the phone mockup sliced by
   line-range from the showcase so it stays in sync. (Generator scripts were kept in the session
   scratchpad, not the repo; reproduce or hand-author following an existing detail page, e.g.
   `arrow-escape/index.html`.)
2. **apps.html:** add an `app-showcase` section with `id="<anchor>"`.
3. **index.html:** add a homepage block (`featured` / `app-showcase`).
4. **Two buttons everywhere:** a store button + a **"More details"** link → `/<slug>`.
   - Shipped app → real store link, `badge-live` "Live on …", store button is a real `<a>`.
   - Unshipped → `badge-soon`, store button is a disabled `<span class="btn ... is-disabled">`.
     **Never fake a store link.**
5. **Privacy:** `<slug>/privacy.html` (Play requires a privacy URL). Pin it to light mode
   (`background:#FDFCF7` + `<meta name="color-scheme" content="light">`) or dark-mode browsers
   render it unreadable.
6. **Footer links** on every base page, **sitemap.xml**, and meta descriptions.

---

## Gotchas (read before editing)

1. **`.reveal` sections are invisible without JS.** They start at `opacity:0` and get `.in` from
   an `IntersectionObserver`. A `file://` snapshot or a headless render shows blank panels — always
   preview over the local HTTP server. On the static detail pages the `.in` class is hard-coded so
   they're visible by default.
2. **A parallel Claude session sometimes edits this same working tree.** Always `git status` and
   `git fetch` / `git pull` **before** committing, and stage specific files (`git add <file>`),
   never blind `git add -A` — it can sweep up another session's in-flight work.
3. **Absolute-positioned mockups escape their phone.** The Daily Bible Verse lock-screen uses
   `position:absolute; inset:0` children; inside `.phone-wrap` (which is `position:relative`) the
   overlay filled the whole column. Fix: give that mockup's `.phone-screen` its own
   `position:relative; height:…` so it's self-contained.
4. **Clean URLs return 301 → 200.** `/renewfox` redirects to `/renewfox/`; that's normal Pages
   behavior, not a broken link.
5. **Don't commit `.claude/`, `.impeccable/`, or `PRODUCT.md`** — local tooling, already ignored.

---

## Scope & security

This repo is a **public, static website**. Keep it that way:

- **No app source code** lives here — each app has its own repository.
- **Never commit secrets to this repo.** It is public, so anything committed (keystores, signing
  passwords, API keys, DNS/email passwords, `.aab`/`.jks` files) would be exposed to the entire
  internet, and a leaked app-signing key can be used to hijack the app on the store. App-signing
  material belongs in that **app's own private repo** (or a secrets manager), never in a website.
- Safe to store here: HTML/CSS/JS, images, public privacy policies, sitemap — nothing private.
