
[« Zurück](/get-started)

# Kalender einbinden

Du kannst die Termine vom Smarten Gemeinschaftskalender auf anderen Webseiten anzeigen. Damit diese Integration möglichst einfach ist, kannst du auf der Startseite auf „Benachrichtigungen abonnieren” => „Script einbinden” eine einfache Möglichkeit dieses Script zu erstellen.

Es gibt die Möglichkeit, nach **Organisationen** und **Kategorien** zu filtern. Wenn du alle Organisationen und alle Kategorien anzeigen lassen möchtest, musst du nichts verändern.

Im unteren Teil gibt es zwei Ausgaben. Einmal die Einbindung des JavaScript Imports. Dieses kommt idR in die Head Datei deiner Webseite und den HTML Tag. Den HTML Tag solltest du dort platzieren, wo die Anzeige der Termine stattfinden soll. Standardmäßig werden nur 5 Termine angezeigt. Das kannst du aber auch über den Parameter `data-limit` ändern.



```js
<script src="https://tavias.de/fetchEvents.js"  data-organisation-username="ALL" data-category="ALL" data-limit="5" id="dsg-event-script" data-dsg-url="https://tavias.de"></script>
```

```html
<ul id="dsg-event-list"></ul>
```

**Wichtig:** Die einbindung unter `src` und `data-dsg-url` müssen auf die eigene Installation zeigen.

Wie so eie Anbindung aussehen kann, findet ihr auf [amt-suederbrarup.de](https://www.amt-suederbrarup.de/) unter dem Punkt "Veranstaltungen".