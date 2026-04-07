/* Edition Nordstern — language switcher (EN / DE) */
(function () {
  'use strict';

  var T = {
    en: {
      'nav.home': 'Home',
      'nav.news': 'News',
      'nav.catalog': 'Catalog',
      'nav.composers': 'Composers',
      'nav.contact': 'Contact',
      'nav.links': 'Links',
      'footer.updated': 'Last updated:',
      'home.featured': 'Featured Publications',
      'card.eif.title': 'The Jealous Ones (Die Eifers\u00fcchtigen)',
      'card.eif.desc': 'Opera in three acts, WoO 54. World premiere by the Opernkollektiv Z\u00fcrich \u2014 CD on Naxos.',
      'card.q2.title': 'String Quartet No. 2, A major, op. 90',
      'card.q2.desc': 'Critical edition from the composer\u2019s autograph score. Score and parts available.',
      'card.samson.desc': 'Musical drama. World premiere in Weimar 2022, 170 years after its creation. Recorded by Swiss-Fonogramm, 2023.',
      'card.sym3.title': 'Symphony No. 3 \u201cIn the Forest\u201d',
      'card.sym3.desc': 'First publication since 1872, based on the composer\u2019s autograph. Raff\u2019s most celebrated orchestral work.',
      'card.scherzo.desc': 'Two entirely different versions from 1842 and 1882 published together for the first time.',
      'card.wv.title': 'Raff Werkverzeichnis',
      'card.wv.desc': 'The first complete catalogue of Raff\u2019s music since 1888, by Raff specialist Mark Thomas. 313 pages, hardcover.',
      'card.q5.title': 'String Quartet No. 5, G major, op. 138',
      'card.q5.desc': 'First publication since 1869. Score and parts available.',
      'card.son4.desc': 'New edition of the \u201cChromatic\u201d sonata op.\u00a0129, combined with the first edition of the unpublished Duo WoO\u00a055.',
      'catalog.search': 'Search titles, order numbers\u2026',
      'catalog.all-composers': 'All composers',
      'catalog.order-p': 'All orders national and international: please write e-mail to Edition Nordstern (<a href="mailto:raff@edno.de">raff@edno.de</a>)',
      'catalog.shop-p': 'For PDF downloads please visit our web shop: <a href="https://edno-shop.myshopify.com" target="_blank" rel="noopener">edno-shop.myshopify.com</a>',
      'catalog.payment': 'Payment via PayPal accepted.',
      'catalog.pdf-btn': 'Download complete catalog (PDF)',
      'catalog.loading': 'Loading catalog\u2026',
      'catalog.noresults': 'No publications matched your search. Try different keywords.',
      'composers.heading': 'Composers published by Edition Nordstern',
      'composers.intro': 'Here you can find some high level information on the lifes and works of the composers published by Edition Nordstern.',
      'contact.run': 'The company is run by Volker Tosta and is supported by a group of international collaborators.',
      'contact.orders': 'You can place orders via phone, or e-mail. You will receive a confirmation via e-mail and a request for payment via Paypal.',
      'links.videos': 'Videos',
      'links.raff': 'The Joachim Raff home page (serves also as web site of the Raff Society, Wiesbaden). This site is one of the most excellent sites dedicated to a single composer in the whole web. It is created and carefully maintained by Mark Thomas.',
      'links.stille': 'stille liebe is a D\u00fcsseldorf-based project by two young recording producers dedicated to making forgotten music of the 19th century publicly available again. Driven by a passion for classical music and the preservation of musical culture, they produce and publish professional recordings \u2014 giving young artists in particular a platform to reach wider audiences.',
      'video.raff-suite-intro': 'Introduction to Raff\u2019s piano suite No.\u00a03',
      'video.raff-suite-perf': 'Performance of Raff\u2019s piano suite No.\u00a03 with Hyelim Kim',
      'video.raff-sym3-intro': 'Introduction to Raff\u2019s symphony No.\u00a03 \u201cIm Walde\u201d (Waldsymphonie)',
      'video.raff-octet': 'Performance of Raff\u2019s octet for strings op.\u00a0176',
      'video.dame-kobold-trailer': 'Trailer from the Regensburg opera for \u201cDame Kobold\u201d',
      'video.dame-kobold-rec': 'Joachim Raff\u2019s Dame Kobold: a world premiere recording with Dario Salvi',
      'video.advent': 'Joachim Raff \u2014 From the Advent Season, op.\u00a0216',
      'video.scherzo-vid': 'Joachim Raff \u2014 Scherzo, Op.\u00a03',
      'video.suites-debut': 'Hyelim Kim\u2019s stunning debut with Raff\u2019s Piano Suites',
      'work.back': 'Back to Catalog',
      'work.order-btn': 'Order / PDF Shop',
      'work.editions': 'Editions Available',
      'work.cast': 'Cast',
      'work.orchestra': 'Orchestra',
      'work.duration': 'Duration:',
      'work.nochoir': 'No choir.',
      'work.also-pdf': 'Score and parts are also available as PDF download in our shop.',
      'work.also-pdf-vocal': 'Vocal score and libretto are also available as PDF download. The opera was recorded in September 2023 by Swiss-Fonogramm in Bern with Magnus Vigilius (title role) and Olena Tokar (Delilah).',
      'work.also-pdf-solo': 'Also available as PDF download in our shop.',
      'work.edition-details': 'Edition Details',
      'work.main-lang': 'The main language of the catalogue is English. Original citations are presented in German and English.',
      'news.loading': 'Loading news\u2026',
      'news.cat.news': 'News',
      'news.cat.nextpublications': 'Next Publications',
    },
    de: {
      'nav.home': 'Startseite',
      'nav.news': 'News',
      'nav.catalog': 'Katalog',
      'nav.composers': 'Komponisten',
      'nav.contact': 'Kontakt',
      'nav.links': 'Links',
      'footer.updated': 'Zuletzt aktualisiert:',
      'home.featured': 'Ausgew\u00e4hlte Publikationen',
      'card.eif.title': 'Die Eifers\u00fcchtigen (The Jealous Ones)',
      'card.eif.desc': 'Oper in drei Aufz\u00fcgen, WoO\u00a054. Urauff\u00fchrung durch das Opernkollektiv Z\u00fcrich \u2014 CD bei Naxos.',
      'card.q2.title': 'Streichquartett Nr.\u00a02, A-Dur, op.\u00a090',
      'card.q2.desc': 'Kritische Edition nach dem Autograph des Komponisten. Partitur und Stimmen erh\u00e4ltlich.',
      'card.samson.desc': 'Musikdrama. Urauff\u00fchrung in Weimar 2022, 170 Jahre nach der Entstehung. Aufgenommen von Swiss-Fonogramm, 2023.',
      'card.sym3.title': 'Symphonie Nr.\u00a03 \u201eIm Walde\u201c',
      'card.sym3.desc': 'Erstpublikation seit 1872, nach dem Autograph des Komponisten. Raffs bekanntestes Orchesterwerk.',
      'card.scherzo.desc': 'Zwei v\u00f6llig verschiedene Fassungen von 1842 und 1882 erstmals gemeinsam ver\u00f6ffentlicht.',
      'card.wv.title': 'Raff Werkverzeichnis',
      'card.wv.desc': 'Das erste vollst\u00e4ndige Werkverzeichnis seit 1888, von Raff-Spezialist Mark Thomas. 313 Seiten, Hardcover.',
      'card.q5.title': 'Streichquartett Nr.\u00a05, G-Dur, op.\u00a0138',
      'card.q5.desc': 'Erstpublikation seit 1869. Partitur und Stimmen erh\u00e4ltlich.',
      'card.son4.desc': 'Neuausgabe der \u201eChromatischen\u201c Sonate op.\u00a0129, kombiniert mit der Erstausgabe des unver\u00f6ffentlichten Duos WoO\u00a055.',
      'catalog.search': 'Titel, Bestellnummern suchen\u2026',
      'catalog.all-composers': 'Alle Komponisten',
      'catalog.order-p': 'Alle nationalen und internationalen Bestellungen bitte per E-Mail an Edition Nordstern (<a href="mailto:raff@edno.de">raff@edno.de</a>)',
      'catalog.shop-p': 'PDF-Downloads sind in unserem Webshop erh\u00e4ltlich: <a href="https://edno-shop.myshopify.com" target="_blank" rel="noopener">edno-shop.myshopify.com</a>',
      'catalog.payment': 'Zahlung per PayPal m\u00f6glich.',
      'catalog.pdf-btn': 'Vollst\u00e4ndigen Katalog herunterladen (PDF)',
      'catalog.loading': 'Katalog wird geladen\u2026',
      'catalog.noresults': 'Keine Publikationen gefunden. Bitte andere Suchbegriffe verwenden.',
      'composers.heading': 'Bei Edition Nordstern verlegte Komponisten',
      'composers.intro': 'Hier finden Sie Informationen zu Leben und Werk der bei Edition Nordstern verlegten Komponisten.',
      'contact.run': 'Das Unternehmen wird von Volker Tosta geleitet und durch ein internationales Team von Mitarbeitern unterst\u00fctzt.',
      'contact.orders': 'Bestellungen k\u00f6nnen per Telefon oder E-Mail aufgegeben werden. Sie erhalten eine Best\u00e4tigung per E-Mail sowie eine Zahlungsanforderung \u00fcber PayPal.',
      'links.videos': 'Videos',
      'links.raff': 'Die Joachim-Raff-Homepage (dient auch als Website der Raff-Gesellschaft Wiesbaden). Diese Seite geh\u00f6rt zu den besten Komponisten-Websites im gesamten Internet. Sie wird von Mark Thomas erstellt und sorgf\u00e4ltig gepflegt.',
      'links.stille': 'stille liebe ist ein D\u00fcsseldorfer Projekt zweier junger Tonproduzenten, die vergessene Musik des 19.\u00a0Jahrhunderts wieder der \u00d6ffentlichkeit zug\u00e4nglich machen m\u00f6chten. Mit Leidenschaft f\u00fcr klassische Musik und Musikkulturpflege produzieren und ver\u00f6ffentlichen sie professionelle Aufnahmen \u2013 und geben insbesondere jungen K\u00fcnstlerinnen und K\u00fcnstlern eine Plattform.',
      'video.raff-suite-intro': 'Einf\u00fchrung in Raffs Klaviersuite Nr.\u00a03',
      'video.raff-suite-perf': 'Auff\u00fchrung von Raffs Klaviersuite Nr.\u00a03 mit Hyelim Kim',
      'video.raff-sym3-intro': 'Einf\u00fchrung in Raffs Symphonie Nr.\u00a03 \u201eIm Walde\u201c (Waldsymphonie)',
      'video.raff-octet': 'Auff\u00fchrung von Raffs Oktett f\u00fcr Streicher op.\u00a0176',
      'video.dame-kobold-trailer': 'Trailer der Regensburger Oper zu \u201eDame Kobold\u201c',
      'video.dame-kobold-rec': 'Joachim Raffs Dame Kobold: eine Weltpremierenaufnahme mit Dario Salvi',
      'video.advent': 'Joachim Raff \u2014 Aus der Adventszeit, op.\u00a0216',
      'video.scherzo-vid': 'Joachim Raff \u2014 Scherzo, op.\u00a03',
      'video.suites-debut': 'Hyelim Kims beeindruckendes Deb\u00fct mit Raffs Klaviersuiten',
      'work.back': 'Zur\u00fcck zum Katalog',
      'work.order-btn': 'Bestellen / PDF-Shop',
      'work.editions': 'Erh\u00e4ltliche Ausgaben',
      'work.cast': 'Besetzung',
      'work.orchestra': 'Orchester',
      'work.duration': 'Dauer:',
      'work.nochoir': 'Kein Chor.',
      'work.also-pdf': 'Partitur und Stimmen sind auch als PDF-Download in unserem Shop erh\u00e4ltlich.',
      'work.also-pdf-vocal': 'Klavierauszug und Libretto sind auch als PDF-Download erh\u00e4ltlich. Die Oper wurde im September 2023 von Swiss-Fonogramm in Bern aufgenommen, mit Magnus Vigilius (Titelrolle) und Olena Tokar (Delilah).',
      'work.also-pdf-solo': 'Auch als PDF-Download in unserem Shop erh\u00e4ltlich.',
      'work.edition-details': 'Ausgabe-Details',
      'work.main-lang': 'Die Hauptsprache des Katalogs ist Englisch. Originalzitate werden auf Deutsch und Englisch pr\u00e4sentiert.',
      'news.loading': 'Nachrichten werden geladen\u2026',
      'news.cat.news': 'Neuigkeiten',
      'news.cat.nextpublications': 'N\u00e4chste Ver\u00f6ffentlichungen',
    }
  };

  var currentLang = 'en';

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem('edno-lang', lang); } catch (e) {}

    var tl = T[lang] || T.en;

    // textContent
    [].forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var key = el.getAttribute('data-i18n');
      if (tl[key] !== undefined) el.textContent = tl[key];
    });

    // innerHTML (for translated text containing links)
    [].forEach.call(document.querySelectorAll('[data-i18n-html]'), function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (tl[key] !== undefined) el.innerHTML = tl[key];
    });

    // placeholder attributes
    [].forEach.call(document.querySelectorAll('[data-i18n-placeholder]'), function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (tl[key] !== undefined) el.placeholder = tl[key];
    });

    // show / hide language blocks
    [].forEach.call(document.querySelectorAll('[data-lang]'), function (el) {
      el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
    });

    // toggle button appearance
    [].forEach.call(document.querySelectorAll('.lang-btn'), function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });
  }

  function getLang() {
    try {
      var saved = localStorage.getItem('edno-lang');
      if (saved === 'en' || saved === 'de') return saved;
    } catch (e) {}
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return nav.startsWith('de') ? 'de' : 'en';
  }

  function makeSwitcher(extraClass) {
    var sw = document.createElement('div');
    sw.className = 'lang-switcher' + (extraClass ? ' ' + extraClass : '');
    sw.setAttribute('aria-label', 'Language / Sprache');
    sw.innerHTML =
      '<button class="lang-btn" data-lang-btn="en" title="English">EN</button>' +
      '<span aria-hidden="true">|</span>' +
      '<button class="lang-btn" data-lang-btn="de" title="Deutsch">DE</button>';
    sw.addEventListener('click', function (e) {
      var btn = e.target;
      if (!btn.getAttribute('data-lang-btn') && btn.parentNode) btn = btn.parentNode;
      var l = btn.getAttribute('data-lang-btn');
      if (l) applyLang(l);
    });
    return sw;
  }

  function injectSwitcher() {
    var nav = document.querySelector('.main-nav');
    if (!nav || nav.querySelector('.lang-switcher')) return;
    nav.appendChild(makeSwitcher());

    // Mobile: also inject into header before nav-toggle
    var toggle = document.querySelector('.nav-toggle');
    if (toggle && !document.querySelector('.lang-switcher-mobile')) {
      var mSw = makeSwitcher('lang-switcher-mobile');
      toggle.parentNode.insertBefore(mSw, toggle);
    }
  }

  function init() {
    injectSwitcher();
    applyLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for other scripts to use translated strings
  window.EdNoLang = {
    get: function (key) {
      var tl = T[currentLang] || T.en;
      return tl[key] !== undefined ? tl[key] : (T.en[key] !== undefined ? T.en[key] : key);
    },
    current: function () { return currentLang; },
    onChange: function (cb) {
      var orig = applyLang;
      applyLang = function (l) { orig(l); cb(l); };
    }
  };
})();
