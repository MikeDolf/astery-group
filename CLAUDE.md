# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

The site for **astery-group.ru** — a lead-generation site for custom-made furniture (мебель на заказ) in Yekaterinburg, Russia. Presented to customers as a direct furniture-on-order brand (see PRODUCT.md Positioning) — production runs through a partner workshop behind the scenes (confirmed today for шкафы-купе), but that's not the customer-facing story. Operated by a registered самозанятый (self-employed, NPD taxpayer) — real business requisites are live in the footer of every page; see PRODUCT.md Evidence on Hand.

Hosted on GitHub Pages directly from this repo (`MikeDolf/astery-group`), branch `main`, served via the custom domain in `CNAME`. No build step, no framework — static HTML served as-is, same approach as the owner's other site (`MikeDolf/MikeDolf.github.io`). DNS/HTTPS confirmed working 2026-09.

**Current state: live, 13 pages.** Homepage, all 8 category pages from the homepage cat-grid, and a 3-post blog are built and shipped — not a scaffold. Contact channel is Max messenger, not phone — see "No phone calls" in PRODUCT.md Capabilities and Constraints before adding any contact CTA.

## Content strategy — validated, don't re-derive

This comes from an extensive Mutagen (mutagen.ru) + live Yandex Wordstat research pass (region: Свердловская область / Yekaterinburg). Re-running this research from scratch would be wasteful — treat these as settled findings.

**Primary focus: residential/consumer furniture on-order.** Commercial/office furniture (офисная мебель, торговое оборудование, стойки ресепшн) is a validated but secondary track — build it only after the primary track has traction.

**Search behavior pattern:** people search `предмет + "на заказ" + город` (e.g. "шкаф на заказ екатеринбург"). Material, finish, style, and audience-targeted phrasing (массив дерева, лофт, «для новостройки», «под ключ», «с дизайн-проектом») showed **~0 search volume** in live Wordstat across ~20 tested variants — that's copy/content *inside* a page, never a reason to create a separate landing page.

**City-suffix trap:** for smaller/niche categories, appending "екатеринбург" to an otherwise-real query can zero it out in Wordstat (e.g. "стенка на заказ" = 39/mo, "стенка на заказ екатеринбург" = 0). Always check the query both ways before concluding there's no demand.

**Mutagen's static index understates real demand 3–10x** versus live Wordstat — validate any Mutagen number against a live Wordstat pull before sizing a page/section. Examples: кровать на заказ екатеринбург 21→153, стол на заказ екатеринбург 12→67, диван на заказ в екатеринбурге 17→47.

**Top validated demand (live Wordstat, показов/мес, Свердловская область):**
| Query | Volume | Role |
|---|---|---|
| мебель на заказ екатеринбург | 802 | homepage/hub |
| шкаф на заказ екатеринбург | 729 | cluster hub |
| кухни на заказ в екатеринбурге | 599 | cluster hub (fragmented competition — softer entry than shkafy) |
| шкаф купе на заказ екатеринбург | 310 | subcategory — but see competition warning below |
| кровать на заказ екатеринбург | 153 | cluster hub |
| мебель для ванной / тумба под раковину на заказ | ~35 + ~25 | genuine underserved gap — few competitors bother |
| стенка на заказ (no city) | 39 | subcategory |
| комод / стол / гардеробная / прихожая на заказ | 24–72 each | subcategories |

**Competition warning:** шкафы-купе на заказ is the single most saturated sub-vertical found — 12+ dedicated Yekaterinburg competitor sites plus ekb.bestmebelshop.ru (traffic ~7300, dominant in "по индивидуальным размерам" framing). The existing partner relationship there is a fulfillment advantage, not an SEO one — don't expect easy organic ranking on шкафы-купе terms. Кухни and the ванная/тумба cluster are comparatively easier entry points.

## Planned site structure (~584 pages, phased)

Full plan with exact page lists, geo/ЖК breakdowns, and article topics was published as an artifact during planning — ask the user for the link if it's needed again rather than re-deriving it. Shape in brief:

