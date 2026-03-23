
[« Zurück zur Handbuchübersicht](/get-started.md)

# Technologien

In diesem Projekt kommen verschiedene Technologien zum Einsatz. Wir haben die wichtigsten davon hier einmal kurz aufgelistet und ausgeführt. Detaillierte Informationen zu allen Technologien sind im Software-Repository zu finden.

## Mobilizon als Fundament

Für uns ist Mobilizon das Fundament unserer Anwendung. Den Smarter-Gemeinschaftskalender (DSG) kann man als meinungsstarken und unterstützenden Client verstehen. Mit jeder Installation kommt eine Mobilizon-Instanz hinzu, die die komplette Förderung übernimmt, aber auch die Struktur und die Daten für die Organisation und die einzelnen Termine. Wir ergänzen diese Software aber mit wichtigen Funktionen, die Organisationen einen deutlichen Mehrwert bei der Erstellung, Pflege und Weitergabe von Terminen bieten. Gleichzeitig ist die Anwendung sehr meinungsstark, im Sinne, dass wir die wichtigsten Funktionen in unserer Oberfläche anzeigen und so eine einfachere Nutzung ermöglichen. [Mehr Informationen zu Mobilizon gibt es auf der Projektseite](https://mobilizon.org/)

## Backend: Laravel

In unserem Backend haben wir uns für das PHP-Framework [Laravel](https://laravel.com/) entschieden. Laravel bietet uns als großes, einheitliches Framework die Möglichkeit, verschiedene Themen wie die REST-API fürs Frontend, Interaktionen mit der Datenbank und das Verschicken von E-Mails direkt zu behandeln.
Mit den Migrationen können wir direkt Veränderungen in der Datenbank vornehmen. Für jede Tabelle in der Datenbank gibt es ein Modell. Über themenbezogene Controller werden die per REST-API angefragten Daten auch wieder weitergeschickt. 
Eine Besonderheit ist, dass alle benutzer- bzw. organisationsbezogenen Interaktionen direkt mit der Mobilizon-Instanz und deren GraphQL-Schnittstelle kommunizieren.Im Software Repository ist das unter der Ordner `/backend` zu finden. 
 

## Frontend: Vue.js

Im Frontend benutzen wir, genauso wie das Mobilizon-Projekt, [Vue.js](https://vuejs.org/). Vue.js ist ein JavaScript-Framework, das wir nach Möglichkeit typisiert mit [Typescript](https://www.typescriptlang.org/) benutzen. Im Software-Repository ist dies unter dem Ordner `/frontend` zu finden. Die Kommunikation zwischen dem Backend und dem Frontend findet per REST-Schnittstelle statt. Zur Authentifizierung werden JWTs benutzt, wenn sich Benutzer anmelden. Eine Besonderheit des Projekts ist, dass alle öffentlichen Informationen (Suche nach Veranstaltungen, Anzeige einer Einzelveranstaltung usw.) nicht vom Laravel-Backend, sondern direkt von Mobilizon über die GraphQL-Schnittstelle kommen. 

### Karten

Im internen Bereich wird bei der Suche nach Adressen und im öffentlichen Bereich bei der Anzeige von Veranstaltungen und Organisationen, sofern eine Adresse vorhanden ist, diese auch auf einer Karte dargestellt. Dafür wird ein Service von [OpenStreetMap](https://osmfoundation.org) genutzt. Die Nutzung des Services ist kostenlos und wird durch Sponsoren und Spenden finanziert. Es gibt keine Garantie für die Verfügbarkeit. Alle Details dazu gibt es auf Englisch hier: ["Tile Usage Policy"](https://operations.osmfoundation.org/policies/tiles/)

## Kern UX als barrierefreie Gestaltungsgrundlage

Der *Smarte Gemeinschaftskalender* folgt den [barrierefreien Gestaltungsprinzipien](/Barrierefreiheit/). Als Gestaltungsgrundlage verwenden wir daher den [Kern-UX](https://www.kern-ux.de/)‑Standard, welcher als *offizieller UX-Standard* der deutschen Verwaltung eingeführt wurde. Kern UX ist Teil der digitalen Dachmarke für Verwaltungsservices und stellt ein **Open‑Source-Design‑System** auf Web‑Components‑Basis bereit. Es wurde entwickelt, um digitale Verwaltungsangebote *nutzer*innenzentriert, transparent und barrierefrei* zu gestalten.  

Die bereitgestellten UI-Komponenten entsprechen mindestens dem **AA-Level der BITV 2.0**, sind nach WCAG‑Richtlinien getestet und beinhalten Richtlinien für Farben, Kontraste und semantischen HTML-Code. Ziel ist es, öffentliche digitale Dienste bundesweit einheitlich, zugänglich und effizient entwickelbar zu machen.

**Warum wir Kern UX nutzen**:

* **Barrierefreie Standards out-of-the-box:** Die Komponenten sind gemäß [barrierefreier Richtlinien](https://www.kern-ux.de/2.1.2/design-system/barrierefreiheit/) entwickelt – dennoch bleibt die Verantwortung zur Prüfung im jeweiligen Kontext bei den Entwickler*innen. Die Komponenten ermöglichen effiziente Design- und Entwicklungsprozesse.

* **Reduktion von Designbrüchen:** Das Design-System bietet Richtlinien, um ein konsistentes Erscheinungsbild öffentlicher Verwaltungsangebote zu sichern und eine gleichbleibende Servicequalität zu garantieren.

* **Zukunftsfähig & nachnutzbar:** Kern UX ist ein wachsender Standard, der Pilotprojekte und Fachcommunity einbindet und eine sukzessive *bundesweite Ausweitung* anstrebt.  

## Warum kein Upstream-Beitrag zu Mobilizon?

Der Smarte Gemeinschaftskalender (DSG) basiert technisch auf [Mobilizon](https://joinmobilizon.org/) - eine bewusste Entscheidung, die wir hier erläutern möchten. DSG ist jedoch selbst eher ein Fork und kein „Upstream-Development”.

### Was wir von Mobilizon übernommen haben

Der DSG nutzt Mobilizon als technische Basis.
Die **Föderationsfunktionen vollständig unverändert** unverändert. Das bedeutet: Der Smarte Gemeinschaftskalender ist mit dem Fediverse kompatibel – genauso wie Mobilizon selbst. Wir haben auf einem bewährten Fundament aufgebaut. Dies hat sich auch im finanziellen Umfang der Förderung widergespiegelt.

### Warum ein eigenes Projekt?

Der entscheidende Grund liegt im **Zielgruppenunterschied**:.

Mobilizon ist eine internationale Plattform, die sich primär an selbstorganisierte Communities und Einzelpersonen im Fediverse richtet. Der smarte Gemeinschaftskalender hingegen richtet sich an **(deutsche) Gebietskörperschaften (wie Ämter,Komunen, Stände), Vereine und öffentliche Einrichtungen** mit spezifischen Anforderungen, die sich grundlegend von denen einer internationalen Open-Source-Community unterscheiden.

Dazu gehört u. a.:

- 
  **Werbemittelgenerator, iCal-Import, Infomonitor-Ansicht:** Diese Funktionen sind auf die konkreten Arbeitsabläufe von Vereinen und Gemeindeverwaltungen zugeschnitten und bewusst einfacher gestaltet, wo Mobilizon mehr Komplexität bietet.

- **UX-Standards:** Die Erstellungsansicht orientiert sich an   [Kern-UX](https://www.kern.services/), dem UX-Standard für deutsche   Verwaltungen. Diese Anpassungen wären für das internationale Mobilizon-Projekt schlicht nicht relevant. Aktuell ist die Dokumentation von Kern-UX nur auf Deutsch verfügbar.

- **Strikter Moderationsmodus:** Für öffentliche Einrichtungen haben wir einen Modus entwickelt, in dem nicht nur neue Organisationen, sondern auch jede einzelne Terminerstellung und -änderung administrativ freigegeben werden muss. Dies ist eine sehr spezifische Anforderung aus dem Umfeld öffentlicher Einrichtungen und kein sinnvoller Upstream-Beitrag für eine internationale Plattform.

### Bewusstes Vereinfachen statt Feature-Parität

Ein weiterer wesentlicher Punkt ist, dass wir nicht **alle Mobilizon-Funktionen übernommen haben**. Das war keine Schwäche, sondern eine Designentscheidung. Unser Ziel war ein Werkzeug, das auch Menschen ohne technische Vorkenntnisse gerne nutzen, darunter Organisationen, die Social Media nie genutzt haben, aber dennoch Interesse daran haben, ihre Termine sichtbar zu machen und Menschen einzuladen.

Diese Vereinfachung wäre als Upstream-Beitrag ein Rückschritt für Mobilizon gewesen.

### Open Source bleibt Open Source

Der smarte Gemeinschaftskalender wird unter der  **Open-Source-Lizenz** AGPL-3.0 veröffentlicht. Alle Weiterentwicklungen sind damit öffentlich einsehbar, nachnutzbar und bei bedarf rückführbar.

### Fazit

Die Entwicklung eines Forks oder eines eigenständigen Projekts auf Basis von Open-Source-Software stellt keine Abkehr vom Open-Source-Gedanken dar, sondern ist ein Kernelement davon. Die Entscheidung, den DSG als eigenständiges Projekt zu führen, war notwendig, um die spezifischen Bedürfnisse deutscher Kommunen und Organisationen gezielt ansprechen zu können, ohne ein internationales Projekt mit lokalspezifischen Anforderungen zu überlasten. Wären all diese Änderungen als optional konfigurierbare Optionen hinzugefügt worden, hätten sich die Entwicklungskosten vervielfacht und die Entwicklungszeit wäre immens gestiegen. Gleichzeitig wäre der Aufwand für die Entwicklung, Dokumentation und Kommunikation der Features langfristig enorm gestiegen. Gerade durch die Föderation und die Beibehaltung der Datenstruktur lassen sich DSG-Termine problemlos in einem Mobilizon anzeigen. Die Stärke des Fediverse liegt in der gemeinsamen Datenstruktur und den standardisierten Austauschmöglichkeiten. Trotzdem können Nutzende genau die Oberfläche nutzen, die für sie sinnvoll ist.