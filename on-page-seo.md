# On-page SEO — do these on every page

15 categories · 80+ items · the complete on-page SEO spec for blog posts and service pages. Technical SEO (sitemaps, robots.txt, Core Web Vitals) is covered separately.

Every page-generation task reads this before generating or editing a page.

## 1. Head & Metadata — what Google indexes first
- Title tag — 50–60 chars, primary keyword near the start.
- Meta description — 150–160 chars, keyword + benefit + soft CTA.
- Canonical URL set to prevent duplicates.
- Open Graph — og:title, og:description, og:image (1200×630), og:url, og:type.
- Twitter Card — summary_large_image, title, description, image.
- Language attribute on `<html>` (e.g. lang="ru").
- Viewport meta tag for responsive rendering.
- Favicon + apple-touch-icon.
- Charset meta — `<meta charset="utf-8">`.

## 2. URL structure — clean, readable, keyword-forward
- Short slug — under 60 chars.
- Primary keyword in the slug.
- Hyphens only — never underscores.
- Lowercase only.
- No stop words unless necessary.
- Logical hierarchy — `/section/slug/`.

## 3. Headings — structure for skimmers & bots
- Exactly one H1 per page, contains primary keyword.
- Logical H2 → H3 hierarchy — never skip levels.
- H2s use supporting keywords + questions from the cluster.
- No keyword stuffing — write naturally.

## 4. Copy & body — answer the query, fast
- Primary keyword in the first 100 words.
- Direct answer to the query in the first paragraph.
- Length matches SERP average (within 20% of top-3).
- Short paragraphs (1–4 sentences).
- Readability — 8th–10th grade level.
- Active voice preferred.
- Bold key phrases — sparingly.
- Bullets & numbered lists where appropriate.

## 5. FAQ section — every blog post
- 4–8 questions from real "люди также спрашивают" / search-suggest data.
- Direct answers — 2–4 sentences each.
- FAQ schema (JSON-LD) applied.

## 6. Images — every image is a ranking signal
- Alt text describes image + keyword where natural.
- Filenames — descriptive, hyphens.
- WebP, compressed under 200 KB.
- Width/height attributes specified — prevents CLS.
- Lazy loading (`loading="lazy"`) for below-fold.
- Responsive srcset where needed.
- Featured/hero image for social sharing.

## 7. Internal links — pass authority across the site
- 3–5 internal links per post.
- Link to related blog posts & relevant service/category pages.
- Descriptive anchor text — never "click here" or "read more".
- Contextually placed in body copy.
- Breadcrumbs on every page.

## 8. External links — cite authority, don't hoard it
- 2–3 external links to authoritative sources (.gov, major industry).
- Relevant to the topic.
- Open in new tab with `rel="noopener"`.
- `rel="nofollow"` for sponsored links.

## 9. Schema markup — JSON-LD in `<head>`
- Article schema on blog posts.
- LocalBusiness schema — most specific subtype.
- Service schema on service/category pages.
- FAQ schema wherever a FAQ section exists.
- BreadcrumbList schema on every page.
- Organization schema site-wide.
- Author/Person schema for bylines.

## 10. E-E-A-T signals — Experience · Expertise · Authority · Trust
- Author byline with name on every blog post.
- Author bio with credentials.
- Link to author's dedicated page.
- Published date displayed.
- "Last updated" date when refreshed.
- Real stories, numbers, opinions.
- Cite authoritative sources.
- About page with full company credentials.
- Contact page — real address, phone, hours.

## 11. Accessibility — a11y signals = SEO signals
- Semantic HTML5 — `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`.
- ARIA labels on interactive elements where needed.
- Color contrast meets WCAG AA (4.5:1 body text).
- Focus indicators visible on interactive elements.
- Alt text on all images (empty `alt=""` for decorative).
- Descriptive link text.
- Skip-to-content link for keyboard users.

## 12. Mobile & responsive — mobile-first indexing
- Responsive layout.
- Touch targets minimum 48×48 px.
- Body font minimum 16 px.
- No horizontal scroll at any viewport.
- No intrusive interstitials.

## 13. Social preview — shareable card
- OG image optimized — 1200×630, under 1 MB.
- Twitter Card image — 1200×600.
- Compelling og:description — different from meta if valuable.

## 14. Conversion elements — capture the lead (service pages only)
- Primary CTA above the fold.
- Phone number with click-to-call (`tel:`).
- Multiple CTA placements throughout the page.
- Trust signals — reviews, ratings, licenses, years.
- Testimonials with names (photos where possible).
- Service-area coverage listed.
- Business hours displayed.
- Physical address with embedded map.

## 15. Long-form content — 1500+ word posts
- Table of contents with anchor links at the top.
- Jump links for each H2.
- Back-to-top button.

---

**Astery Group overrides — PRODUCT.md wins on conflict.** Two items above are intentionally NOT applied as written on this site:
- §14 "phone number with click-to-call" — the owner's explicit decision is no phone CTAs anywhere; Max messenger is the contact channel (see PRODUCT.md "No phone calls"). Don't add `tel:` links to satisfy this checklist item.
- §10 "author bio" / §14 "testimonials with names" — no real testimonials or a named author persona exist yet; PRODUCT.md bans fabricating either. Byline stays `Organization` until real evidence exists.
