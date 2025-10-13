
[« Zurück](/get-started)

#Technologien

In diesem Projekt kommen verschiedene Technologien zum Einsatz. Wir haben die wichtigsten davon hier einmal kurz aufgelistet und ausgeführt. Detaillierte Informationen zu allen Technologien sind im Software-Repository zu finden.

## Mobilizon als Fundament

Für uns ist Mobilizon das Fundament unserer Anwendung. Den Smarter-Gemeinschaftskalender (DSG) kann man als meinungsstarken und unterstützenden Client verstehen. Mit jeder Installation kommt eine Mobilizon-Instanz hinzu, die die komplette Förderung übernimmt, aber auch die Struktur und die Daten für die Organisation und die einzelnen Termine. Wir ergänzen diese Software aber mit wichtigen Funktionen, die Organisationen einen deutlichen Mehrwert bei der Erstellung, Pflege und Weitergabe von Terminen bieten. Gleichzeitig ist die Anwendung sehr meinungsstark, im Sinne, dass wir die wichtigsten Funktionen in unserer Oberfläche anzeigen und so eine einfachere Nutzung ermöglichen. [Mehr Informationen zu Mobilizon gibt es auf der Projektseite](https://mobilizon.org/)

## Backend: Laravel

In unserem Backend haben wir uns für das PHP-Framework [Laravel](https://laravel.com/) entschieden. Laravel bietet uns als großes, einheitliches Framework die Möglichkeit, verschiedene Themen wie die REST-API fürs Frontend, Interaktionen mit der Datenbank und das Verschicken von E-Mails direkt zu behandeln.
Mit den Migrationen können wir direkt Veränderungen in der Datenbank vornehmen. Für jede Tabelle in der Datenbank gibt es ein Modell. Über themenbezogene Controller werden die per REST-API angefragten Daten auch wieder weitergeschickt. 
Eine Besonderheit ist, dass alle benutzer- bzw. organisationsbezogenen Interaktionen direkt mit der Mobilizon-Instanz und deren GraphQL-Schnittstelle kommunizieren.Im Software Repository ist das unter der Ordner `/backend` zu finden. 
 

#Frontend: Vue.js

Im Frontend benutzen wir, genauso wie das Mobilizon-Projekt, [Vue.js](https://vuejs.org/). Vue.js ist ein JavaScript-Framework, das wir nach Möglichkeit typisiert mit [Typescript](https://www.typescriptlang.org/) benutzen. Im Software-Repository ist dies unter dem Ordner `/frontend` zu finden. Die Kommunikation zwischen dem Backend und dem Frontend findet per REST-Schnittstelle statt. Zur Authentifizierung werden JWTs benutzt, wenn sich Benutzer anmelden. Eine Besonderheit des Projekts ist, dass alle öffentlichen Informationen (Suche nach Veranstaltungen, Anzeige einer Einzelveranstaltung usw.) nicht vom Laravel-Backend, sondern direkt von Mobilizon über die GraphQL-Schnittstelle kommen. 

## Kern UX als barrierefreie Gestaltungsgrundlage

Der *Smarte Gemeinschaftskalender* folgt den [barrierefreien Gestaltungsprinzipien](/Barrierefreiheit/). Als Gestaltungsgrundlage verwenden wir daher den [Kern-UX](https://www.kern-ux.de/)‑Standard, welcher als *offizieller UX-Standard* der deutschen Verwaltung eingeführt wurde. Kern UX ist Teil der digitalen Dachmarke für Verwaltungsservices und stellt ein **Open‑Source-Design‑System** auf Web‑Components‑Basis bereit. Es wurde entwickelt, um digitale Verwaltungsangebote *nutzer*innenzentriert, transparent und barrierefrei* zu gestalten.  

Die bereitgestellten UI-Komponenten entsprechen mindestens dem **AA-Level der BITV 2.0**, sind nach WCAG‑Richtlinien getestet und beinhalten Richtlinien für Farben, Kontraste und semantischen HTML-Code. Ziel ist es, öffentliche digitale Dienste bundesweit einheitlich, zugänglich und effizient entwickelbar zu machen.

**Warum wir Kern UX nutzen**:

* **Barrierefreie Standards out-of-the-box:** Die Komponenten sind gemäß [barrierefreier Richtlinien](https://www.kern-ux.de/2.1.2/design-system/barrierefreiheit/) entwickelt – dennoch bleibt die Verantwortung zur Prüfung im jeweiligen Kontext bei den Entwickler*innen. Die Komponenten ermöglichen effiziente Design- und Entwicklungsprozesse.

* **Reduktion von Designbrüchen:** Das Design-System bietet Richtlinien, um ein konsistentes Erscheinungsbild öffentlicher Verwaltungsangebote zu sichern und eine gleichbleibende Servicequalität zu garantieren.

* **Zukunftsfähig & nachnutzbar:** Kern UX ist ein wachsender Standard, der Pilotprojekte und Fachcommunity einbindet und eine sukzessive *bundesweite Ausweitung* anstrebt.  


