/**
 * Edition Nordstern — Google Apps Script Web App
 * Bedient Katalog UND News aus einer einzigen Google Tabelle.
 *
 * Anleitung:
 *   1. Google Sheet öffnen
 *   2. Erweiterungen > Apps Script > diesen Code einfügen
 *   3. Bereitstellen > Neue Bereitstellung > Web App
 *      - Ausführen als: Ich (Me)
 *      - Zugriff: Jeder (Anyone)
 *   4. Die Bereitstellungs-URL in catalog.html UND news.html eintragen.
 *
 * Tabellenblätter:
 *   Blatt 1 "Catalog" — Katalogdaten (Spalten A–I, siehe unten)
 *   Blatt 2 "News"    — Newsdaten   (Spalten A–E, siehe unten)
 *
 * Katalog-Spalten (Blatt 1):
 *   A: Composer     B: Title      C: Series     D: Order No.
 *   E: Price (EUR)  F: Binding    G: In Stock (YES/NO/SOON)
 *   H: New (YES/NO) I: On Request (YES/NO)
 *
 * News-Spalten (Blatt 2):
 *   A: Date         B: Category   C: Content
 *   D: Link URL     E: Link Text
 */

function doGet(e) {
  var type = (e && e.parameter && e.parameter.type) ? e.parameter.type : 'catalog';
  if (type === 'news')    return getNews();
  if (type === 'meta')    return getMeta();
  return getCatalog();
}

// ── Meta (last updated date) ──────────────────────────────────────────────────

function getMeta() {
  var file = DriveApp.getFileById(SpreadsheetApp.getActiveSpreadsheet().getId());
  return ContentService
    .createTextOutput(JSON.stringify({ lastUpdated: file.getLastUpdated().toISOString() }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Catalog ──────────────────────────────────────────────────────────────────

function getCatalog() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var rows  = sheet.getDataRange().getValues();

  var composerMap   = {};
  var composerOrder = [];

  for (var i = 1; i < rows.length; i++) {
    var row        = rows[i];
    var composer   = String(row[0] || '').trim();
    var title      = String(row[1] || '').trim();
    var series     = String(row[2] || '').trim();
    var orderNo    = String(row[3] || '').trim();
    var priceRaw   = String(row[4] || '').trim();
    var binding    = String(row[5] || '').trim();
    var inStockRaw = String(row[6] || '').trim().toUpperCase();
    var isNewRaw   = String(row[7] || '').trim().toUpperCase();
    var onReqRaw   = String(row[8] || '').trim().toUpperCase();

    if (!composer) continue;

    var inStock   = inStockRaw === 'YES' ? true : inStockRaw === 'SOON' ? 'soon' : false;
    var isNew     = (isNewRaw === 'YES');
    var onRequest = (onReqRaw === 'YES');
    var price     = (priceRaw === '' || priceRaw === '—') ? null : parseFloat(priceRaw);

    var entry = {
      title:   title,
      series:  (series  === '—' || series  === '') ? null : series,
      orderNo: (orderNo === '—' || orderNo === '') ? null : orderNo,
      price:   price,
      binding: (binding === '—' || binding === '') ? null : binding,
      inStock: inStock,
      isNew:   isNew
    };
    if (onRequest) entry.onRequest = true;

    if (!composerMap.hasOwnProperty(composer)) {
      composerMap[composer] = [];
      composerOrder.push(composer);
    }
    composerMap[composer].push(entry);
  }

  var composers = composerOrder.map(function(name) {
    return { name: name, id: name.toLowerCase().replace(/\s+/g, '-'), entries: composerMap[name] };
  });

  return ContentService
    .createTextOutput(JSON.stringify({ lastUpdated: new Date().toISOString(), composers: composers }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── News ─────────────────────────────────────────────────────────────────────

function getNews() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  // Use second sheet if available, otherwise first
  var sheet = sheets.length > 1 ? sheets[1] : sheets[0];
  var rows  = sheet.getDataRange().getValues();

  var items = [];
  for (var i = 1; i < rows.length; i++) {
    var row      = rows[i];
    var date     = String(row[0] || '').trim();
    var category = String(row[1] || '').trim();
    var content  = String(row[2] || '').trim();
    var linkUrl  = String(row[3] || '').trim();
    var linkText = String(row[4] || '').trim();
    if (!content) continue;
    items.push({ date: date, category: category, content: content, linkUrl: linkUrl, linkText: linkText });
  }

  return ContentService
    .createTextOutput(JSON.stringify(items))
    .setMimeType(ContentService.MimeType.JSON);
}
