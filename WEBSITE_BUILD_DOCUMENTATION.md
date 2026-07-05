# Limewood Agency Website — Build Documentation

**Last major update:** 2026-07-06 (v2 — full professional redesign)
**Status:** Production ready, verified in local preview
**Tech Stack:** Static HTML5, CSS3, Vanilla JavaScript (no frameworks, no build step)

---

## What this is

The official website for **Limewood** (limewood.app) — an independent app studio.
First app showcased: **Renewfox** (Android subscription tracker).

## v2 Redesign (2026-07-06)

Complete professional overhaul replacing the v1 emoji-heavy design:

- **Refined design system** — muted, sophisticated lemon/lime/wood palette (see `css/colors.css` design tokens)
- **Professional typography** — Google Fonts: Plus Jakarta Sans (headings) + Inter (body)
- **Inline SVG icons everywhere** (feather-style strokes) — no emoji icons in UI chrome
- **SVG lemon logo mark** in header/footer (inline, no image file)
- **CSS phone mockups** — realistic Renewfox app UI rendered in pure CSS (hero + apps page)
- **Sticky blur header** with scroll shadow + **mobile hamburger nav**
- **Scroll-reveal animations** via IntersectionObserver (`.reveal` class)
- **Dark CTA bands**, floating chips, trust bar, stat counters
- **3 new legal pages:** privacy.html, terms.html, disclaimer.html
- **No inline `<style>` blocks** — all styling consolidated in the 3 CSS files
- Contact form now opens the user's mail client with a pre-filled message (works on static hosting, no backend)

## File structure

```
.claude/website/
├── index.html        Home — hero + phone mockup, trust bar, featured Renewfox, values, CTA
├── apps.html         Apps — Renewfox showcase card, spec grid, roadmap "coming soon" cards
├── about.html        Team — mission cards, founder card + 17 team cards (18 total)
├── contact.html      Contact — info cards + mailto-powered form
├── privacy.html      Privacy Policy (last updated Jul 6, 2026)
├── terms.html        Terms of Service (last updated Jul 6, 2026)
├── disclaimer.html   Disclaimer (last updated Jul 6, 2026)
├── css/
│   ├── colors.css    Design tokens: palette, spacing, radii, shadows, fonts, motion
│   ├── style.css     All components (header, hero, phone, cards, forms, legal, footer)
│   └── responsive.css  Breakpoints: 1024px / 860px (mobile nav) / 560px + reduced-motion
└── js/
    └── main.js       Header scroll state, hamburger nav, active link, scroll reveal,
                      footer year, contact form → mailto
```

## Design tokens (quick reference)

| Token | Value | Use |
|---|---|---|
| `--lemon-500` | #F5C518 | Primary buttons, accents |
| `--lime-500` / `--lime-600` | #55A630 / #427F25 | Links, secondary accents |
| `--ink-900` | #131C13 | Text, dark buttons |
| `--bg` | #FDFBF4 | Page background (warm cream) |
| `--surface-dark` | #16241A | Footer, CTA bands, founder card |
| `--font-display` | Plus Jakarta Sans | Headings, buttons |
| `--font-body` | Inter | Body text |

**Button classes:** `.btn-primary` (lemon), `.btn-dark` (ink), `.btn-outline`, `.btn-link`, size modifier `.btn-lg`.

## Shared page skeleton

Every page uses the same header (sticky, `.nav-toggle` hamburger, `.nav-cta` button) and
the same 4-column footer (Studio / Apps / Legal / brand+tagline) with legal links.
When adding a page: copy header+footer from any existing page, set the correct
`.nav-link.active`, link the 3 CSS files + Google Fonts + `js/main.js`.

## Legal pages

- All three use the `.legal-wrap` layout (max-width 760px, `.legal-meta` date chip, `.legal-callout` highlight box).
- Content is tailored to Limewood's actual model: **no data collection, on-device only, no accounts, Google Play Billing for Pro**.
- **Update "Last updated" dates** when editing content.
- Contact emails referenced: hello@limewood.app, support@limewood.app.

## Local preview

`F:\Claude\.claude\launch.json` has a `limewood-website` config:
`npx -y serve -l 4173 F:/Claude/renewfox/.claude/website`
Verified 2026-07-06: all pages 200, styles applied, 18 team cards render, phone mockups OK.

## Deployment (unchanged)

1. **GitHub Pages / Netlify / Vercel** — drop the `website/` folder, no build step.
2. Point limewood.app DNS at the host (domain not yet registered as of Jul 2026).
3. Before launch: replace "coming soon" Play button with the real store URL; consider
   self-hosting team photos (currently hotlinked from prinil.com); optionally swap the
   mailto contact form for Formspree/Basin.

## Team data

18 members, names + photo URLs in `TEAM_DATA.md`. Founder: Limon Pervez (featured card,
dark background, "Founder & Lead Developer" label — the only card with a role shown).
