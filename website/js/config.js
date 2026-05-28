// ============================================================
//  HANDWERKER TEMPLATE — Kundenkonfiguration
//  Alle kundespezifischen Werte hier eintragen.
//  Danach KEINE weiteren Dateien anfassen (außer Bilder).
// ============================================================
const CLIENT = {
  // ── FIRMA ──────────────────────────────────────────────────
  name:                 "[FIRMENNAME]",           // z.B. "Peter Butz Fliesenfachbetrieb"
  nameKurz:             "[NAMEKURZ]",             // z.B. "Butz" (erscheint groß im Hero)
  unternehmenstyp:      "[UNTERNEHMENSTYP]",      // z.B. "Fliesenfachbetrieb"
  handwerksbezeichnung: "[HANDWERKSBEZEICHNUNG]", // z.B. "Fliesenleger"
  berufsbezeichnung:    "[BERUFSBEZEICHNUNG]",    // z.B. "Fliesenlegermeister"
  gruendungsjahr:       "[GRUENDUNGSJAHR]",       // z.B. "1997"
  slogan:               "[SLOGAN]",               // z.B. "Von der Planung bis zur Übergabe. Alles aus einer Hand."
  heroEyebrow:          "[AUSZEICHNUNG] · [ORT] · seit [GRUENDUNGSJAHR]",

  // ── KONTAKT & ADRESSE ──────────────────────────────────────
  strasse:        "[STRASSE_NR]",
  plz:            "[PLZ]",
  ort:            "[ORT]",
  telefon:        "+49[VORWAHL][NUMMER]",         // für href="tel:", z.B. "+4962328311"
  telefonDisplay: "+49 (0)[VORWAHL] [NUMMER]",    // Anzeigeformat
  fax:            "+49[VORWAHL][FAX]",
  faxDisplay:     "+49 (0)[VORWAHL] [FAX]",
  email:          "[EMAIL@DOMAIN.DE]",

  // ── ONLINE ─────────────────────────────────────────────────
  domain:        "https://www.[DOMAIN].de",       // ohne trailing slash
  calcomLink:    "https://cal.com/[CALCOM_LINK]",
  web3formsKey:  "[WEB3FORMS_ACCESS_KEY]",        // https://web3forms.com → Access Key

  // ── GOOGLE ─────────────────────────────────────────────────
  googleMapsEmbedUrl:    "[GOOGLE_MAPS_EMBED_URL]",
  googleBewertungsLink:  "[GOOGLE_BEWERTUNGS_URL]",
  googleBewertungAnzahl: "[ANZAHL]",              // z.B. "38"
  googleBewertungNote:   "[NOTE]",                // z.B. "5,0"

  // ── ÖFFNUNGSZEITEN ─────────────────────────────────────────
  oeffnungszeiten: {
    moDoVon: "08:00",
    moDoBis: "17:00",
    frVon:   "08:00",
    frBis:   "13:00"
  },

  // ── KOSTENRECHNER PREISE (€/m²) ────────────────────────────
  preise: {
    standard:           135,
    premium:            240,
    xl:                 330,
    altbelagEntfernen:  45,
    abdichtung:         60,
    fussbodenheizung:   28
  },

  // ── KOSTENRECHNER LABELS ───────────────────────────────────
  // Passen die Projekttypen/Materialien nicht zur Branche, hier anpassen.
  calcProjekte: [
    { id: "bath",    label: "[PROJEKTTYP_1]", multi: 1.3 },
    { id: "floor",   label: "[PROJEKTTYP_2]", multi: 1.0 },
    { id: "terrace", label: "[PROJEKTTYP_3]", multi: 1.15 },
    { id: "repair",  label: "[PROJEKTTYP_4]", multi: 0.9 }
  ],
  calcMaterialien: [
    { id: "standard", label: "[MATERIAL_1]", desc: "[MATERIAL_1_DESC] ca. 135 €/m²" },
    { id: "premium",  label: "[MATERIAL_2]", desc: "[MATERIAL_2_DESC] ca. 240 €/m²" },
    { id: "xl",       label: "[MATERIAL_3]", desc: "[MATERIAL_3_DESC] ca. 330 €/m²" }
  ],
  calcExtras: [
    { id: "debris",        label: "[EXTRA_1]", desc: "+ ca. 45 €/m²" },
    { id: "waterproofing", label: "[EXTRA_2]", desc: "+ ca. 60 €/m²" },
    { id: "floorHeating",  label: "[EXTRA_3]", desc: "+ ca. 28 €/m²" }
  ],

  // ── SOCIAL MEDIA ───────────────────────────────────────────
  facebook:  "",   // leer lassen wenn nicht vorhanden
  instagram: "",

  // ── SEO & SCHEMA.ORG ───────────────────────────────────────
  branche:  "HomeAndConstructionBusiness",
  geoLat:   "[LAT]",
  geoLng:   "[LNG]",

  // ── KAMMER & VERBAND (für Impressum) ───────────────────────
  kammer:    "[KAMMERBEZEICHNUNG], [KAMMERORT]",
  fachverband: "[FACHVERBAND_NAME]",

  // ── TEAM & STATS ───────────────────────────────────────────
  jahreErfahrung:    "[JAHRE]+",
  teamGroesse:       "[ANZAHL]",
  bewertungenAnzahl: "[ANZAHL]",

  // ── INTERN ─────────────────────────────────────────────────
  klaroStorageName: "handwerker-consent-v1"
};
