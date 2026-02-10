
[« Zurück](/get-started)

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

Um zu starten wird ein (V-)Server und ein Rechner mit installiertem Ansible benötigt. Die Informationen dazu finden Sie auf der Ansible-Webseite. Innerhalb des Repositories gibt es in dem Ordner ["deployment"](https://github.com/Der-Smarte-Gemeinschaftskalender/der-smarte-gemeinschaftskalender/tree/main/deplyoment) alle Dateien zu Ansible. Sie müssen sich auf dem Server per SSH verbinden können. Dort wird am besten die `inventory/example.yml` als Vorlage ausgewählt und umbenannt. In unserem Fall bspw. `tavias.de.yml`. Überall, wo in der Bedeutung "Anpassen:" steht, muss Ihre Konfiguration zwingend angepasst werden!


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

### Instance Config
Damit die einzelnen Instanzen an die eigene Organisation oder Kampagne angepasst werden können, gibt es die [instanceConfig.ts](https://github.com/Der-Smarte-Gemeinschaftskalender/der-smarte-gemeinschaftskalender/blob/main/frontend/src/lib/instanceConfig.ts)

Dies ist eine Standarddatei, die ausgetauscht werden kann. Mit dieser Datei lassen sich verschiedene Einstellungen für die Instanz vornehmen, z. B.:
- die Anzeige der Verlinkung auf externe Navigationsdienste `showPhysicalAddressRouting`
- die Arten der Erstellung von Terminen `allowedEventCreationsMethods`
- Welche Texte auf der Startseite angezeigt werden, welche Bereiche angezeigt werden und wie Termine angezeigt werden: `landingPage`
- Standardwerte für die Suchfilter, z. B. ein bestimmtes Gebiet: `searchDefaults`
- Welche Texte und Links im Haupt-Header angezeigt werden: `mainHeader`
- Standardwerte für die Kategorie beim Erstellen eines neuen Termins: `createEventDefaults`
- Je nach Konfiguration kann für Veranstaltungen, die kein eigenes Bild hinterlegt haben, das Standardbild abhängig von der Kategorie angezeigt werden `defaultEventImageBasedOnCategory`
- Standard-Kartenzentrierung und Kartenausschnitt: `eventsMap`

**Hinweis:** Der Geohash kann aus den Geo-Koordinaten erstellt werden – z. B. [mit diesem Online-Tool](https://www.movable-type.co.uk/scripts/geohash.html).

### Default Dateien

Mit der Instance Config lässt sich nicht nur die Instanz personalisieren, sondern es lassen sich auch sehr viele Dateien austauschen. Im Repository gibt es daher das Projekt `example-termine.di.day.yml` und den Ordner `deploy/roles/dsgdev/files/example-termine.di.day`, in dem sich die Beispiele für die Anpassungen von [termine.di.day](https://termine.di.day/) befinden. Der Ordner muss dabei genauso heißen wie die YAML-Datei. Es werden nur die Anpassungen übernommen, die im Ordner hinterlegt sind. Für den Rest werden die Standarddateien verwendet. 

Die genaue Liste der Anpassungsmöglichkeiten befinden sich in folgender Datei: [deplyoment/roles/dsgdev/tasks/main.yml](https://github.com/Der-Smarte-Gemeinschaftskalender/der-smarte-gemeinschaftskalender/blob/main/deplyoment/roles/dsgdev/tasks/main.yml)

Liste der möglichen Anpassungen:
- Logo `logo.png`
- Startseiten Bild `notifications.png`
- Standardbild für Karten – sowohl für Veranstaltungen als auch Organisation `default_card.png`
- Ordner mit diversen Dateien für Favicons z. B. erstellt mit [realfavicongenerator.net](https://realfavicongenerator.net/) `favicons`
- Ordner mit Standardbildern für den Werbemittelgenerator `material_generator`
- Neue Konfiguration für Kategorien und Oberkategorien und `categoryOptions.ts`
- Die Instance Config (siehe oben) `instanceConfig.ts`
- Für Style Anpassungen `app.scss`
- Für Anpassungen bezüglich hinterlegte Favicons oder [Link Vorschau Informationen](https://www.seobility.net/en/wiki/Open_Graph) `index.html`

### (Strikter) Freigabemodus
Bei der Installation lässt sich der [strikte Freigabemodus](/Terminverwaltung/Instanz/#strikter-freigabemodus-strict-mode) konfigurieren. Hierbei ist zu beachten, dass bei einer bestehenden Instanz alle bestehenden Termine, Organisationen, Serientermine und Terminimporte erhalten bleiben, wenn dieser Modus geändert wird. Eine Änderung wird nicht empfohlen. 
**Wichtig:** In der `instanceConfig.ts` sollte unter `allowedEventCreationsMethods` nur `singleEvent: true` hinterlegt sein. 