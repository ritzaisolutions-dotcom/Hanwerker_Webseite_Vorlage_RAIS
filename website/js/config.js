// ============================================================
//  HANDWERKER TEMPLATE — Kundenkonfiguration
//  Alle kundespezifischen Werte hier eintragen.
//  Bilder: logo-client.*, favicon-client.png, hero-poster.*
// ============================================================
const CLIENT = {
  // ── FIRMA ──────────────────────────────────────────────────
  name:                 "[FIRMENNAME]",
  nameKurz:             "[NAMEKURZ]",
  unternehmenstyp:      "[UNTERNEHMENSTYP]",
  handwerksbezeichnung: "[HANDWERKSBEZEICHNUNG]",
  berufsbezeichnung:    "[BERUFSBEZEICHNUNG]",
  gruendungsjahr:       "[GRUENDUNGSJAHR]",
  slogan:               "[SLOGAN]",
  heroEyebrow:          "[AUSZEICHNUNG] · [ORT] · seit [GRUENDUNGSJAHR]",
  leistungenKurz:       "[LEISTUNGEN_KURZ]",

  // ── KONTAKT & ADRESSE ──────────────────────────────────────
  strasse:        "[STRASSE_NR]",
  plz:            "[PLZ]",
  ort:            "[ORT]",
  telefon:        "+49[VORWAHL][NUMMER]",
  telefonDisplay: "+49 (0)[VORWAHL] [NUMMER]",
  fax:            "+49[VORWAHL][FAX]",
  faxDisplay:     "+49 (0)[VORWAHL] [FAX]",
  email:          "[EMAIL@DOMAIN.DE]",

  // ── ONLINE ─────────────────────────────────────────────────
  domain:        "https://www.[DOMAIN].de",
  calcomLink:    "https://cal.com/[CALCOM_LINK]",
  web3formsKey:  "[WEB3FORMS_ACCESS_KEY]",
  pdfSlug:       "kalkulation",

  // ── WHATSAPP ───────────────────────────────────────────────
  // Leer lassen ("") um WhatsApp-Button zu deaktivieren.
  // Format: internationale Nummer ohne Leerzeichen, z. B. "+4917612345678"
  whatsapp:            "",
  whatsappVornachricht: "Hallo, ich interessiere mich für Ihre Leistungen und würde gerne mehr erfahren.",

  // ── TERMINBUCHUNG VARIANTE ─────────────────────────────────
  // "calcom"   → Cal.com Embed hinter Consent-Gate (Standard)
  // "whatsapp" → Großer WhatsApp-Button (kein externer Embed-Dienst)
  // "formular" → Einfaches Terminanfrage-Formular via Web3Forms
  terminVariante: "calcom",

  // ── GOOGLE ─────────────────────────────────────────────────
  googleMapsEmbedUrl:    "[GOOGLE_MAPS_EMBED_URL]",
  googleBewertungsLink:  "[GOOGLE_BEWERTUNGS_URL]",
  googleBewertungAnzahl: "[ANZAHL]",
  googleBewertungNote:   "[NOTE]",

  // ── ÖFFNUNGSZEITEN ─────────────────────────────────────────
  oeffnungszeiten: {
    moDoVon: "08:00",
    moDoBis: "17:00",
    frVon:   "08:00",
    frBis:   "13:00"
  },

  // ── LEISTUNGEN (Startseite, 4 Karten) ──────────────────────
  leistung1Titel: "[LEISTUNG_1_TITEL]",
  leistung1Text:  "[LEISTUNG_1_TEXT]",
  leistung2Titel: "[LEISTUNG_2_TITEL]",
  leistung2Text:  "[LEISTUNG_2_TEXT]",
  leistung3Titel: "[LEISTUNG_3_TITEL]",
  leistung3Text:  "[LEISTUNG_3_TEXT]",
  leistung4Titel: "[LEISTUNG_4_TITEL]",
  leistung4Text:  "[LEISTUNG_4_TEXT]",

  // ── WARUM-WIR (Startseite, 4 Punkte) ───────────────────────
  warumLabel:  "Warum wir",
  warum1Titel: "[USP_1_TITEL]",
  warum1Text:  "[USP_1_TEXT]",
  warum2Titel: "[USP_2_TITEL]",
  warum2Text:  "[USP_2_TEXT]",
  warum3Titel: "[USP_3_TITEL]",
  warum3Text:  "[USP_3_TEXT]",
  warum4Titel: "[USP_4_TITEL]",
  warum4Text:  "[USP_4_TEXT]",

  // ── REFERENZEN ─────────────────────────────────────────────
  referenzenIntro: "Auswahl abgeschlossener Projekte aus [ORT] und Umgebung.",

  // ── ÜBER UNS TEXT ──────────────────────────────────────────
  // Array mit je einem Absatz als String. config-apply.js rendert
  // diese als <p>-Elemente in die .familie-body Section.
  // Empfohlen: 3–4 Absätze. HTML-Tags sind erlaubt (z.B. <strong>).
  ueberUns: [
    "[ÜBER_UNS_ABSATZ_1]",
    "[ÜBER_UNS_ABSATZ_2]",
    "[ÜBER_UNS_ABSATZ_3]"
  ],

  // ── DOKUMENT-BILDER (Über-uns-Sektion) ─────────────────────
  // Dateiname ohne Extension (Dateien: images/<name>.jpg + images/<name>.webp).
  // Leer lassen ("") um ein Dokument-Bild auszublenden.
  dokBild1: "meisterbrief",    // Meisterbrief
  dokBild2: "meisterbrief2",   // Zweites Zertifikat
  dokBild3: "urkunde",         // Urkunde / Auszeichnung

  // ── TEAM (team.html, bis zu 3 Mitglieder) ──────────────────
  team1Name:  "[TEAM_1_NAME]",
  team1Rolle: "[TEAM_1_ROLLE]",
  team1Init:  "A",
  team2Name:  "[TEAM_2_NAME]",
  team2Rolle: "[TEAM_2_ROLLE]",
  team2Init:  "B",
  team3Name:  "[TEAM_3_NAME]",
  team3Rolle: "[TEAM_3_ROLLE]",
  team3Init:  "C",

  // ── KOSTENRECHNER ──────────────────────────────────────────
  // Auf false setzen um den Kostenrechner komplett auszublenden
  // (inkl. Navigation). Sinnvoll für Betriebe ohne Flächenpreise.
  kostenrechnerAktiv: true,

  // ── KOSTENRECHNER PREISE (€/m²) ────────────────────────────
  preise: {
    standard:           135,
    premium:            240,
    xl:                 330,
    altbelagEntfernen:  45,
    abdichtung:         60,
    fussbodenheizung:   28
  },

  calcProjekte: [
    { id: "bath",    label: "[PROJEKTTYP_1]", multi: 1.3  },
    { id: "floor",   label: "[PROJEKTTYP_2]", multi: 1.0  },
    { id: "terrace", label: "[PROJEKTTYP_3]", multi: 1.15 },
    { id: "repair",  label: "[PROJEKTTYP_4]", multi: 0.9  }
  ],
  calcMaterialien: [
    { id: "standard", label: "[MATERIAL_1]", desc: "[MATERIAL_1_DESC] ca. 135 €/m²" },
    { id: "premium",  label: "[MATERIAL_2]", desc: "[MATERIAL_2_DESC] ca. 240 €/m²" },
    { id: "xl",       label: "[MATERIAL_3]", desc: "[MATERIAL_3_DESC] ca. 330 €/m²" }
  ],
  calcExtras: [
    { id: "debris",        label: "[EXTRA_1]", desc: "+ ca. 45 €/m²"  },
    { id: "waterproofing", label: "[EXTRA_2]", desc: "+ ca. 60 €/m²"  },
    { id: "floorHeating",  label: "[EXTRA_3]", desc: "+ ca. 28 €/m²"  }
  ],

  // ── KONTAKTFORMULAR ────────────────────────────────────────
  // Auf false setzen um das Formular auszublenden (nur Adresse/Tel/WA).
  kontaktformularAktiv: true,

  // Anliegen-Optionen für das Kontaktformular-Dropdown.
  // config-apply.js ersetzt die hardcodierten HTML-Optionen damit.
  kontaktAnliegen: [
    { value: "beratung",    label: "Beratung / Angebot anfragen"  },
    { value: "reparatur",   label: "Reparatur / Sanierung"        },
    { value: "allgemein",   label: "Allgemeine Anfrage"           }
  ],

  // ── SOCIAL MEDIA ───────────────────────────────────────────
  facebook:  "",
  instagram: "",

  // ── FARBEN ─────────────────────────────────────────────────
  // Überschreibt CSS Custom Properties aus variables.css.
  // Alle Felder sind optional — nur ausgefüllte Werte werden angewendet.
  colors: {
    primary:      "",   // z. B. "#1a2b4c"
    primaryDark:  "",   // z. B. "#0d1526"
    primaryMid:   "",   // z. B. "#243a61"
    primaryLight: "",   // z. B. "#3d5580"
    accent:       "",   // z. B. "#2980b9"
    accentHover:  "",   // z. B. "#2471a3"
    accentLight:  ""    // z. B. "#d6eaf8"
  },

  // ── SEO & SCHEMA.ORG ───────────────────────────────────────
  branche:  "HomeAndConstructionBusiness",
  geoLat:   "[LAT]",
  geoLng:   "[LNG]",

  // ── KAMMER & VERBAND (für Impressum) ───────────────────────
  kammer:      "[KAMMERBEZEICHNUNG], [KAMMERORT]",
  fachverband: "[FACHVERBAND_NAME]",

  // ── DATENSCHUTZ ────────────────────────────────────────────
  // Für die Datenschutzerklärung: zuständige Aufsichtsbehörde
  bundesland:          "[BUNDESLAND]",
  aufsichtsbehoerde:   "[NAME_DER_AUFSICHTSBEHOERDE]",
  aufsichtsbehoerdeUrl:"[URL_AUFSICHTSBEHOERDE]",

  // ── TEAM & STATS ───────────────────────────────────────────
  jahreErfahrung:    "[JAHRE]+",
  teamGroesse:       "[ANZAHL]",
  bewertungenAnzahl: "[ANZAHL]",

  // ── INTERN ─────────────────────────────────────────────────
  klaroStorageName: "handwerker-consent-v1"
};
