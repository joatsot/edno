(function () {
  var GA_ID = 'AW-10798239983';
  var STORAGE_KEY = 'edno-cookie-consent';

  function loadGA() {
    if (window._gaLoaded) return;
    window._gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function getConsent() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function setConsent(val) {
    try { localStorage.setItem(STORAGE_KEY, val); } catch (e) {}
  }

  function hideBanner() {
    var b = document.getElementById('cookie-banner');
    if (b) { b.classList.add('cookie-banner--hidden'); setTimeout(function () { b.remove(); }, 400); }
  }

  function getLang() {
    try { return localStorage.getItem('edno-lang') || 'en'; } catch (e) { return 'en'; }
  }

  function showBanner() {
    if (document.getElementById('cookie-banner')) return;

    var lang = getLang();
    var T = {
      en: {
        msg: 'We use cookies for analytics (Google Analytics) to understand how visitors use this site. You can accept or decline.',
        accept: 'Accept',
        decline: 'Decline',
        policy: 'Learn more'
      },
      de: {
        msg: 'Wir verwenden Cookies für Analysezwecke (Google Analytics), um die Nutzung dieser Seite zu verstehen. Sie können akzeptieren oder ablehnen.',
        accept: 'Akzeptieren',
        decline: 'Ablehnen',
        policy: 'Mehr erfahren'
      }
    };
    var t = T[lang] || T.en;

    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML =
      '<div class="cookie-inner">' +
        '<p class="cookie-text">' + t.msg + ' <a href="impressum.html" class="cookie-link">' + t.policy + '</a></p>' +
        '<div class="cookie-actions">' +
          '<button id="cookie-decline" class="cookie-btn cookie-btn-decline">' + t.decline + '</button>' +
          '<button id="cookie-accept" class="cookie-btn cookie-btn-accept">' + t.accept + '</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(banner);

    // Animate in
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { banner.classList.add('cookie-banner--visible'); });
    });

    document.getElementById('cookie-accept').addEventListener('click', function () {
      setConsent('accepted');
      loadGA();
      hideBanner();
    });

    document.getElementById('cookie-decline').addEventListener('click', function () {
      setConsent('declined');
      hideBanner();
    });
  }

  function init() {
    var consent = getConsent();
    if (consent === 'accepted') {
      loadGA();
    } else if (!consent) {
      showBanner();
    }
    // declined → nothing loaded
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
