# CLAUDE.md — Handwerker Website Template (RAIS)

Dieses Repository ist ein **wiederverwendbares Template** für Handwerker-Websites.
Basis-Stack: Vanilla HTML5 / CSS3 / ES6+. Kein Framework. Keine npm-Laufzeit-Abhängigkeiten.

> **Vor jeder Arbeit lesen:** Dieses Dokument definiert Sektionen-Reihenfolge, Hero-Aufbau,
> Design-Regeln und alle Konfigurationspunkte. Nicht raten — hier nachschlagen.

---

## 1. Schnellstart

1. `TEMPLATE-STRUKTUR.md` + `SETUP.md` lesen
2. `website/js/config.js` ausfüllen (alle `[PLACEHOLDER]` ersetzen)
3. Bilder in `website/images/` ablegen (Dateinamen laut SETUP.md Schritt 3)
4. `website/css/variables.css` — Primär- und Akzentfarbe aus Kundenlogo setzen
5. HTML-Platzhalter befüllen: Über-uns, Bewertungen (5×), FAQ-Einträge
6. Vercel: Root Directory = `website`, kein Build Command

---

## 2. Datei-Struktur

```
/
├── CLAUDE.md                        ← Dieses Dokument
├── SETUP.md                         ← Kundenübergabe-Anleitung
├── server.js                        ← Lokaler Preview-Server (Node)
├── package.json
├── .gitignore
└── website/
    ├── index.html                   ← One-Pager (alle Sektionen)
    ├── impressum.html
    ├── datenschutz.html
    ├── referenzen.html
    ├── team.html
    ├── leistungen/
    │   ├── innenarbeiten.html
    │   ├── fassade.html
    │   ├── bodenbelaege.html
    │   └── schimmelbeseitigung.html
    ├── partials/nav-snippet.html
    ├── css/
    │   ├── variables.css            ← Farben — hier anpassen
    │   └── style.css
    ├── js/
    │   ├── config.js                ← Alle kundespezifischen Werte
    │   ├── config-apply.js          ← Befüllt DOM, Meta, Schema.org
    │   └── calc.js                  ← Kostenrechner-Logik
    ├── images/                      ← Alle Bilder (Dateinamen fix)
    └── sitemap.xml
```

---

## 3. Sektionen-Reihenfolge (`index.html`)

**Pflicht — diese Reihenfolge nicht ändern:**

```
1.  <header>              Nav + Leistungen-Dropdown + CTA (#termin)
2.  <section#hero>         Video, zentriertes Logo, Name, Slogan, 2 CTAs
3.  <section#vorher-nachher>  Slider
4.  <section#leistungen>   4 Karten
5.  <section#kostenrechner> optional
6.  <section#warum>       4 USPs
7.  <section#familie>      Über uns
8.  <section#referenzen>   Grid
9.  <section#partner>      Marquee (data-partner-track)
10. <section#bewertungen>  Google-Platzhalter
11. <section#termin>       rueckruf | calcom | whatsapp | formular
12. <section#kontakt>      info | map / faq | form
13. <footer>
```

**Floating Elements (immer sichtbar, position: fixed):**
- WhatsApp-Bubble: rechts unten
- Tel-Bubble: rechts unten (über WhatsApp gestapelt)

---

## 4. Hero-Aufbau (`<section#hero>`)

```
┌─────────────────────────────────────────────────────┐
│  [VIDEO-BACKGROUND — autoplay muted loop playsinline] │
│  [GRAIN-OVERLAY + DARK-VIGNETTE]                      │
│                                                       │
│              [LOGO — zentriert, weiß/hell]            │
│                                                       │
│         [H1 — 1 Zeile, max 5 Wörter, zentriert]      │
│      [Eyebrow darüber: Meisterbetrieb · Ort · Jahr]   │
│                                                       │
│            [CTA-BUTTON — zentriert, 1 Stück]          │
│                                                       │
│                  [Scroll-Indicator]                   │
└─────────────────────────────────────────────────────┘
```