1. **Category layer (~113 pages)** — 12 clusters (шкафы, кухни, кровати, столы, прихожие, гардеробные, ванная, детская, гостиная, диваны, хранение, балкон), each a hub page plus subcategory pages by type/configuration/room. **Build this first** — geo and ЖК pages are worthless until category hubs are ranking. **Hub pages for 8 clusters are live** (see "Category layer" section below) — столы, детская, диваны, хранение, балкон still have no page at all; the deeper subcategory-by-type pages under the 8 live hubs are also still ~113-page-plan future work, not done just because the hub exists.
2. **Geo layer (~158 pages)** — top categories × Yekaterinburg districts (25) and satellite towns (11). Only after category hubs have real positions.
3. **ЖК layer (~80 pages)** — top categories × named residential complexes (жилые комплексы), pitched at people who just moved into a new-build and want furniture matching their unit's known layout.
4. **Commercial/secondary layer (~18 pages)** — торговое оборудование (open competition, 463/mo) and стойка ресепшн (open, no federal competitors, 292/mo) are the strongest secondary bets; офисная мебель and мебель для кафе are validated but harder (entrenched competitors).
5. **Articles (~215)** — cases/portfolio (needs real project photos from the partner — production-constrained, not writing-constrained), materials/fasteners, style guides, sizing/measurement guides, price guides, comparisons.

Pacing discussed with the owner: slower, quality-first for the foundational category layer, then 20+/week is reasonable once into the templated geo/ЖК layers.

## Known competitors (for gap-checking new pages against)

