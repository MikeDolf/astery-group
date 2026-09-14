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

1. **Category layer (~113 pages)** — 12 clusters (шкафы, кухни, кровати, столы, прихожие, гардеробные, ванная, детская, гостиная, диваны, хранение, балкон), each a hub page plus subcategory pages by type/configuration/room. **Build this first** — geo and ЖК pages are worthless until category hubs are ranking.
2. **Geo layer (~158 pages)** — top categories × Yekaterinburg districts (25) and satellite towns (11). Only after category hubs have real positions.
3. **ЖК layer (~80 pages)** — top categories × named residential complexes (жилые комплексы), pitched at people who just moved into a new-build and want furniture matching their unit's known layout.
4. **Commercial/secondary layer (~18 pages)** — торговое оборудование (open competition, 463/mo) and стойка ресепшн (open, no federal competitors, 292/mo) are the strongest secondary bets; офисная мебель and мебель для кафе are validated but harder (entrenched competitors).
5. **Articles (~215)** — cases/portfolio (needs real project photos from the partner — production-constrained, not writing-constrained), materials/fasteners, style guides, sizing/measurement guides, price guides, comparisons.

Pacing discussed with the owner: slower, quality-first for the foundational category layer, then 20+/week is reasonable once into the templated geo/ЖК layers.

## Known competitors (for gap-checking new pages against)

Giant: ekb.bestmebelshop.ru. Major на-заказ specialists: kupi-kupe.ru, na-zakaz-mebel.com, mebelzakaz-ekb.ru, mebel-zakaz-ekaterinburg.ru, kupeural.ru, td-komandor.ru, ekbkupe.ru, e-kupe.ru. Kitchen specialists: lovekuhnya.ru, marya.ru, kukhni-na-zakaz-ekaterinburg.ru, kuhnya-ekb.ru. Commercial: ekb.express-office.ru (growing, #1 on "офисная мебель"), ekb-torg.ru, torgstyle-ekb.ru.

## Not yet decided

No page has been built yet, so no CSS/markup convention is established for this repo. The sibling site (`MikeDolf.github.io`) inlines a full `<style>` block per page with no shared CSS file — given this project will run to hundreds of pages, a shared stylesheet is probably worth doing differently here, but that's an open call for whoever builds the first real page, not a decision already made.