**Pflichtregeln Hero:**
- Video: `autoplay muted loop playsinline poster="images/hero-poster.webp"`
- Fallback: CSS Radial-Gradient wenn Video nicht lädt (kein JS nötig)
- Logo: `<img src="images/logo-client.webp" alt="[FIRMENNAME]">` — weiße/helle Version
- H1: Kommt aus `config.js → heroH1` — z.B. *"Handwerk mit Haltung."*
- Eyebrow: `data-config="heroEyebrow"` — z.B. *"Meisterbetrieb · Koblenz · seit 1997"*
- **NUR EIN CTA:** Text aus `config.js → heroCta` — href="#kontakt"
- Keine weiteren Buttons, Links oder Ablenkungen im Hero
- Vignette: `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.8) 100%)`

---

## 5. Header (`<header>`)

```
[LOGO links]    [Nav-Links Mitte]    [📞 Tel | 💬 WhatsApp | [CTA-Button] rechts]
```

**Pflichtregeln Header:**
- Sticky (`position: sticky; top: 0; z-index: 100`)
- Hintergrund: `rgba(--bg-dark, 0.92)` + `backdrop-filter: blur(12px)`
- CTA-Button: Akzentfarbe, Text aus `config.js → navCta` — z.B. *"Angebot anfragen"*
- Tel-Link: `href="tel:[telefon]"` — Icon + Nummer (ab 768px sichtbar)
- WhatsApp-Link: `href="https://wa.me/[telefon]"` — Icon only auf Mobile, Icon+Text auf Desktop
- Nav-Links: max. 4 Punkte (Leistungen / Referenzen / Über uns / Kontakt)
- Hamburger-Menü auf Mobile (`< 768px`)

---

## 6. Trust Strip (`<section#trust>`)

4 Kennzahlen nebeneinander, volle Breite, dunkler Hintergrund oder Akzentfarbe:

| Feld | config.js Key |
|------|--------------|
| Jahre Erfahrung | `jahreErfahrung` |
| Google-Bewertungen (Note) | `googleBewertungNote` |
| Abgeschlossene Projekte | `projekte` |
| Meisterbetrieb-Badge | statisch: "Meisterbetrieb" |

Auf Mobile: 2×2 Grid.

---

## 7. Partner-Karussell (`<section#partner>`)

- **Hintergrundfarbe:** `var(--primary)` oder `var(--accent)` — farbig, nicht neutral
- Endlos-Marquee-Effekt (CSS `animation: marquee` — kein JS)
- Jeder Partner: Logo-Bild ODER Text-Karte mit Link (`target="_blank" rel="noopener noreferrer"`)
- Partner ohne Link: kein `<a>`-Tag, nur `<div>`
- Auf Mobile: gleicher Marquee, kleinere Logos

**config.js Struktur:**
```js
partner: [
  { name: "Brillux",     url: "https://brillux.de",    logo: "images/partner/brillux.webp" },
  { name: "Firmenname",  url: "",                       logo: "" },  // kein Link → kein <a>
]
```

---

## 8. Kontakt + FAQ (`<section#kontakt>`)

**Layout (CSS Grid):**
```
Desktop:  info | map
          faq  | form
Mobile:   info → map → faq → form
```

FAQ: `CLIENT.faq[]` → `[data-faq-list]` als `<details>` (config-apply `renderFaq()`).

**Formular:** Web3Forms-Action; Demo: `formularModus: "mailto"` bis Key gesetzt (`main.js`).
- Felder: Vorname, Nachname, Telefon, E-Mail, Anfrageart (Select), Nachricht, DSGVO-Checkbox
- Honeypot: `<input type="text" name="website" style="display:none">`
- Access Key: `data-config="web3formsKey"` (wird von config-apply.js gesetzt)

**FAQ:** Akkordeon, mindestens 6 Einträge, aus `config.js → faq[]`
```js
faq: [
  { frage: "Wie lange dauert eine Fassadensanierung?", antwort: "..." },
]
```

---

## 9. Floating Buttons (position: fixed)

```css
/* Stack rechts unten */
.float-whatsapp { bottom: 24px; right: 24px; }
.float-tel      { bottom: 88px; right: 24px; }
```

- WhatsApp: grüner Button, `href="https://wa.me/[telefon]?text=[vorausgefüllter Text]"`
- Tel: Primärfarbe, `href="tel:[telefon]"`
- Beide: Rund (border-radius: 50%), 56×56px, Box-Shadow
- `aria-label` Pflicht für Accessibility

