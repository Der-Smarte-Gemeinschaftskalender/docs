
[« Zurück zur Handbuchübersicht](/get-started.md)

# Hosting

## Hinweise zur Instanzadministration

Der initiale **Instanzadministrator**, der bei der technischen Einrichtung des Systems angelegt wird, sollte **nicht** für die Erstellung von Organisationen oder Benutzerprofilen verwendet werden. Dieser Administrator dient ausschließlich der **übergeordneten Instanzverwaltung** (z. B. technische Konfiguration, Systempflege).

Es wird empfohlen, sich nach der Einrichtung **mindestens einen weiteren Benutzeraccount anzulegen** und diesen über den initialen Administrator im Bereich "Nutzer*innen verwalten" zum **Instanzadministrator** zu machen.

Alle über diesen Weg angelegten Instanzadministratoren können anschließend wie gewohnt Organisationen erstellen, freigeben, Instanzmitglieder verwalten, Instanzadministrationsrechte vergeben und weitere Aufgaben übernehmen.  

Es können beliebig viele Administratoren mit Instanzrechten existieren. Diese Rechte sollten jedoch mit Bedacht vergeben werden.

## Wichtige Informationen für die erste Installation: Registrierung freischalten

Bei der ersten Installation legen wir den oben genannten Benutzer für die Instanzadministration an. Bevor sich die ersten Nutzer*innen registrieren können, muss in der Mobilizon-Oberfläche zunächst die Registrierung freigeschaltet werden. Aus Sicherheitsgründen ist diese zunächst immer deaktiviert. 

**Freischaltung vornehmen**: Im internen Bereich des Smarten Gemeinschaftskalenders finden Sie den Reiter „Instanz verwalten" (Seitenmenü). Hier werden Ihnen die Zugangsdaten für die Instanzadministration auf Mobilizon bereitgestellt. Über den Button „Zur Instanzverwaltung auf Mobilizon” gelangen Sie zur Mobilizon Oberfläche. Bitte loggen Sie sich mit den Zugangsdaten aus dem Bereich "Instanz verwalten" ein.

Navigieren Sie zum Bereich „Administration” und dann zu „Einstellungen der Instanz”. Wählen Sie nun „Erlaube Registrierungen” aus und speichern Sie Ihre Änderungen.

## Server, Domain und Mailing

Um eine eigene Instanz des Smarten Gemeinschaftskalenders zu hosten, benötigen Sie einen Server. Je nachdem, wie viele Nutzende erwartet werden und wie viele Termine gespeichert werden sollen, muss dieser entsprechend groß sein. Für den Anfang reicht in der Regel etwas zwischen 2 vCPU/4 GB RAM und 4 vCPU/12 GB RAM. 

