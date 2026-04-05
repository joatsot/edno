# Katalog pflegen — Edition Nordstern

## Wie neue Werke hinzugefügt werden

Der gesamte Katalog wird in der Datei **`catalog.json`** verwaltet. Die Website liest diese Datei automatisch ein und zeigt alle Einträge mit Suchfunktion und NEU-Badge an.

---

## Konzept: Excel ↔ JSON

Das empfohlene Vorgehen:

1. **Excel-Tabelle pflegen** (gewohntes Werkzeug, alle Mitarbeiter können es bedienen)
2. **Als CSV exportieren** (Datei → Speichern unter → CSV)
3. **CSV in JSON umwandeln** mit einem kostenlosen Online-Converter, z. B. [csvjson.com](https://csvjson.com/csv2json)
4. **catalog.json aktualisieren**

### Excel-Spalten (Vorlage)

| Spalte       | Beschreibung                        | Beispiel                                      |
|--------------|-------------------------------------|-----------------------------------------------|
| `composer`   | Komponistenname                     | Joachim Raff                                  |
| `composerId` | ID (Kleinbuchstaben, kein Leerzeichen) | raff                                        |
| `title`      | Titel des Werkes                    | String quartet No. 5, g major, op. 138, score |
| `series`     | Reihennummer (Raff-Serie)           | X/5                                           |
| `orderNo`    | Bestellnummer                       | 0110-1380a                                    |
| `price`      | Preis in EUR (als Text)             | 58.00                                         |
| `binding`    | `hc` = Hardcover, `sc` = Softcover  | hc                                            |
| `inStock`    | `true` / `false` / `soon`           | true                                          |
| `isNew`      | `true` wenn Neuheit, sonst `false`  | true                                          |
| `onRequest`  | `true` wenn nur auf Anfrage         | false                                         |

---

## Direkt in catalog.json bearbeiten

Die Datei `catalog.json` kann auch direkt mit einem Texteditor (z. B. Notepad++, TextEdit, VS Code) bearbeitet werden.

### Neues Werk hinzufügen

Einen neuen Eintrag im Format `{ ... }` am Ende der `entries`-Liste des jeweiligen Komponisten einfügen, **vor** der schließenden `]`:

```json
{
  "title": "Titel des Werkes",
  "series": "X/9",
  "orderNo": "0110-1900",
  "price": "77.00",
  "binding": "hc",
  "inStock": true,
  "isNew": true
}
```

**Wichtig:** Alle vorherigen Einträge mit einem Komma `,` abschließen.

### Neuheit kennzeichnen

Setze `"isNew": true` — das Werk erscheint im Katalog dann mit einem goldenen **NEW**-Badge.

### Neuheit zurücknehmen

Setze `"isNew": false` — der Badge verschwindet automatisch.

### Lagerbestand ändern

- `"inStock": true` → grün „In stock"
- `"inStock": false` → grau „Out of stock"
- `"inStock": "soon"` → amber „Coming soon"

### Werk auf „Nur auf Anfrage" setzen

```json
{
  "title": "Werktitel — Details. Score and parts available on request.",
  "onRequest": true
}
```

### Neuen Komponisten hinzufügen

Am Ende der `composers`-Liste (vor dem letzten `]`) einfügen:

```json
{
  "name": "Vorname Nachname",
  "id": "nachname",
  "wikipediaUrl": "https://en.wikipedia.org/wiki/...",
  "entries": [
    {
      "title": "Erstes Werk ...",
      "series": "—",
      "orderNo": "XXXX-0000",
      "price": "00.00",
      "binding": "hc",
      "inStock": true,
      "isNew": true
    }
  ]
}
```

---

## Struktur der catalog.json (Übersicht)

```
catalog.json
└── composers[]
    ├── name          → Anzeigename
    ├── id            → URL-freundliche ID (z. B. "raff")
    ├── wikipediaUrl  → Link zur Wikipedia-Seite
    └── entries[]
        ├── title     → Werktitel
        ├── series    → Reihennummer
        ├── orderNo   → Bestellnummer
        ├── price     → Preis als String (z. B. "49.00")
        ├── binding   → "hc" oder "sc"
        ├── inStock   → true / false / "soon"
        ├── isNew     → true / false
        └── onRequest → true (nur wenn kein Festpreis)
```

---

## Suchfunktion

Die Suche auf der Katalogseite durchsucht automatisch:
- Titel
- Bestellnummer
- Reihennummer

Kein zusätzlicher Aufwand beim Hinzufügen neuer Werke — die Suche funktioniert sofort.

---

## Neuheiten im Katalog

Die **NEU**-Kennzeichnung erscheint automatisch bei allen Einträgen mit `"isNew": true`. Es gibt keine zeitliche Begrenzung — die Kennzeichnung bleibt, bis sie manuell auf `false` gesetzt wird.

---

*Letzte Aktualisierung: Dezember 2024*
