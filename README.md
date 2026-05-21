# TaskManager

> Eine moderne Webanwendung zur Verwaltung von Aufgaben – entwickelt als Lernprojekt für betriebliche Webanwendungen mit React und Spring Boot.

Eine übersichtliche und benutzerfreundliche Single-Page-Application (SPA), mit der man Tasks erstellen, bearbeiten, löschen und verwalten kann. Das Projekt zeigt moderne Frontend- und Backend-Architektur in der Praxis.

**Kursaufbau & Entwicklung**  
Dieses Projekt wurde im Rahmen eines 6-teiligen Kurses entwickelt. Jeder Termin entspricht einem eigenen Git-Branch (`termin-1` bis `termin-6`). Die Anwendung wird Woche für Woche schrittweise erweitert und verbessert – von einer einfachen Grundversion bis hin zu einer professionellen, modernen Webanwendung mit Komponentenbibliothek, sauberer Architektur und responsivem Design.

## ✨ Features

- **Dashboard mit Live-Statistiken** – Übersicht über offene, in Bearbeitung, abgeschlossene und blockierte Tasks
- **Vollständige Task-Verwaltung** – Erstellen, Bearbeiten und Löschen von Aufgaben
- **Responsives Design** – Funktioniert auf Desktop und Mobile
- **Saubere Architektur** – Trennung von Übersicht (Dashboard) und Bearbeitung (TaskManagement)
- **Zentrale State-Verwaltung** – Wiederverwendbare Custom Hooks mit `useReducer`
- **Professionelles UI** – Modernes Design mit Material UI
- **Vollständige Validierung** – Klare Fehleranzeige bei ungültigen Eingaben

### Projektstruktur 

```text
web-taskmanager/
│
├── frontend/                              # React + Vite + TypeScript + MUI
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.tsx              # Übersichtsseite mit QuickStats
│   │   │   ├── TaskManagement.tsx         # Hauptseite: Form + Liste (responsive)
│   │   │   ├── TaskForm.tsx               # Formular zum Erstellen/Bearbeiten
│   │   │   ├── TaskList.tsx               # Reine Listen-Komponente (Props-basiert)
│   │   │   ├── QuickStats.tsx             # Dynamische Statistik-Karten
│   │   │   ├── TaskFormField.tsx          # Wiederverwendbares Eingabefeld
│   │   │   ├── ValidationErrorDisplay.tsx # Fehleranzeige
│   │   │   └── Layout.tsx                 # Gemeinsames Layout + Navigation
│   │   │
│   │   ├── hooks/
│   │   │   ├── useTasks.tsx               # Zentrale Task-State-Verwaltung (useReducer)
│   │   │   └── useTaskForm.tsx            # Formular-Logik + Validierung (useReducer)
│   │   │
│   │   ├── services/
│   │   │   └── taskService.ts             # API-Kommunikation
│   │   │
│   │   ├── App.tsx                        # Einstiegspunkt + Routing + ThemeProvider
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── backend/                               # Spring Boot 3 + Java 21
│   ├── src/main/java/de/sp/taskmanager/
│   │   ├── controller/
│   │   │   └── TaskController.java
│   │   │
│   │   ├── model/
│   │   │   ├── Task.java
│   │   │   └── TaskStatus.java            # Enum: OPEN, IN_PROGRESS, COMPLETED, BLOCKED
│   │   │
│   │   ├── repository/
│   │   │   └── TaskRepository.java
│   │   │
│   │   ├── service/
│   │   │   └── TaskService.java
│   │   │
│   │   ├── init/
│   │   │   └── DataInitializer.java       # Beispieldaten beim Start
│   │   │
│   │   └── TaskManagerApplication.java
│   │
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── data.sql (optional)
│   │
│   └── build.gradle
│
└── README.md
```

### Voraussetzungen
- Java 21 (oder höher)
- Node.js 24.15.0 (oder höher) und npm 11.12.1
- IntelliJ IDEA (empfohlen) oder ein anderer IDE
- Internetverbindung (zum ersten Mal für das Herunterladen der Dependencies)

### Anwendung starten

#### Mit Maven

```bash
# 1. Root-Projekt bauen
./mvnw clean install

# 2. Backend starten (in separatem Terminal)
./mvnw -pl backend spring-boot:run 

# 3. Frontend Development-Server starten (in separatem Terminal)
./mvnw -pl frontend frontend:npm@npm-dev
```

#### Mit Gradle

```bash
# 1. Root-Projekt bauen
./gradlew clean build

# 2. Backend starten (in separatem Terminal)
./gradlew :backend:bootRun

# 3. Frontend Development-Server starten (in separatem Terminal)
./gradlew :frontend:frontendDev
```

### Wichtige URLs

- **React Frontend (Development)**: `http://localhost:5173`
- **REST-API**: `http://localhost:8080/api/tasks`
- **Swagger-UI**: `http://localhost:8080/swagger-ui.html`

### Login-Daten (Basic Auth für React-Frontend)

| Benutzer  | Passwort  | Rolle   |
|-----------|-----------|---------|
| `user`    | `password`| USER    |
| `admin`   | `admin`   | ADMIN   |

### Tests ausführen

- Alle Tests: Rechtsklick auf `src/test` → **Run Tests**
- Oder per Maven: `./mvnw clean test`
- Oder per Gradle: `./gradlew test`

### Weitere Hinweise

Alle Klassen und Konfigurationsdateien enthalten ausführliche Kommentare mit **Good Practices**.

Das Projekt ist bewusst so aufgebaut, dass sowohl Maven als auch Gradle parallel verwendet werden können.
 
Falls du Fragen hast oder mitentwickeln möchtest – einfach reinschauen und ausprobieren. Viel Spaß beim Entdecken! 🚀

---

## Lizenz

Dieses Projekt steht unter der [MIT License](LICENSE).