Giant: ekb.bestmebelshop.ru. Major на-заказ specialists: kupi-kupe.ru, na-zakaz-mebel.com, mebelzakaz-ekb.ru, mebel-zakaz-ekaterinburg.ru, kupeural.ru, td-komandor.ru, ekbkupe.ru, e-kupe.ru. Kitchen specialists: lovekuhnya.ru, marya.ru, kukhni-na-zakaz-ekaterinburg.ru, kuhnya-ekb.ru. Commercial: ekb.express-office.ru (growing, #1 on "офисная мебель"), ekb-torg.ru, torgstyle-ekb.ru.

## Architecture (decided, first page built)

Unlike the sibling site (`MikeDolf.github.io`, which inlines CSS per page), this project uses a **shared design system**: `/assets/style.css` and `/assets/main.js`, referenced from every page with absolute paths (`/assets/style.css`). Given this project is planned to run to hundreds of pages, per-page-duplicated CSS was judged not worth repeating here — add new pages against the existing tokens/classes in `style.css` rather than inlining new ones.

Design tokens (CSS custom properties in `:root` of `style.css`): near-white cool-gray background (`--bg`), graphite/charcoal brand accent (`--accent`, `--accent-dark` is pure black), brass gold for CTAs (`--gold`). Type pairing: Fraunces (display/headings) + Manrope (body/UI) + IBM Plex Mono (numbers, prices, eyebrows), loaded from Google Fonts. **Revised 2026-09**: the original warm-stone + teal-green palette was replaced after the owner reviewed 4 palette directions (shown as real hero mockups, not swatches) and picked this one — every text/background pair re-verified against WCAG AA before shipping. Since this is a shared token file, any new page automatically follows this palette; don't reintroduce teal or warm-cream tones.

**Homepage (`index.html`) is built** as the "мебель на заказ екатеринбург" hub page (structure informed by e-kupe.ru and kupeural.ru's category-page pattern, but the visual design and copy are original — no elements were copied). Sections: hero → category grid (all 8 categories link to their own real pages now) → price calculator (client-side, ballpark estimates only — clearly labeled as approximate, no fabricated fixed SKU prices) → process steps → trust/differentiators → FAQ → lead form (client-side demo only, no backend — shows a success state, doesn't send anywhere yet) → footer.

## Category layer (all 8 homepage categories shipped, ahead of the phased plan)

Every category on the homepage cat-grid now has its own real page — the Phase 1 category layer pulled forward, same as the blog. Structure informed by a 13-competitor structural survey (Wordstat/competitor research, see chat history — not re-derivable from files here):

- `/shkaf-kupe/`, `/vstroennye-shkafy/`, `/kuhni/`, `/garderobnye/`, `/prihozhie/`, `/mebel-dlya-vannoy/` — full template: breadcrumb → hero (eyebrow/H1/lead/trust-row) → subcategory cards (descriptive only, no fake product grid) → calculator (same shared component, defaults to that page's own category) → category-specific advantages → SEO text (cross-links to the relevant blog posts and, where relevant, sibling category pages) → category FAQ → lead form (duplicated per page rather than linking back to the homepage, since each is a landing page in its own right).
- `/krovati-komody-tumby/`, `/gostinaya/` — same template minus the calculator section: `main.js`'s `CATEGORIES` object has no rate data for these two, and PRODUCT.md bans inventing pricing that isn't grounded in real research. These end in a direct lead-form CTA instead, matching how they already behaved on the homepage before they had pages.

Deliberately no product grid with photos/fixed prices per model on any of them, unlike every competitor surveyed — PRODUCT.md bans fabricating a catalog that doesn't exist; the calculator (where one exists) is the honest substitute.

The lead-form category `<select>` (`#leadCategory`) is the same 9 options on every page site-wide (all 8 categories + «Другое») — keep new pages' selects in sync with this list rather than inventing per-page subsets. New category pages: follow the template above, add to `sitemap.xml`, and point every page's nav/footer "category name" link at the new page.

**Deliberately honest, not copied from competitors:** the trust/differentiator copy avoids fabricated claims competitors use (false "N years in business," false "own production," fake reviews) because this is a real business about to go live.

**Resolved (2026-09):** phone and email placeholders are replaced with real data sitewide (footer + JSON-LD) — see PRODUCT.md Evidence on Hand. **Resolved (2026-09):** the homepage hero placeholder box is replaced with a full-width looping background video (`assets/hero-bg.mp4` + `assets/hero-poster.jpg`, H.264/AAC-stripped, ~2.8MB, 1280×720, 10s loop) — see "Hero background video" below. Category pages still have no visual, matching their existing text-only pattern — not extended there yet.

**Positioning rewrite done (2026-09).** The broker/marketplace framing flagged as stale is fixed sitewide (hero, why-us section, the production FAQ answer, meta/JSON-LD descriptions, footer tagline/copyright on every page). Direct-brand voice now: "we make," "one team," never "we compare workshops for you." Still true and unchanged: no factory-ownership claim, no fabricated facts — see PRODUCT.md Positioning for exactly where that line sits.

## Hero background video

The homepage hero (`.hero` in `index.html`) is a full-bleed dark section: `<video class="hero-video">` (autoplay/muted/loop/playsinline, `poster="/assets/hero-poster.jpg"`) behind a `.hero-video-overlay` dark gradient, with `.hero-content` (text/CTAs/trust-row) laid over it in light-on-dark styling. `.hero-visual`/`.hero-grid` (the old two-column placeholder layout) are gone — homepage-only classes, never used elsewhere, safe to keep removing/repurposing if the hero changes again.

Current video (`assets/hero-bg.mp4`) is AI-generated (Veo, via the owner's own Gemini prompt) — a 10s, 1280×720, H.264/yuv420p loop of a graphite-toned apartment corridor with built-in storage, matching the site's palette. Audio track was stripped (`ffmpeg -c:v copy -an -movflags +faststart`) since it's muted/decorative only; `-movflags +faststart` keeps it web-streamable. Has a small AI-provenance watermark (sparkle icon, bottom-right) baked into the frame from the generation tool — not fully hidden by the overlay, known and accepted, not a bug.

To replace: drop a new file at `assets/hero-bg.mp4` (keep it H.264/AAC or H.264-video-only for universal browser support — VP9/AV1 are not safe defaults here), regenerate the poster with `ffmpeg -i assets/hero-bg.mp4 -vf "select=eq(n\,0)" -vframes 1 -q:v 3 assets/hero-poster.jpg`, and verify locally with a Range-supporting static server (`http-server`, not Python's `http.server` — it doesn't serve HTTP Range requests, which breaks `<video>` playback testing, though production GitHub Pages handles Range fine).

## Blog (18 posts live, ahead of the phased plan)

The Articles layer from the phased plan (~215 pages, originally last) was pulled forward: `/blog/` is a hub page (`blog/index.html`) plus one folder per post (`blog/<slug>/index.html`), same clean-URL convention as the rest of the site. Each article links back into the homepage's anchors (`/#kalkulyator`, `/#zayavka`) via a mid-article `.article-cta` block rather than duplicating the calculator/lead form on every post.

**Content-plan progress (2026-09): 18 of ~215 articles written, 197 remain.** Topics deliberately built out kitchen/bathroom/bed clusters first per the content plan's own warning that шкафы-купе is the most saturated sub-vertical (12+ competitors) — see CLAUDE.md's "Content strategy" section above. Two of the plan's 11 article-type buckets are currently blocked, not merely unstarted: **кейсы и портфолио** (40 planned) needs real partner project photos, and **обзоры и отзывы** (10 planned) needs real customer reviews — PRODUCT.md bans fabricating either. A planned "Сколько стоит кровать на заказ" pricing article was dropped mid-plan for the same reason: `main.js`'s `CATEGORIES` has no rate for beds, so a price figure would have been invented; it was replaced with a storage-comparison piece (ящики vs. подъёмный механизм) that needs no price claim. Check `main.js`'s `CATEGORIES` object before writing any pricing article — only шкаф, встроенный шкаф, кухня, гардеробная, прихожая, and ванная have real rates.

Article byline is `Organization` (Astery Group), never a fabricated `Person` — matches the no-fabricated-trust-signals commitment in PRODUCT.md. New posts: add to `sitemap.xml`, link from `blog/index.html`'s `.article-list`, and reuse the `.article-hero`/`.article-body`/`.article-cta` classes in `style.css` rather than inlining new ones.

**On-page SEO checklist (2026-09).** `on-page-seo.md` at repo root is the owner-supplied 15-category checklist every new page (article or category) is written against — read it before generating a page, not just for blog posts. Two of its items are intentionally NOT followed here; the file itself documents why (no `tel:` click-to-call, no fabricated author bio/testimonials — both conflict with explicit PRODUCT.md decisions).

The first 3 posts were retrofitted to the checklist as its first real pass: each now has `<main id="main">`/`<article>` semantic wrapping, a real breadcrumb trail (`.crumb-trail`, both visible HTML and `BreadcrumbList` JSON-LD) replacing the old single "← Блог" back-link, a 5-6 question `FAQPage`-schema'd FAQ section (reusing the homepage's `.faq-item`/`.faq-q`/`.faq-a` accordion component), a skip-to-content link (`.skip-link`, first focusable element in `<body>`), a visible "Автор: Astery Group" byline, 3+ contextual internal links per post (to relevant category pages and sibling articles, not just the calculator anchor), and og:image/twitter:card meta pointing at a generated branded card (`assets/og/<slug>.webp`, 1200×630 — a designed text/logo card via the `og-card-template.html` pattern, not a fabricated product photo, consistent with the no-fake-imagery rule). External-authority links (checklist §8) are still open — this session's network policy blocks general web access, so no source could be verified before citing it; add these once a working reference is confirmed rather than guessing a GOST number or URL.

**Not yet extended to the 8 category pages or done sitewide:** the skip-link + `<main>` landmark, `BreadcrumbList` schema, and this same page-generation checklist apply there too — treat as a known gap, not a decision to skip them permanently. An `/o-nas/` (about) and `/kontakty/` (contact) page, called for by checklist §10, don't exist yet either.
