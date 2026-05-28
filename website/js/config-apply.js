(() => {
  'use strict';

  if (typeof CLIENT === 'undefined') {
    console.warn('[Template] config.js fehlt oder CLIENT ist nicht definiert.');
    return;
  }

  const set = (selector, value, attr) => {
    if (!value || value.startsWith('[')) return; // Placeholder noch nicht ausgefüllt
    document.querySelectorAll(selector).forEach(el => {
      if (attr) el.setAttribute(attr, value);
      else el.textContent = value;
    });
  };

  const init = () => {
    // ── 1. DOCUMENT TITLE ──────────────────────────────────
    const pageTitle = document.querySelector('title');
    if (pageTitle && CLIENT.name && !CLIENT.name.startsWith('[')) {
      pageTitle.textContent = pageTitle.textContent
        .replace(/\[HANDWERKSBEZEICHNUNG\]/g, CLIENT.handwerksbezeichnung)
        .replace(/\[ORT\]/g, CLIENT.ort)
        .replace(/\[FIRMENNAME\]/g, CLIENT.name)
        .replace(/\[UNTERNEHMENSTYP\]/g, CLIENT.unternehmenstyp);
    }

    // ── 2. META TAGS ───────────────────────────────────────
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = metaDesc.content
        .replace(/\[FIRMENNAME\]/g, CLIENT.name)
        .replace(/\[ORT\]/g, CLIENT.ort)
        .replace(/\[HANDWERKSBEZEICHNUNG\]/g, CLIENT.handwerksbezeichnung);
    }
    const setMeta = (selector, value) => {
      if (!value || value.startsWith('[')) return;
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', value);
    };
    setMeta('meta[property="og:title"]',        CLIENT.name);
    setMeta('meta[property="og:site_name"]',     CLIENT.name);
    setMeta('meta[property="og:url"]',           CLIENT.domain + '/');
    setMeta('meta[property="og:image"]',         CLIENT.domain + '/images/og-image.jpg');
    setMeta('meta[name="twitter:title"]',        CLIENT.name);
    setMeta('meta[name="twitter:image"]',        CLIENT.domain + '/images/og-image.jpg');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && CLIENT.domain && !CLIENT.domain.startsWith('[')) {
      canonical.href = CLIENT.domain + '/';
    }

    // ── 3. data-config → textContent ──────────────────────
    document.querySelectorAll('[data-config]').forEach(el => {
      const key = el.dataset.config;
      const val = key.split('.').reduce((o, k) => o?.[k], CLIENT);
      if (val !== undefined && val !== null && !String(val).startsWith('[')) {
        el.textContent = val;
      }
    });

    // ── 4. data-config-href → href ──────────────────────
    document.querySelectorAll('[data-config-href]').forEach(el => {
      const key = el.dataset.configHref;
      let val = '';
      switch (key) {
        case 'tel':           val = `tel:${CLIENT.telefon}`; break;
        case 'mailto':        val = `mailto:${CLIENT.email}`; break;
        case 'calcom':        val = CLIENT.calcomLink; break;
        case 'facebook':      val = CLIENT.facebook; break;
        case 'instagram':     val = CLIENT.instagram; break;
        case 'googleBewertung': val = CLIENT.googleBewertungsLink; break;
      }
      if (val && !val.includes('[')) el.href = val;
    });

    // ── 5. data-config-alt → alt attribute ────────────────
    document.querySelectorAll('[data-config-alt]').forEach(el => {
      const val = `${CLIENT.name} ${CLIENT.unternehmenstyp}`;
      if (!val.includes('[')) el.alt = val;
    });

    // ── 6. NAV WORDMARK ────────────────────────────────────
    set('.nav__wordmark-name',    CLIENT.nameKurz || CLIENT.name.split(' ')[0]);
    set('.footer__wordmark-name', CLIENT.nameKurz || CLIENT.name.split(' ')[0]);

    // ── 7. SOCIAL LINKS ─────────────────────────────────────
    if (!CLIENT.facebook) {
      document.querySelectorAll('a[data-config-href="facebook"]').forEach(el => {
        el.closest('div, li')?.style.setProperty('display', 'none');
      });
    }
    if (!CLIENT.instagram) {
      document.querySelectorAll('a[data-config-href="instagram"]').forEach(el => {
        el.closest('div, li')?.style.setProperty('display', 'none');
      });
    }

    // ── 8. WEB3FORMS ACCESS KEYS ─────────────────────────
    if (CLIENT.web3formsKey && !CLIENT.web3formsKey.startsWith('[')) {
      document.querySelectorAll('input[name="access_key"]').forEach(el => {
        el.value = CLIENT.web3formsKey;
      });
    }

    // ── 9. KLARO STORAGE NAME ─────────────────────────────
    if (window.klaroConfig && CLIENT.klaroStorageName) {
      window.klaroConfig.storageName = CLIENT.klaroStorageName;
    }

    // ── 10. GOOGLE MAPS EMBED ─────────────────────────────
    const mapContainer = document.getElementById('realMapContainer');
    if (mapContainer && CLIENT.googleMapsEmbedUrl && !CLIENT.googleMapsEmbedUrl.startsWith('[')) {
      mapContainer.dataset.mapsUrl = CLIENT.googleMapsEmbedUrl;
    }

    // ── 11. KONTAKT & FOOTER ÖFFNUNGSZEITEN ──────────────
    const oz = CLIENT.oeffnungszeiten;
    set('[data-config="oeffMoDoBis"]', `${oz.moDoVon} – ${oz.moDoBis} Uhr`);
    set('[data-config="oeffFrBis"]',   `${oz.frVon} – ${oz.frBis} Uhr`);

    // ── 12. TERMIN FALLBACK ÖFFNUNGSZEITEN TEXT ──────────
    document.querySelectorAll('[data-config="oeffZeitenKurz"]').forEach(el => {
      el.textContent = `Mo–Do ${oz.moDoVon}–${oz.moDoBis} Uhr, Fr ${oz.frVon}–${oz.frBis} Uhr`;
    });

    // ── 13. FOOTER COPYRIGHT ──────────────────────────────
    document.querySelectorAll('[data-config="copyright"]').forEach(el => {
      el.textContent = `© ${new Date().getFullYear()} ${CLIENT.name}, ${CLIENT.ort}`;
    });

    // ── 14. SCHEMA.ORG JSON-LD ────────────────────────────
    const existingLd = document.querySelector('script[type="application/ld+json"]');
    if (existingLd && CLIENT.name && !CLIENT.name.startsWith('[')) {
      const schema = {
        "@context": "https://schema.org",
        "@type": CLIENT.branche,
        "name": CLIENT.name,
        "telephone": CLIENT.telefon,
        "email": CLIENT.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CLIENT.strasse,
          "postalCode": CLIENT.plz,
          "addressLocality": CLIENT.ort,
          "addressCountry": "DE"
        },
        "url": CLIENT.domain + '/',
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"],
            "opens": CLIENT.oeffnungszeiten.moDoVon,
            "closes": CLIENT.oeffnungszeiten.moDoBis
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Friday",
            "opens": CLIENT.oeffnungszeiten.frVon,
            "closes": CLIENT.oeffnungszeiten.frBis
          }
        ]
      };
      if (CLIENT.geoLat && !CLIENT.geoLat.startsWith('[')) {
        schema.geo = { "@type": "GeoCoordinates", "latitude": CLIENT.geoLat, "longitude": CLIENT.geoLng };
      }
      existingLd.textContent = JSON.stringify(schema, null, 2);
    }

    // ── 15. CALC: Preise aus CLIENT.preise ─────────────────
    // Beschreibungstexte der Materialwahl-Buttons aktualisieren
    const priceSpans = {
      'standard': document.querySelector('[data-field="materialClass"][data-value="standard"] .calc-choice__desc'),
      'premium':  document.querySelector('[data-field="materialClass"][data-value="premium"] .calc-choice__desc'),
      'xl':       document.querySelector('[data-field="materialClass"][data-value="xl"] .calc-choice__desc')
    };
    CLIENT.calcMaterialien.forEach(mat => {
      if (priceSpans[mat.id] && !mat.desc.startsWith('[')) {
        priceSpans[mat.id].textContent = mat.desc;
      }
    });
    // Extras
    const extraSpans = {
      'debris':        document.querySelector('[data-extra="debris"] .calc-choice__desc'),
      'waterproofing': document.querySelector('[data-extra="waterproofing"] .calc-choice__desc'),
      'floorHeating':  document.querySelector('[data-extra="floorHeating"] .calc-choice__desc')
    };
    CLIENT.calcExtras.forEach(ex => {
      if (extraSpans[ex.id] && !ex.desc.startsWith('[')) {
        extraSpans[ex.id].textContent = ex.desc;
      }
    });
    // Titel der Calc-Buttons
    const projTitleSpans = {
      'bath':    document.querySelector('[data-value="bath"] .calc-choice__title'),
      'floor':   document.querySelector('[data-value="floor"] .calc-choice__title'),
      'terrace': document.querySelector('[data-value="terrace"] .calc-choice__title'),
      'repair':  document.querySelector('[data-value="repair"] .calc-choice__title')
    };
    CLIENT.calcProjekte.forEach(proj => {
      if (projTitleSpans[proj.id] && !proj.label.startsWith('[')) {
        projTitleSpans[proj.id].textContent = proj.label;
      }
    });
    const matTitleSpans = {
      'standard': document.querySelector('[data-value="standard"] .calc-choice__title'),
      'premium':  document.querySelector('[data-value="premium"] .calc-choice__title'),
      'xl':       document.querySelector('[data-value="xl"] .calc-choice__title')
    };
    CLIENT.calcMaterialien.forEach(mat => {
      if (matTitleSpans[mat.id] && !mat.label.startsWith('[')) {
        matTitleSpans[mat.id].textContent = mat.label;
      }
    });
    const extraTitleSpans = {
      'debris':        document.querySelector('[data-extra="debris"] .calc-choice__title'),
      'waterproofing': document.querySelector('[data-extra="waterproofing"] .calc-choice__title'),
      'floorHeating':  document.querySelector('[data-extra="floorHeating"] .calc-choice__title')
    };
    CLIENT.calcExtras.forEach(ex => {
      if (extraTitleSpans[ex.id] && !ex.label.startsWith('[')) {
        extraTitleSpans[ex.id].textContent = ex.label;
      }
    });

    // ── 16. CALLBACK FEHLERMELDUNG (enthält Telefonnummer) ─
    const callbackErrEl = document.getElementById('calcCallbackResult');
    if (callbackErrEl) {
      // Wird dynamisch durch calc.js gesetzt — kein Eingriff nötig
      // Telefonnummer im Fehlertext wird durch calc.js aus CLIENT gezogen (s. dort)
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
