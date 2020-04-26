# Parkingapp Parkade
Via de app kun je gemakkelijk het aantal vrije parkeerplaatsen raadplegen van op afstand.

# Hosting
Op dit moment werd voor de applicatie reeds de domeinnaam met .be TLD gereserveerd, aangezien de applicatie nog niet afgewerkt is staat deze dus nog niet online. Voor de presentatie zal de applicatie online worden geplaatst (hopelijk).

https://www.parkade.be/

# OpenStreetMap
De applicatie maakt gebruik van OpenLayers en OpenStreetMap om de parkings op een kaart te kunnen visualiseren.

# Huidige problemen
- Bij het wegschrijven van een entry naar de databank maak ik gebruik van de time functie in SQL server. Echter loopt het uur steeds 4 uur achter op het werkelijke uur. Dit terwijl de server time wel goed staat. Op dit moment vormt dit geen groot probleem aangezien ik enkel het laatste tijdstip overneem in de webapplicatie, echter wanneer ik data analyses wil gaan uitvoeren zal dit voor problemen geven. Er gewoon 4 uur bijtellen zou dit probleem kunnen oplossen

# Angular readme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
