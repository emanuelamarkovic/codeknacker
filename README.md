# 👾🙄🤷 codeknacker ⌨️🤔🤷🏿‍♀️

Welcome to **codeknacker**, a game developed with JavaScript, [React](https://react.dev) for dynamic user interfaces and [Vite](https://vitejs.dev) for lightning-fast development.  
Click [👉 here](https://emanuelamarkovic.github.io/codeknacker) for the game.  
_Psst! Because it's you, here are the credentials: user: 'Harry', pwd: '123'_ 😸

## TODOs

- [ M ] game logic
- [x] components
  - [x] Header
    - [x] Navigation (e.g. Dropdon)
      - [x] add logout
  - [x] Login -[X] loading spinner -[X]focus
  - [ M ] Game
    - [x] update score in userContext
  - [x] Profile
    - [x] change dummy data to userContext
    - [ ] upload function for profile pic
    - [ ] change username to display name
  - [x] Leaderboard
    - [ ] replace dummy data
- [x] Browser Router
- [x] index.css
  - [x] find colors
  - [x] find font
  - [x] px convert to em/rem
- [x] routing
  - [x] add fallback-route
  - [x] after login: go to game
- [x] contexts:
  - [x] change loginReducer to userReducer
- [ ] add intro to README
- [x] deployment

## next steps:

[🐼] database

## Spielablaufplan

### Startseite

- Der Benutzer wird auf die Startseite weitergeleitet.
- Die Startseite enthält ein Login- oder Registrierungsfeld sowie den Spielnamen.
- Der Benutzer kann sich anmelden oder registrieren.

![Erster Screen](./src/assets/01-Screen.png "01-Screen.png")

### Login- oder Registrierungsprozess

- Der Benutzer gibt seine Anmeldedaten ein oder erstellt ein neues Konto.
- Der Benutzer wird auf die Startseite weitergeleitet, wenn die Anmeldung oder Registrierung erfolgreich ist.

![Nach dem Einloggen](./src/assets/02-Screen_Eingeloggt.png "02-Screen_Eingeloggt.png")

### Startbildschirm

- Der Benutzer wird auf den Startbildschirm weitergeleitet.
- Der Startbildschirm enthält eine kurze Spielbeschreibung und zwei Schaltflächen: "Start" und "Einstellungen".

### Start

- Der Benutzer klickt auf die "Start"-Schaltfläche.
- Das Spiel beginnt.
- Das Spiel zeigt ein Rätsel an.
- Das Rätsel enthält ein Wort mit leeren Feldern.
- Jedes leere Feld hat eine Zahl daneben.

### Rätsel lösen

- Der Benutzer wählt einen Buchstaben aus.
- Der Buchstabe wird in einem der leeren Felder eingefügt.
- Das Rätsel wird aktualisiert.
- Der Benutzer wiederholt diese Schritte, bis er das Wort vollständig gelöst hat.

![Game Screen](./src/assets/03-Screen_Game.png "03-Screen_Eingeloggt.png")

### Punkte

- Für jeden Buchstaben im Lösungswort erhält der Benutzer Punkte.

### Nächstes Level

- Wenn der Benutzer das Wort löst, wird er zum nächsten Level weitergeleitet.

### Beenden

- Der Benutzer kann das Spiel jederzeit beenden.

### ( Hilfe )

- Wenn der Benutzer nicht weiterkommt, kann er auf die "Hilfe"-Schaltfläche klicken.
- Die "Hilfe"-Schaltfläche zeigt einen Buchstaben im Rätsel an.

### Technische Umsetzung

- Die Startseite wird mit React erstellt.
- Die Rätsel werden aus einer MongoDB-Datenbank geladen.
- Die Punkte werden in der Datenbank gespeichert.

### Weitere Ideen

- Das Spiel könnte mit einem Leaderboard ausgestattet werden, in dem die Spieler ihre Punktzahlen vergleichen können.
- Das Spiel könnte mit einem Fortschrittssystem ausgestattet werden, in dem die Spieler neue Levels freischalten können.
- Das Spiel könnte mit einem Multiplayer-Modus ausgestattet werden, in dem zwei Spieler gegeneinander antreten können.