Außerdem wird mindestens eine (Sub-)Domain benötigt, unter der die Instanz erreichbar ist sowie eine weitere Subdomain für die Mobilizon-Installation. Mobilizon wird von unseren Installationsmöglichkeiten direkt mitinstalliert. Um E-Mails zu verschicken, wird ein Mailpostfach mit SMTP-Zugangsdaten benötigt. Diese können in der Konfiguration hinterlegt werden. 
Einen Server oder V-Server kann zum Beispiel sehr nachhaltig bei [Windcloud](https://shop.windcloud.de/store/virtual-private-server) gemietet werden. Es gibt aber auch noch andere Anbieter wie z. B.: [Hetzner](https://www.hetzner.com/de/cloud/) oder [Netcup](https://www.netcup.com/de/server/vps) 

## Ansible

[Ansible](https://docs.ansible.com/) ist eine Plattform zur IT-Automatisierung, die komplexe administrative Aufgaben vereinfacht und standardisiert. Damit können wiederkehrende Prozesse ("Infrastructure as Code") sehr gut zeitsparend abgebildet werden. Damit wird die Installation des Smarten Gemeinschaftskalenders zeitsparender und reproduzierbar. Daher empfehlen wir diese Art der Installation.

Um zu starten wird ein (V-)Server und ein Rechner mit installiertem Ansible benötigt. Die Informationen dazu finden Sie auf der Ansible-Webseite. Innerhalb des Repositories gibt es in dem Ordner ["deployment"](https://github.com/Der-Smarte-Gemeinschaftskalender/der-smarte-gemeinschaftskalender/tree/main/deployment) alle Dateien zu Ansible. Sie müssen sich auf dem Server per SSH verbinden können. Dort wird am besten die `inventory/example.yml` als Vorlage ausgewählt und umbenannt. In unserem Fall bspw. `tavias.de.yml`. Überall, wo in der Bedeutung "Anpassen:" steht, muss Ihre Konfiguration zwingend angepasst werden!


| yml key | Beispielwert | Bedeutung |
| -- | -- | -- |
| ansible_host | 192.168.1.1 | Anpassen: IP-Adresse des Zielservers für die Ansible-Bereitstellung |
| ansible_user | root | Anpassen: Benutzername für die SSH-Verbindung zum Server |
| ansible_ssh_common_args | "-o ForwardAgent=yes" | Zusätzliche SSH-Argumente (hier: SSH-Agent-Weiterleitung) |
| domain | tavias.de | Anpassen: Hauptdomain der Anwendung |
| domain_mobilizon | mobilizon.tavias.de | Anpassen: Subdomain für die Mobilizon-Instanz |
| build_on_server | true | Gibt an, ob der Build-Prozess auf dem Server stattfinden soll |
| certbot_email | admin@example.de | Anpassen: E-Mail-Adresse für Let's Encrypt SSL-Zertifikate |
| admin_mail | admin@example.de | Anpassen: E-Mail-Adresse des Administrators |
| admin_password | super_sicheres_passwort_admin | Anpassen: Passwort für den Admin-Zugang |
| db_connection | pgsql | Datenbank-Typ (PostgreSQL) |
| db_host | postgres | Hostname des Datenbankservers |
| db_port | 5432 | Port für die Datenbankverbindung |
| db_database | laravel | Name der Datenbank |
| db_username | laravel | Benutzername für die Datenbankverbindung |
| db_password | super_sicheres_passwort | Anpassen: Passwort für die Datenbankverbindung |
| mail_mailer | smtp | Mail-Versandmethode |
| mail_host | smtp.example.org | Anpassen: SMTP-Server für E-Mail-Versand |
| mail_port | 587 | Port für SMTP-Verbindung |
| mail_username | mailbot@example.de | Anpassen: Benutzername für SMTP-Authentifizierung |
| mail_password | emailPasswort | Anpassen: Passwort für SMTP-Authentifizierung |
| mail_encryption | tls | Verschlüsselungsmethode für E-Mail-Versand |
| mail_from_address | mailbot@example.de | Anpassen: Absenderadresse für ausgehende E-Mails |
| app_name | "Mein Kalender" | Anpassen: Anzeigename der Anwendung |
| strict_mode |  "true" oder "false" | Konfiguration ob die Instanz im [Striktem Freigabemodus Modus](/Terminverwaltung/Instanz/#strikter-freigabemodus-strict-mode) läuft |

Wenn das alles richtig konfiguriert wurde, muss nur noch `ansible-playbook -i inventory/tavias.de.yml playbook.yml` ausgeführt werden.

**Wichtig:** Beachten Sie unbedingt die Punkte zu `Wichtige Informationen für die erste Installation`. 

### overwriteConfig

Ergänzend zur [instanceConfig.ts](https://github.com/Der-Smarte-Gemeinschaftskalender/der-smarte-gemeinschaftskalender/blob/main/frontend/src/lib/instanceConfig.ts) gibt es die [overwriteConfig.ts](https://github.com/Der-Smarte-Gemeinschaftskalender/der-smarte-gemeinschaftskalender/blob/main/frontend/src/lib/overwriteConfig.ts)

Dies ist eine Standarddatei, die ausgetauscht werden kann. Im Gegensatz zur `instanceConfig.ts` müssen hier **nicht alle Werte** gesetzt werden – es werden ausschließlich die Einstellungen angegeben, die für die jeweilige Instanz vom Standard abweichen sollen. Alle nicht aufgeführten Schlüssel behalten automatisch ihre Werte aus der `instanceConfig.ts`. Dadurch lässt sich eine Instanz gezielt anpassen, ohne die komplette Konfiguration zu duplizieren.

#### Verfügbare Felder

| Feld | Unterfeld | Typ | Beschreibung |
| --- | --- | --- | --- |
| `isStrictModeEnabled` | – | `boolean` | Aktiviert den strikten Modus (überschreibt die Umgebungsvariable `VITE_DSG_STRICT_MODE`). |
| `showPhysicalAddressRouting` | `googleMaps` | `boolean` | Zeigt die Verlinkung zu Google Maps an. |
| | `appleMaps` | `boolean` | Zeigt die Verlinkung zu Apple Maps an. |
| | `copyAdressButton` | `boolean` | Zeigt den Button zum Kopieren der Adresse an. |
| | `openGeoCoordinates` | `boolean` | Zeigt die Verlinkung zum Öffnen der Geo-Koordinaten an. |
| `instanceInformation` | `name` | `string` | Name der Instanz, z. B. „Der Smarte Gemeinschaftskalender“. |
| | `operatedBy` | `string` | Betreiber der Instanz, z. B. „Amt Süderbrarup“. |
| `allowedEventCreationsMethods` | `singleEvent` | `boolean` | Erlaubt das Erstellen einzelner Termine. |
| | `seriesEvent` | `boolean` | Erlaubt das Erstellen von Terminserien. |
| | `uploadedEvent` | `boolean` | Erlaubt das Hochladen von Terminen (z. B. via Datei). |
| | `importedEvent` | `boolean` | Erlaubt das Importieren von Terminen (z. B. via URL/Feed). |
| `landingPage` | `heading` | `string` | Überschrift der Startseite. |
| | `description` | `string` | Beschreibungstext der Startseite (Plain Text). |
| | `descriptionHtml` | `string` | Beschreibungstext der Startseite als HTML (überschreibt `description`, sofern gesetzt). |
| | `showNotification` | `boolean` | Zeigt die Benachrichtigungsbox auf der Startseite an. |
| | `showCategories` | `boolean` | Zeigt die Kategorieübersicht auf der Startseite an. |
| | `numberOfUpcomingEvents` | `number` | Anzahl der angezeigten kommenden Termine. |
| | `upcomingEventsMapTitle` | `string` | Titel über der Karte mit kommenden Terminen. |
| | `upcomingEventsMapBeforeDateFromNowInDays` | `number \| null` | Zeitraum in Tagen, für den kommende Termine auf der Karte angezeigt werden (`null` = unbegrenzt). |
| | `showNotificationImageAlt` | `string` | Alt-Text für das Bild in der Benachrichtigungsbox. |
| `searchPage` | `description` | `string` | Beschreibungstext der Suchseite (Plain Text). |
| | `descriptionHtml` | `string` | Beschreibungstext der Suchseite als HTML. |
| `searchDefaults` | `searchTerm` | `string` | Standard-Suchbegriff. |
| | `searchRadius` | `number` | Standard-Suchradius in Kilometern. |
| | `locationAddress` | `string` | Standard-Adresse für die Suche, z. B. „24392 Süderbrarup, Schleswig-Holstein“. |
| | `locationGeoHash` | `string` | Geohash der Standard-Adresse (siehe Hinweis unten). |
| | `target` | `string` | Standard-Suchziel (z. B. `INTERNAL`). |
| `mainHeader` | `showCalendarLink` | `boolean` | Zeigt den Kalender-Link im Hauptmenü an. |
| | `externalLinkUrl` | `string` | URL des ersten externen Links im Header. |
| | `externalLinkText` | `string` | Anzeigetext des ersten externen Links im Header. |
| | `externalLinkUrl2` | `string \| null` | URL des zweiten externen Links im Header (`null` = ausgeblendet). |
| | `externalLinkText2` | `string \| null` | Anzeigetext des zweiten externen Links im Header (`null` = ausgeblendet). |
| `mainFooter` | `disclaimerText` | `string` | Disclaimer-Text im Footer. |
| `createEventDefaults` | `category` | `string` | Standardkategorie beim Erstellen eines neuen Termins, z. B. `NETWORKING`. |
| `showEventPage` | `eventShareTitle` | `string` | Titel, der beim Teilen eines Termins verwendet wird. |
| `materialGeneratorDefaults` | `underlineColor` | `string` | Standardfarbe der Unterstreichung im Materialgenerator (Hex-Code, z. B. `#800080`). |
| `defaultEventImageBasedOnCategory` | – | `boolean` | Wenn aktiviert, wird für Termine ohne eigenes Bild das Standardbild der jeweiligen Kategorie angezeigt. |
| `eventsMap` | `initialZoomLevel` | `number` | Standard-Zoomstufe der Terminkarte. |
| | `defaultCenter.lat` | `number` | Breitengrad der Standard-Kartenzentrierung. |
| | `defaultCenter.lon` | `number` | Längengrad der Standard-Kartenzentrierung. |
| `seriesEventsHolidaysFilter` | `enabled` | `boolean` | Aktiviert den Filter für Deutsche Feiertage/Schulferien bei Terminserien. |
| | `state` | `string` | Bundesland-Kürzel für den Feiertagsfilter, z. B. `sh` für Schleswig-Holstein. |

**Hinweis:** Es sollten ausschließlich diejenigen Werte in die `overwriteConfig.ts` eingetragen werden, die tatsächlich vom Standard abweichen – alle übrigen Schlüssel können weggelassen werden und werden automatisch aus der `instanceConfig.ts` übernommen.

**Hinweis:** Der Geohash kann aus den Geo-Koordinaten erstellt werden – z. B. [mit diesem Online-Tool](https://www.movable-type.co.uk/scripts/geohash.html).

### Instance Config

**Wichtig:** seit der V1.4.0 sollte zum konfigurieren der Instanz nicht mehr die die `instanceConfig.ts` sondern die `overwriteConfig.ts` benutzt werden.
Damit die einzelnen Instanzen an die eigene Organisation oder Kampagne angepasst werden können, gibt es die [instanceConfig.ts](https://github.com/Der-Smarte-Gemeinschaftskalender/der-smarte-gemeinschaftskalender/blob/main/frontend/src/lib/instanceConfig.ts)

### Default Dateien

Mit der overwriteConfig lässt sich nicht nur die Instanz personalisieren, sondern es lassen sich auch sehr viele Dateien austauschen. Im Repository gibt es daher das Projekt `example-termine.di.day.yml` und den Ordner `deploy/roles/dsgdev/files/example-termine.di.day`, in dem sich die Beispiele für die Anpassungen von [termine.di.day](https://termine.di.day/) befinden. Der Ordner muss dabei genauso heißen wie die YAML-Datei. Es werden nur die Anpassungen übernommen, die im Ordner hinterlegt sind. Für den Rest werden die Standarddateien verwendet. 

Die genaue Liste der Anpassungsmöglichkeiten befinden sich in folgender Datei: [deployment/roles/dsgdev/tasks/main.yml](https://github.com/Der-Smarte-Gemeinschaftskalender/der-smarte-gemeinschaftskalender/blob/main/deployment/roles/dsgdev/tasks/main.yml)

Liste der möglichen Anpassungen:
- Logo `logo.png`
- Startseiten Bild `notifications.png`
- Standardbild für Karten – sowohl für Veranstaltungen als auch Organisation `default_card.png`
- Ordner mit diversen Dateien für Favicons z. B. erstellt mit [realfavicongenerator.net](https://realfavicongenerator.net/) `favicons`
- Ordner mit Standardbildern für den Werbemittelgenerator `material_generator`
- Neue Konfiguration für Kategorien und Oberkategorien und `categoryOptions.ts`
- Die overwriteConfig (siehe oben) `overwriteConfig.ts`
- Für Style Anpassungen `app.scss`
- Für Anpassungen bezüglich hinterlegte Favicons oder [Link Vorschau Informationen](https://www.seobility.net/en/wiki/Open_Graph) `index.html`
- Es kann eine custom `nginx-combined.conf` hinterlegt werden.

### (Strikter) Freigabemodus
Bei der Installation lässt sich der [strikte Freigabemodus](/Terminverwaltung/Instanz/#strikter-freigabemodus-strict-mode) konfigurieren. Hierbei ist zu beachten, dass bei einer bestehenden Instanz alle bestehenden Termine, Organisationen, Serientermine und Terminimporte erhalten bleiben, wenn dieser Modus geändert wird. Eine Änderung wird nicht empfohlen. 
**Wichtig:** In der `overwriteConfig.ts` sollte unter `allowedEventCreationsMethods` nur `singleEvent: true` hinterlegt sein. 