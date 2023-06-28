# Pokedex


In diesem Projekt werden 30 Pokemons angezeigt inkl. einer Detailseite pro Pokemon, wo weiter Infos zu finden sind.


## Inhaltsverzeichnis


- [Installation](#installation)

- [Verwendung](#verwendung)

- [Start](#start)


## Installation


Nachfolgend findest du die einzelnen Schritte um die nötigen Programme zu installieren, damit die Webseite auch über den Port 3000 laufen kann.


```shell

$ npm install

$ npm init

$ npm install pug-cli

$ npm install express

```

## Verwendung

Mit der index.pug kreiieren wir die Startseite, wo alle Pokemons angezeigt werden.


```shell

$ pug -w index.pug -o .public -P

```

In der index.js können wir automatisiert die ganzen Detailseiten für die Pokemons erstellen.

```shell

$ node index.js

```

## Start

Mit diesem Befehl können wir den Server starten.

```shell

$ node serverExpress.js

```