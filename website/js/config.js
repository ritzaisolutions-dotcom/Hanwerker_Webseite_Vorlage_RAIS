// ============================================================
//  HANDWERKER TEMPLATE — Kundenkonfiguration
//  Alle kundespezifischen Werte hier eintragen.
//  Bilder: logo-client.png, favicon-client.png, hero-video.mp4, ref_*.jpg
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
  heroEyebrow:          "[AUSZEICHNUNG] · [ORT]",
  leistungenKurz:       "[LEISTUNGEN_KURZ]",

  // ── KONTAKT & ADRESSE ──────────────────────────────────────
  strasse:        "[STRASSE_NR]",
  plz:            "[PLZ]",
  ort:            "[ORT]",
  telefon:        "+49[VORWAHL][NUMMER]",
  telefonDisplay: "[TELEFON_DISPLAY]",
  fax:            "+49[VORWAHL][FAX]",
  faxDisplay:     "[FAX_DISPLAY]",
  email:          "[EMAIL@DOMAIN.DE]",

  // ── ONLINE ─────────────────────────────────────────────────
  domain:        "https://www.[DOMAIN].de",
  calcomLink:    "https://cal.com/[CALCOM_LINK]",
  web3formsKey:  "[WEB3FORMS_ACCESS_KEY]",
  pdfSlug:       "kalkulation",

  // ── WHATSAPP ───────────────────────────────────────────────
  // Leer lassen ("") um WhatsApp-Button zu deaktivieren.
  whatsapp:            "",
  whatsappVornachricht: "Hallo, ich interessiere mich für Ihre Leistungen und würde gerne mehr erfahren.",

  // ── TERMINBUCHUNG VARIANTE ─────────────────────────────────
  // "rueckruf" → Telefon + WhatsApp + Rückruf-Formular (mailto) — Demo-Standard
  // "calcom"   → Cal.com Embed hinter Consent-Gate
  // "whatsapp" → Großer WhatsApp-Button
  // "formular" → Terminanfrage-Formular via Web3Forms
  terminVariante: "rueckruf",

  // ── FORMULARE ──────────────────────────────────────────────
  // "mailto" bis Web3Forms-Key vor Go-Live; "web3forms" mit echtem Key
  formularModus: "mailto",

  // ── GOOGLE ─────────────────────────────────────────────────
  googleMapsEmbedUrl:    "[GOOGLE_MAPS_EMBED_URL]",
  googleMapsLink:        "[GOOGLE_MAPS_LINK]",
  googleBewertungsLink:  "[GOOGLE_BEWERTUNGS_URL]",
  googleBewertungAnzahl: "[BEWERTUNGEN_ANZAHL]",
  googleBewertungNote:   "[BEWERTUNGEN_NOTE]",

  // ── ÖFFNUNGSZEITEN ─────────────────────────────────────────
  oeffnungszeiten: {
    moDo: [
      { von: "08:00", bis: "12:00" },
      { von: "13:00", bis: "17:00" }
    ],
    fr: [
      { von: "08:00", bis: "12:00" },
      { von: "13:00", bis: "15:00" }
    ]
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
  referenzenIntro: "[REFERENZEN_INTRO]",

  // ── ÜBER UNS TEXT ──────────────────────────────────────────
  ueberUns: [
    "[ÜBER_UNS_ABSATZ_1]",
    "[ÜBER_UNS_ABSATZ_2]",
    "[ÜBER_UNS_ABSATZ_3]"
  ],

  // ── DOKUMENT-BILDER (Über-uns-Sektion) ─────────────────────
  dokBild1: "",
  dokBild2: "",
  dokBild3: "",

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
  kostenrechnerAktiv: true,

  preise: {
    standard:           18,
    premium:            28,
    xl:                 22,
    altbelagEntfernen:  8,
    abdichtung:         15,
    fussbodenheizung:   12
  },

  calcProjekte: [
    { id: "bath",    label: "[PROJEKTTYP_1]", multi: 1.0  },
    { id: "floor",   label: "[PROJEKTTYP_2]", multi: 0.9  },
    { id: "terrace", label: "[PROJEKTTYP_3]", multi: 1.3  },
    { id: "repair",  label: "[PROJEKTTYP_4]", multi: 1.15 }
  ],
  calcMaterialien: [
    { id: "standard", label: "[MATERIAL_1]", desc: "[MATERIAL_1_DESC]" },
    { id: "premium",  label: "[MATERIAL_2]", desc: "[MATERIAL_2_DESC]" },
    { id: "xl",       label: "[MATERIAL_3]", desc: "[MATERIAL_3_DESC]" }
  ],
  calcExtras: [
    { id: "debris",        label: "[EXTRA_1]", desc: "[EXTRA_1_DESC]" },
    { id: "waterproofing", label: "[EXTRA_2]", desc: "[EXTRA_2_DESC]" },
    { id: "floorHeating",  label: "[EXTRA_3]", desc: "[EXTRA_3_DESC]" }
  ],

  // ── KONTAKTFORMULAR ────────────────────────────────────────
  kontaktformularAktiv: true,

  kontaktAnliegen: [
    { value: "beratung",  label: "Beratung / Angebot anfragen" },
    { value: "projekt",   label: "[ANLIEGEN_2]" },
    { value: "sanierung", label: "[ANLIEGEN_3]" },
    { value: "allgemein", label: "Allgemeine Anfrage" }
  ],

  // ── SOCIAL MEDIA ───────────────────────────────────────────
  facebook:  "",
  instagram: "",

  // ── FARBEN (optional) ──────────────────────────────────────
  colors: {
    primary:      "",
    primaryDark:  "",
    primaryMid:   "",
    primaryLight: "",
    accent:       "",
    accentHover:  "",
    accentLight:  ""
  },

  // ── SEO & SCHEMA.ORG ───────────────────────────────────────
  branche:  "HomeAndConstructionBusiness",
  geoLat:   "[LAT]",
  geoLng:   "[LNG]",

  // ── KAMMER & VERBAND ───────────────────────────────────────
  kammer:      "[KAMMERBEZEICHNUNG], [KAMMERORT]",
  fachverband: "[FACHVERBAND_NAME]",

  // ── DATENSCHUTZ ────────────────────────────────────────────
  bundesland:           "[BUNDESLAND]",
  aufsichtsbehoerde:    "[NAME_DER_AUFSICHTSBEHOERDE]",
  aufsichtsbehoerdeUrl: "[URL_AUFSICHTSBEHOERDE]",

  // ── TEAM & STATS ───────────────────────────────────────────
  jahreErfahrung:    "[JAHRE]+",
  teamGroesse:       "[TEAM_GROESSE]",
  bewertungenAnzahl: "[BEWERTUNGEN_ANZAHL]",

  // ── PARTNER-KARUSSELL ──────────────────────────────────────
  partnerIntro: "[PARTNER_INTRO]",
  partnerBgColor: "var(--secondary-dark, #1c1a14)",
  partner: [
    { name: "[PARTNER_1]", url: "https://[PARTNER_1_DOMAIN].de/", logo: "" },
    { name: "[PARTNER_2]", url: "https://[PARTNER_2_DOMAIN].de/", logo: "" },
    { name: "[PARTNER_3]", url: "", logo: "" }
  ],

  // ── FAQ (Akkordeon neben Kontaktformular, min. 6) ──────────
  faq: [
    {
      frage: "Welche Leistungen bieten Sie in [ORT] an?",
      antwort: "[FAQ_1_ANTWORT]"
    },
    {
      frage: "In welcher Region sind Sie tätig?",
      antwort: "[FAQ_2_ANTWORT]"
    },
    {
      frage: "Wie läuft eine Anfrage ab?",
      antwort: "Sie erreichen uns telefonisch, per E-Mail, über das Kontaktformular oder die Rückruf-Anfrage. Wir besprechen Umfang und Zeitplan in einem unverbindlichen Gespräch."
    },
    {
      frage: "[FAQ_4_FRAGE]",
      antwort: "[FAQ_4_ANTWORT]"
    },
    {
      frage: "[FAQ_5_FRAGE]",
      antwort: "[FAQ_5_ANTWORT]"
    },
    {
      frage: "Erstellen Sie kostenlose Angebote?",
      antwort: "Ja. Nach Ihrer Anfrage klären wir den Umfang und erstellen auf Wunsch ein unverbindliches Angebot — vor Ort oder telefonisch."
    }
  ],

  // ── INTERN ─────────────────────────────────────────────────
  klaroStorageName: "[KUNDE]-consent-v1"
};
