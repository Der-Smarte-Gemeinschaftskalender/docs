
[« Zurück](/get-started)

# Hosting

**Hinweis:** Weitere Inhalte zu diesem Bereich werden zeitnah ergänzt.

## Hinweise zur Instanzadministration

Der initiale **Instanzadministrator**, der bei der technischen Einrichtung des Systems angelegt wird, sollte **nicht** für die Erstellung von Organisationen oder Benutzerprofilen verwendet werden. Dieser Administrator dient ausschließlich der **übergeordneten Instanzverwaltung** (z. B. technische Konfiguration, Systempflege).

Es wird empfohlen, sich nach der Einrichtung **mindestens einen weiteren Benutzeraccount anzulegen** und diesen über den initialen Administrator im Bereich "Nutzer*innen verwalten" zum **Instanzadministrator** zu machen.

Alle über diesen Weg angelegten Instanzadministratoren können anschließend wie gewohnt Organisationen erstellen, freigeben, Instanzmitglieder verwalten, Instanzadministrationsrechte vergeben und weitere Aufgaben übernehmen.  

Es können beliebig viele Administratoren mit Instanzrechten existieren. Diese Rechte sollten jedoch mit Bedacht vergeben werden.

## Wichtige Infos für die erste Installation

Bei der ersten Installation legen wir den oben benannten Benutzer für die Instanzadministration an. Bevor sich die ersten Nutzer:innen registrieren können, muss in der Mobilizon-Oberfläche zunächst die Registrierung freigeschaltet werden. Aus Sicherheitsgründen ist diese immer zunächst deaktiviert. Das kannst du in der Oberfläche des smarten Gemeinschaftskalenders machen, indem du über das Seitenmenü auf „Instanz verwalten” => „Zur Instanzverwaltung auf Mobilizon” (mit den Zugangsdaten von der Seite) gehst, dann in der dortigen Oberfläche auf „Administration” => „Einstellungen der Instanz” und bei „Erlaube Registrierungen” Registrierungen erlaubst. Anschließend natürlich speichern.

## Server, Domain und Mailing

Um eine eigene Instanz des smarten Gemeinschaftskalenders zu hosten, benötigst du einen Server. Je nachdem, wie viele Nutzende du erwartest und wie viele Termine du speichern möchtest, muss dieser unterschiedlich groß sein. Für den Anfang reicht etwas zwischen 2 vCPU/4 GB RAM und 4 vCPU/12 GB RAM. Außerdem brauchst du mindestens eine (Sub-)Domain, unter der die Instanz erreichbar ist, sowie eine weitere Subdomain für die Mobilizon-Installation. Mobilizon wird von unseren Installationsmöglichkeiten direkt mitinstalliert. Um E-Mails zu verschicken, benötigst du auch einen Mailpostfach mit SMTP-Zugangsdaten. Diese kannst du in der Konfiguration hinterlegen. 
Einen Server oder V-Server kann man zum Beispiel - sehr nachhaltig bei z.B. [Windcloud](https://shop.windcloud.de/store/virtual-private-server) mieten. Es gibt aber auch noch andere Anbieter wie z.B.: [Hetzner](https://www.hetzner.com/de/cloud/) oder [Netcup](https://www.netcup.com/de/server/vps) 

## Ansible

[Ansible](https://docs.ansible.com/) ist eine Plattform zur IT-Automatisierung, die komplexe administrative Aufgaben vereinfacht und standardisiert. Man kann damit sehr gut wiederkehrende Prozesse ("Infrastructure as Code") zeitsparend abbilden, damit ist die Installtation von dem Smartern Gemeinschaftskalender zeitsparen und reproduzierbar. Wir Empfehlen diese art der Installation.

 Um zu starten brauchst du einen einen (V-)Server  und einen Rechner mit installierten Ansible. Die Informationen dazu findest auf auf der Ansible Webseite. Innerhalb des Repositories gibt es im Order ["deployment"](https://github.com/Der-Smarte-Gemeinschaftskalender/der-smarte-gemeinschaftskalender/tree/main/deplyoment) alle Dateien zu Ansible. Ihr müsst euch auf dem Server per SSH verbinden können. Dort nimmst du am besten die `inventory/example.yml` als Vorlage und bennst diese um. In unserem Fall für `tavias.de.yml`. Überal wo in der Bedeutung "Anpassen:" steht, müssen auf deine Konfiguration zwingend angepasst werden!

`
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
| frontend_instance_name | "TAViAS" | Anpassen: Name der Frontend-Instanz |
| frontend_landing_page_description | "Termine in..." | BAnpassen: eschreibungstext für die Startseite |
| frontend_operated_by | "Amt Süderbrarup" | Anpassen: Name des Betreibers der Instanz |
| frontend_search_location_address | "24392 Süderbrarup" | Anpassen: Standardadresse für die Ortssuche |
| frontend_search_location_geo_hash | "u1wyy3xs" | Anpassen: Geohash für die Standard-Suchposition |
| frontend_search_target | "INTERNAL" | Anpassen: Ziel der Suche (intern oder extern) |

Wenn ihr das alles richtig konfiguriert habt, müsst ihr einfach nur noch `ansible-playbook -i inventory/tavias.de.yml playbook.yml` ausführen.

** Wichtig: ** Beachtet die Punkte von `Wichtige Infos für die erste Installation`. 

** Hinweis: ** Den Geocash könnt ihr aus den Geo Koordinaten erstellen. Z.B. [mit diesem Online Tool](https://www.movable-type.co.uk/scripts/geohash.html).