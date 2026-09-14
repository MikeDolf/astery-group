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

Astery Group is a lead-generation / brokerage site — it does not manufacture furniture itself. It matches a customer's custom-furniture request to one of several vetted local workshops (mastерские) in Yekaterinburg, coordinates the measurement and quote, and earns a commission from the connection. Success is a qualified phone lead that converts into a completed workshop job.

## Positioning

The honest, defensible differentiator — validated against direct competitor research (e-kupe.ru, kupeural.ru) — is comparison and curation: Astery brings 2–3 matched workshop options to the customer instead of being a single shop with one price and one queue, without the overhead of a retail showroom. This is deliberately **not** "own production since [year]" or "N years in business" — those are the exact unverifiable claims found on competitor sites that this project must not replicate.

## Operating Context

Workflow: customer submits a lead (phone) → free in-home measurement → Astery presents 2–3 workshop options matched to budget/timeline → customer picks → workshop manufactures → delivery/install.

The business currently has **one confirmed active partner relationship**, specialized in шкафы-купе. Other categories already live on the site (кухни, гардеробные, кровати, мебель для ванной, etc.) do not yet have a confirmed partner workshop behind them — this is an operating gap, not just a content gap, and worth the owner's attention as categories get real traffic.

## Capabilities and Constraints

- **Lead form is front-end only, by decision, not oversight.** Submitting shows a success state but sends the data nowhere. A backend (Telegram bot / email / CRM) is explicitly deferred — do not assume one exists, and do not silently wire one in without asking.
- **No legal entity is registered yet** (confirmed 2026-09). Do not add ИНН/ОГРН or other legal requisites to the footer or anywhere else. Note: the current homepage copy already promises "цена фиксируется в договоре" (price fixed in a contract) — a formal договор implies a registered counterparty, so this is a soft tension the owner should resolve before real launch. Flagged here, not silently rewritten.
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

## Product Principles

1. Never fabricate trust signals — no invented years-in-business, no fake testimonials, no claims the business can't back up. Direct, deliberate contrast to observed competitor practice.
2. Price transparency without false precision — calculators and category pages give honest "от" estimates labeled as approximate, never fixed prices for specific products that don't exist yet.
3. Structure and topic coverage may be informed by competitors; wording is always original. A new page's layout, section list, and the questions or angles it addresses can take cues from competitor pages and their content — but text is always written fresh, never translated or lightly reworded from a competitor's page. This is a legal boundary, not a style preference: near-verbatim reuse of another site's copy is a copyright risk for the business, not just an originality nice-to-have.
4. Build against validated demand — new pages and categories are justified by the keyword research already on file, not by guessing what "should" sell.
5. Yekaterinburg-first, residential-first — commercial/B2B furniture stays a secondary track until the primary residential funnel has traction.

## Accessibility & Inclusion

No product-specific requirement established beyond standard web accessibility (semantic HTML, keyboard-operable nav and forms, sufficient contrast) already followed in the current build.
