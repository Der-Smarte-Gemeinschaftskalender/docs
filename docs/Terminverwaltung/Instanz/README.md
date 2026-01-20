
[« Zurück](/get-started)

# Instanzadministration

Die **Instanzverwaltung** richtet sich an Administrator*/innen, die eine eigene Instanz des *Smarten Gemeinschaftskalenders* betreiben.  

Die Instanzadministration umfasst 3 Reiter im linken Seitenmenü der internen Benutzeroberfläche:
- **[Organisationen verwalten](#organisationen-verwalten):** Hier sehen Sie alle aktiven und angefragten Organisationen Ihrer Instanz.
- **[Nutzer*innen verwalten](#nutzer-innen-verwalten):** Hier erhalten Sie eine Gesamtübersicht der Benutzer*innen mit Zugriff auf den Veranstaltungskalender und können diese bearbeiten.
- **[Instanz verwalten](#instanz-verwalten):** Hier können Sie grundlegende Einstellungen Ihrer Organisation vornehmen.

## Organisationen verwalten

Über den Reiter **Organisation verwalten** erhalten Administrator*innen eine Übersicht über alle Organisationen und organisationsanfragen der Instanz.  

Die Ansicht ist in zwei Bereiche unterteilt:

- **Angefragte Organisationen**  
  Hier erscheinen Organisationen, die ein Profil auf der Instanz beantragt haben.  
  Eine Anfrage muss von der Instanzadministration **bestätigt werden**, bevor die Organisation freigeschaltet ist und Veranstaltungen veröffentlichen kann.  

- **Aktive Organisationen**  
  In dieser Tabelle finden Sie alle bereits freigeschalteten Organisationen.  
  Über den Button **Ansehen** gelangen Sie direkt zur öffentlichen Seite der jeweiligen Organisation.  

Damit behalten Administrator*innen jederzeit den Überblick, welche Organisationen neu hinzukommen möchten und welche bereits aktiv am Kalender teilnehmen.

## Nutzer*innen verwalten

Über den Reiter **Nutzer*\innen verwalten** erhalten Administrator*innen eine Übersicht über alle Personen, die Zugriff auf den Veranstaltungskalender der Instanz haben.  

### Nutzer*innen-Übersicht
In der Tabelle sehen Sie alle vorhandenen Nutzer*innen mit folgenden Angaben:  
- **Identifikationsnummer (ID)**
- **Vorname und Nachname**  
- **E-Mail-Adresse**  
- **Typ** – entweder *Benutzer* oder *Administrator*  
- **Status** – aktiv oder inaktiv  

Über die Schaltfläche **Ansehen** gelangen Sie zu den Profildaten einer Person und können diese bearbeiten.  
Sowohl in der Detailansicht als auch direkt in der Übersicht besteht die Möglichkeit, Nutzer*innen zu **löschen**.

### Neue Nutzer*innen anlegen
Über die Aktion **Neu anlegen** (oben rechts) können Sie ein neues Profil erstellen.  
Dafür geben Sie folgende Informationen an:  
- Vorname  
- Nachname  
- E-Mail-Adresse  
- Passwort  
- Typ (*Benutzer* oder *Administrator*)  
- Status (*aktiv* oder *inaktiv*)  

Mit einem Klick auf **Benutzer anlegen** wird das Profil gespeichert und steht anschließend in der Übersicht zur Verfügung. Neue Nuttzer*innen können sich dann [mit ihrem Benutzernamen zu einer Organisation einladen lassen](/Terminverwaltung/Organisation/#nachste-schritte). 

## Strikter Freigabemodus (Strict Mode)

Der strikte Freigabemodus ist eine Konfigurationsoption des Smarten Gemeinschaftskalenders, die der Instanzadministration eine erweiterte Kontrolle über veröffentlichte Inhalte ermöglicht. Anfragen zur Erstellung oder Bearbeitung von Terminen und Organisationen müssen vor der Veröffentlichung durch die Instanzadministration genehmigt werden.

Der Strict Mode stellt eine grundlegende Konfigurationsentscheidung dar und wird beim initialen [Hosting](https://der-smarte-gemeinschaftskalender.de/Entwicklungsbereich/Hosting/) festgelegt.

In diesem Abschnitt werden die Besonderheiten des Freigabemodus sowie der zugehörige Freigabeprozess erläutert.

### Terminfreigabe – (Strict Mode)

Im **strikten Freigabemodus** steht Instanzadministrator*innen im Administrationsbereich der zusätzliche Menüpunkt **Terminfreigabe** zur Verfügung. Dieser wird ausschließlich angezeigt, wenn der Strict Mode aktiviert ist und eine Anmeldung mit administrativen Rechten erfolgt.

#### Übersicht offener Terminanfragen

Im Bereich Terminfreigabe wird eine Tabellenansicht angezeigt, die **alle offenen Anfragen zur Terminerstellung sowie zur Bearbeitung bereits genehmigter Termine** umfasst. Jede Tabellenzeile repräsentiert eine einzelne Genehmigungsanfrage und enthält unter anderem Informationen zur Art der Aktion, zum Titel des Termins, zur Person, die die Anfrage erzeugt hat sowie zum Zeitpunkt der Anfrage.

Über den Button **„Ansehen“** gelangen Sie zur **Terminfreigabe – Detailansicht**.

#### Terminfreigabe – Detailansicht

In der Detailansicht werden sämtliche Angaben angezeigt, die von der Organisation im Rahmen der Terminerstellung oder -bearbeitung hinterlegt wurden. Die Darstellung entspricht inhaltlich dem Formular zur Terminerstellung und ermöglicht eine vollständige fachliche Prüfung des Termins.

Zusätzlich werden zu Beginn der Ansicht folgende für die Freigabe relevante Metadaten hervorgehoben:

- **Aktion**  
  Gibt an, ob es sich um eine **neue Terminerstellung** oder um die **Bearbeitung eines bereits genehmigten Termins** handelt.

- **Organisation**  
  Die Organisation, unter deren Namen der Termin veröffentlicht werden soll bzw. wurde.

- **ID**  
  Automatisch vergebene einzigartike Kennummer für Termine und Organisationen.

- **Erstellt von**  
  Der/die Nutzer*in, die den Termin bzw. die Terminänderung erzeugt hat.

- **Erstellt am**  
  Der Zeitpunkt, zu dem die Genehmigungsanfrage eingereicht wurde.


**Funktion: Kommentar der Administration**

Im unteren Bereich der Detailansicht steht ein **optionales Kommentarfeld** zur Verfügung. Dieses ermöglicht der Instanzadministration, der Organisation bzw. dem/der anfragenden Nutzer*in gezielt Rückmeldungen zu übermitteln.

Der Kommentar kann beispielsweise genutzt werden:

- zur Begründung einer **Ablehnung**, um eine überarbeitete, genehmigungsfähige Anfrage zu ermöglichen,
- zur **Hinweisgebung bei Genehmigungen**, etwa mit der Bitte um ergänzende Angaben (z. B. das Nachreichen eines Bildes),
- zur allgemeinen fachlichen Rückmeldung.

Der hinterlegte Kommentar wird nach der Entscheidung **automatisch per E-Mail** an die anfragende Stelle übermittelt.

#### Entscheidung über die Anfrage

Am Ende der Detailansicht kann die Terminanfrage über die entsprechenden Aktionen **genehmigt** oder **abgelehnt** werden.  
Erst nach Genehmigung wird der Termin bzw. die Terminänderung in der **öffentlichen Kalenderansicht** veröffentlicht.


### Organisationsfreigabe – (Strict Mode)

Die **Organisationsfreigabe** ist im Smarten Gemeinschaftskalender grundsätzlich **immer genehmigungspflichtig**. Unabhängig vom aktivierten Modus müssen neu angelegte Organisationen vor ihrer Veröffentlichung durch die Instanzadministration freigegeben werden.  

Im **strikten Freigabemodus (Strict Mode)** wird diese Genehmigungspflicht zusätzlich auf **Änderungen an bestehenden Organisationsinformationen** ausgeweitet. Änderungen an Organisationsdaten werden in diesem Modus erst nach administrativer Freigabe wirksam und öffentlich sichtbar.

#### Übersicht offener Organisationsanfragen

Über den Menüpunkt **Organisationsanfragen** gelangen Instanzadministrator*innen zu einer Tabellenansicht, in der alle offenen Anfragen zur **Organisationserstellung** sowie – bei aktiviertem Strict Mode – zur **Bearbeitung bestehender Organisationen** aufgeführt sind.

Jeder Tabelleneintrag repräsentiert eine einzelne Genehmigungsanfrage. Über den Button **„Ansehen“** wird die **Detailansicht – Organisationsfreigabe** geöffnet.

#### Organisationsfreigabe – Detailansicht

In der Detailansicht werden die von der Organisation hinterlegten Informationen vollständig dargestellt und können fachlich geprüft werden.

**Hinweis:** Bei der **Erstellung einer Organisation** werden zunächst ausschließlich die folgenden Angaben abgefragt:

- **Organisationsname**
- **Benutzername der Organisation**
- **Beschreibung**

Weitere Organisationsinformationen können erst **nachträglich durch eine Bearbeitung** ergänzt werden. Dazu zählen:

- **Profilbild**
- **Adresse**

Diese ergänzenden Angaben unterliegen im Strict Mode ebenfalls der Genehmigungspflicht durch die Instanzadministration.

Zu Beginn der Detailansicht werden zudem folgende Metadaten angezeigt:

- **Aktion**  
  Kennzeichnet, ob es sich um eine **neue Organisationserstellung** oder um die **Bearbeitung einer bestehenden Organisation** handelt.

- **ID**  
  Automatisch vergebene einzigartike Kennummer für Termine und Organisationen.

- **Erstellt von**  
  Der/die Nutzer*in, die die Organisation oder die Änderung angelegt hat.

- **Erstellt am**  
  Der Zeitpunkt der Einreichung der Genehmigungsanfrage.

#### Kommentar der Administration

Analog zur Terminfreigabe steht in der Detailansicht ein **optionales Kommentarfeld** zur Verfügung. Dieses ermöglicht es der Instanzadministration, der Organisation gezielt Rückmeldungen zu übermitteln, beispielsweise zur Begründung einer Ablehnung oder zur Benennung gewünschter Anpassungen.

Der hinterlegte Kommentar wird nach der Entscheidung **automatisch per E-Mail** an den/die Ersteller*in der Genehmigungsanfrage übermittelt.

#### Entscheidung über die Anfrage

Am Ende der Detailansicht kann die Anfrage zur Organisationserstellung oder -änderung **genehmigt** oder **abgelehnt** werden. Organisationen und geänderte Organisationsinformationen werden erst nach erfolgreicher Freigabe **öffentlich im Kalender angezeigt**.


## Instanz verwalten

Im Gegensatz zur Organisationsverwaltung, die von Vereinen oder Institutionen genutzt wird, betrifft die Instanzverwaltung die **gesamte Installation des Kalenders**.  Hier werden grundlegende Einstellungen für die gesamte Instanz vorgenommen – beispielsweise die Bearbeitung des Instanznamens, der Nutzungshinweise oder der Texte für Datenschutzerklärungen.

Zur Instanzverwaltung gelangen Sie über die interne Benutzeroberfläche, indem Sie im linken Navigationsmenü **Instanz verwalten** auswählen. Hier können Sie Ihre Zugangsdaten einsehen. Da der *Smarte Gemeinschaftskalender* auf der Open-Source-Plattform **Mobilizon** basiert, findet die Instanzadministration auf dieser Plattform statt. Die Zugangsdaten für Mobilizon dürfen **nicht geändert werden**, da sie die Integration der Plattformen sicherstellen. 

### Verwaltung über Mobilizon

Nach dem Klick auf **Instanz verwalten** werden Sie automatisch zur Administrationsoberfläche von **Mobilizon** weitergeleitet.  
Hier können Sie die zentralen Einstellungen Ihrer Instanz bearbeiten.  

Mobilizon bildet die technische Basis des *Smarten Gemeinschaftskalenders*.  
Die hier vorgenommenen Anpassungen gelten immer **für die gesamte Instanz** und wirken sich damit auch auf alle angeschlossenen Organisationen und Veranstaltungen aus.  

#### Allgemeine Einstellungen der Instanz

Im Bereich **Einstellungen der Instanz** legen Sie grundlegende Informationen fest, z. B.:

- **Name der Instanz** – die Adresse, unter der Ihr Kalender erreichbar ist.  
- **Kontaktadresse** – für Rückfragen oder Support.  
- **Logo** – um das Erscheinungsbild Ihrer Instanz zu prägen.  


#### Regeln und rechtliche Angaben

Neben den allgemeinen Informationen können Sie außerdem:

- **Instanz-Regeln** festlegen (z. B. Verhaltensregeln, Moderationsrichtlinien).  
- die **Datenschutzerklärung** Ihrer Instanz anpassen (entweder Standard von Mobilizon übernehmen oder eine eigene einfügen).  
- ein **Impressum** hinterlegen.  

Alle hier vorgenommenen Änderungen sind sofort für die Nutzer*innen sichtbar.  

> **Achtung:** Änderungen in der Mobilizon-Instanzverwaltung sollten sorgfältig durchgeführt werden.  
> Falsche Anpassungen (z. B. am Logo, an der Domain oder an den Zugangsdaten) können dazu führen, dass die Integration mit dem *Smarten Gemeinschaftskalender* nicht mehr korrekt funktioniert. 
