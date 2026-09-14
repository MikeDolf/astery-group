# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

The site for **astery-group.ru** — a lead-generation site for custom-made furniture (мебель на заказ) in Yekaterinburg, Russia. The business model is commission/partner-based: the site generates leads for furniture producers/workshops (the owner already has partner relationships, particularly for built-in/sliding wardrobes), not retail sales of ready-made furniture.

Hosted on GitHub Pages directly from this repo (`MikeDolf/astery-group`), branch `main`, served via the custom domain in `CNAME`. No build step, no framework — static HTML served as-is, same approach as the owner's other site (`MikeDolf/MikeDolf.github.io`).

**Current state: bare scaffold only.** `index.html` is a `noindex` placeholder ("Сайт в разработке") put up so the domain resolves to something while DNS/Pages propagate. No real content has been built yet — everything below is the plan and research to build from, not a description of existing code.

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

**Known placeholder content that must be replaced before real launch:** phone number (`+7 (343) 000-00-00`), email (`info@astery-group.ru`), and the hero visual (currently a labeled placeholder block, not a real project photo) — all clearly fake/placeholder, not real business data.

**Positioning rewrite done (2026-09).** The broker/marketplace framing flagged as stale is fixed sitewide (hero, why-us section, the production FAQ answer, meta/JSON-LD descriptions, footer tagline/copyright on every page). Direct-brand voice now: "we make," "one team," never "we compare workshops for you." Still true and unchanged: no factory-ownership claim, no fabricated facts — see PRODUCT.md Positioning for exactly where that line sits.

## Blog (started, ahead of the phased plan)

The Articles layer from the phased plan (~215 pages, originally last) was pulled forward: `/blog/` is a hub page (`blog/index.html`) plus one folder per post (`blog/<slug>/index.html`), same clean-URL convention as the rest of the site. Chosen as the first 3 posts specifically because they don't depend on real partner project photos (unlike case studies, which stay blocked on the partner) and each ties back into the homepage: a materials guide (ЛДСП/МДФ — also closes the jargon gap a design critique flagged), a measurement how-to, and a kitchen pricing breakdown that reinforces the calculator's own numbers. Each article links back into the homepage's anchors (`/#kalkulyator`, `/#zayavka`) via a mid-article `.article-cta` block rather than duplicating the calculator/lead form on every post.

Article byline is `Organization` (Astery Group), never a fabricated `Person` — matches the no-fabricated-trust-signals commitment in PRODUCT.md. New posts: add to `sitemap.xml`, link from `blog/index.html`'s `.article-list`, and reuse the `.article-hero`/`.article-body`/`.article-cta` classes in `style.css` rather than inlining new ones.