---

## 10. Konfiguration (`website/js/config.js`)

**Neue Felder gegenüber alter Version:**

| Feld | Zweck |
|------|-------|
| `heroH1` | H1-Text im Hero (max. 5 Wörter) |
| `heroCta` | CTA-Button-Text im Hero |
| `navCta` | CTA-Button-Text im Header |
| `whatsappText` | Vorausgefüllter WhatsApp-Nachrichtentext (URL-encoded) |
| `projekte` | Anzahl abgeschlossene Projekte (Trust Strip) |
| `partner[]` | Array mit name, url, logo pro Partner |
| `faq[]` | Array mit frage + antwort pro FAQ-Eintrag |
| `partnerBgColor` | CSS-Farbe für Partner-Sektionshintergrund (Default: var(--primary)) |

---

## 11. Design-Regeln (Luxuriös)

```css
/* Typografie */
--font-display: 'Cormorant Garamond', Georgia, serif;   /* Headlines */
--font-body:    'Jost', system-ui, sans-serif;           /* UI, Body */

/* Abstände — großzügig */
--section-padding: clamp(80px, 10vw, 140px) 20px;

/* Schatten */
--shadow-card: 0 4px 32px rgba(0,0,0,0.12);
--shadow-hover: 0 12px 48px rgba(0,0,0,0.20);
```

- Karten: Hover = `translateY(-4px)` + stärkerer Shadow
- Buttons: immer `letter-spacing: 2px; text-transform: uppercase; font-size: 12px`
- Sektionen: abwechselnd heller / dunkler Hintergrund (nie zweimal gleich hintereinander)
- Gold/Akzent: nie als Flächenfarbe, nur für Borders, Highlights, aktive Zustände
- Bilder: immer `loading="lazy"` + `width` + `height` Attribute + WebP mit JPG-Fallback

---

## 12. Mobile-First Breakpoints

```css
/* Base = 375px Mobile */
@media (min-width: 640px)  { /* Large Mobile  */ }
@media (min-width: 768px)  { /* Tablet        */ }
@media (min-width: 1024px) { /* Desktop       */ }
@media (min-width: 1280px) { /* Wide Desktop  */ }
```

**Tap-Targets:** min. 44×44px auf Mobile.
**Font-Size:** min. 16px auf Mobile (verhindert iOS-Zoom).
**Kein horizontaler Scroll** auf keiner Breite.

---

## 13. SEO-Pflichtregeln

- Genau 1× `<h1>` pro Seite (im Hero, aus `config.js`)
- Heading-Hierarchie h1 → h2 → h3, keine Ebenen überspringen
- Alle `<img>`: `alt`, `width`, `height`, `loading="lazy"` (außer Hero-Poster + LCP-Bild)
- Meta-Title: 50–60 Zeichen, Keyword + Stadt
- Meta-Description: 150–160 Zeichen, CTA enthalten
- `<link rel="canonical">` im `<head>`
- Schema.org `HomeAndConstructionBusiness` JSON-LD im `<head>` (via config-apply.js)
- `sitemap.xml` aktuell halten

---

## 14. Qualitäts-Check vor Kunden-Demo

```powershell
# 1. Butz/Vorlagen-Leaks prüfen (Pflicht — Gate A)
rg -i "butz|römerberg|fliesen-butz|fliesenmeister-butz" website --glob "*.{html,js,css,xml}"

# 2. Offene Placeholder prüfen
rg "\[PLACEHOLDER\]|\[ÜBER_UNS\]|\[BEWERTUNG_" website --glob "*.{html,js}"

# 3. Fehlende alt-Attribute
rg "<img(?![^>]*alt=)" website --glob "*.html"
```

**Alle drei Checks müssen 0 Treffer liefern vor Demo.**

---

## 15. Was NIE ins Template-Repo

- `PLAN.md` (internes RAIS-Migrationsdokument → gehört in `sop-webseiten-bau/`)
- Kunden-spezifische Bilder (echte Fotos des jeweiligen Kunden)
- Hardcodierte Preise eines echten Kunden in `calc.js`
- `package.json` mit Kundenname (`name` muss `"handwerker-website-template"` sein)
- Logs-Ordner (`logs/` ist in `.gitignore`)
