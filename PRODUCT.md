# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no framework, no build step. Shared design system at `/assets/style.css` + `/assets/main.js`, referenced by absolute path from every page (decided during the first real build — see CLAUDE.md).

## Users

Primary: residents of Yekaterinburg planning custom-made furniture for their home — most commonly triggered by a renovation or moving into a new apartment. They search directly on Yandex ("мебель на заказ екатеринбург" and category-specific variants) rather than browsing retail catalogs. Core categories: шкафы-купе, кухни, гардеробные, прихожие, мебель для ванной, кровати, комоды/тумбы, гостиная.

Secondary (explicitly not the launch focus): small businesses in Yekaterinburg needing commercial furniture — office furniture, reception desks (стойки ресепшн), trade/retail fixtures (торговое оборудование).

## Product Purpose

**Revised 2026-09 — direct-brand positioning, not broker framing.** Astery Group presents to customers as a direct furniture-on-order company: the single accountable brand for the whole order, from measurement to installation. Operationally it still works through a production partnership rather than owning a factory (one confirmed today, specialized in шкафы-купе — see Operating Context), but that is a backend detail, not the customer-facing story. The earlier "we compare 2–3 vetted workshops for you" broker/marketplace framing is retired: the owner judged it reads as low-trust intermediary positioning and hurts competitiveness against direct-brand competitors. Success is still a qualified lead that converts into a completed order.

## Positioning

The differentiator is being the direct, accountable point of contact for the whole order, backed by a real production partnership — not a showroom's markup, and not an anonymous marketplace of workshops. **What stays off-limits** (unchanged from before): fabricated years-in-business, fake reviews, invented production history, or any specific factual claim that isn't true. The honesty commitment in Brand Commitments is about not fabricating *specific false facts* — it was never about foregrounding "we're just an intermediary," and dropping that framing doesn't touch it. The direct-brand copy rewrite (hero, why-us section, production FAQ answer) is done sitewide — see CLAUDE.md. It settled the "мы производим мебель" line as: accountable "we" for the whole order, production happens at a named address (see Evidence on Hand), never a claim of owning the workshop.

## Operating Context

Workflow: customer submits a lead (phone) → free in-home measurement → production via Astery's partner workshop, matched to budget/timeline → delivery/install. Presented to the customer as Astery's own capability, not as "one of several options we found for you."

The business currently has **one confirmed active partner relationship**, specialized in шкафы-купе. Other categories already live on the site (кухни, гардеробные, кровати, мебель для ванной, etc.) do not yet have a confirmed partner workshop behind them — this is an operating gap, not just a content gap, and worth the owner's attention as categories get real traffic. This gap matters more under direct-brand positioning than it did under broker framing: a broker can say "we don't have a match yet," a direct brand can't.

## Capabilities and Constraints

- **Lead form is front-end only, by decision, not oversight.** Submitting shows a success state but sends the data nowhere. A backend (Telegram bot / email / CRM) is explicitly deferred — do not assume one exists, and do not silently wire one in without asking.
- **Registered 2026-09: self-employed (самозанятый, NPD taxpayer).** Резолвес the earlier "no legal entity" tension — a самозанятый can sign a договор оказания услуг, so "цена фиксируется в договоре" is now backed by a real, registered counterparty. Real requisites (see Evidence on Hand) are now live in the footer of every page and in each page's JSON-LD. Do not add ИП/ООО-style requisites (ОГРНИП etc.) the owner hasn't confirmed — самозанятый has no ОГРНИП.
- **No phone calls — Max messenger is the contact channel, by explicit owner decision (2026-09).** The owner does not want to be called. Consequences, already applied sitewide: no `tel:` link anywhere except the footer, where the phone number is plain text (legal disclosure only, not a CTA); every "call us" style CTA (header, mobile nav, hero, lead-form section) is a "Написать в Max" button instead; copy that promised a callback ("перезвоним") was rewritten to promise a Max reply. New pages must follow this — never add a clickable phone CTA, never write copy implying the business will call the customer.
- **No real photos, testimonials, or case studies exist yet.** The homepage hero uses a labeled placeholder block instead of a fabricated "real" project photo — that pattern (honest placeholder, never fake stock/testimonial content) is the model to follow until real partner photos exist.
- Region is Yekaterinburg city first; the content plan (see CLAUDE.md) adds satellite towns and districts later, but only after core category pages have real search positions.
- The site is being built against an already-extensive, validated keyword and competitor research base (see CLAUDE.md — Wordstat/Mutagen data, ~584-page content plan, known competitor list). New pages should be checked against that research, not guessed.

## Brand Commitments

Name: **Astery Group**. Wordmark as already built: "ASTERY." (with trailing period) set in Fraunces. Tone: calm, factual, non-pushy — existing homepage copy explicitly avoids pressure language ("никакого навязывания — вы решаете"). Binding commitment: no fabricated trust signals — no invented years-in-business, no fake reviews, no false production claims. This directly contrasts with patterns found in competitor research and must hold for every future page.

## Evidence on Hand

- Extensive validated Yandex Wordstat + Mutagen keyword research for the Yekaterinburg custom-furniture market, and a full competitor list — documented in `CLAUDE.md`.
- Structural analysis of two direct competitors (e-kupe.ru homepage, kupeural.ru's шкафы-купе catalog page) — used to inform section structure only; visuals and copy on this site are original.
- No real customer photos, testimonials, case studies, or partner-confirmed pricing exist yet. Future work must not fabricate these — use labeled placeholders instead, matching the homepage's existing pattern.
- One confirmed partner workshop (шкафы-купе specialization). Other live category pages are ahead of confirmed supply.
- **Real business requisites (2026-09), live sitewide in the footer and JSON-LD:** Копырин Михаил Евгеньевич, самозанятый (плательщик НПД), ИНН 665805617047. Адрес: 620017, Екатеринбург, ул. Фронтовых Бригад, д. 18. Режим работы: ежедневно 09:00–20:00. Contact channel: Max messenger (owner's profile link is in every page's header/mobile-nav/lead-form section) — not phone. Phone `+7 950 646-09-53` and email `mezdudelom73@gmail.com` are real and live in the footer for legal disclosure; phone is intentionally plain text, not a `tel:` link.

## Product Principles

1. Never fabricate trust signals — no invented years-in-business, no fake testimonials, no claims the business can't back up. Direct, deliberate contrast to observed competitor practice.
2. Price transparency without false precision — calculators and category pages give honest "от" estimates labeled as approximate, never fixed prices for specific products that don't exist yet.
3. Structure and topic coverage may be informed by competitors; wording is always original. A new page's layout, section list, and the questions or angles it addresses can take cues from competitor pages and their content — but text is always written fresh, never translated or lightly reworded from a competitor's page. This is a legal boundary, not a style preference: near-verbatim reuse of another site's copy is a copyright risk for the business, not just an originality nice-to-have.
4. Build against validated demand — new pages and categories are justified by the keyword research already on file, not by guessing what "should" sell.
5. Yekaterinburg-first, residential-first — commercial/B2B furniture stays a secondary track until the primary residential funnel has traction.

## Accessibility & Inclusion

No product-specific requirement established beyond standard web accessibility (semantic HTML, keyboard-operable nav and forms, sufficient contrast) already followed in the current build.
