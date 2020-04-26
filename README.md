# Parkingapp Parkade
Via de app kun je gemakkelijk het aantal vrije parkeerplaatsen raadplegen van op afstand.

# Hosting
Op dit moment werd voor de applicatie reeds de domeinnaam met .be TLD gereserveerd, aangezien de applicatie nog niet afgewerkt is staat deze dus nog niet online. Voor de presentatie zal de applicatie online worden geplaatst (hopelijk).

https://www.parkade.be/

# OpenStreetMap
De applicatie maakt gebruik van OpenLayers en OpenStreetMap om de parkings op een kaart te kunnen visualiseren.

# Huidige problemen
- Bij het wegschrijven van een entry naar de databank maak ik gebruik van de time functie in SQL server. Echter loopt het uur steeds 4 uur achter op het werkelijke uur. Dit terwijl de server time wel goed staat. Op dit moment vormt dit geen groot probleem aangezien ik enkel het laatste tijdstip overneem in de webapplicatie, echter wanneer ik data analyses wil gaan uitvoeren zal dit voor problemen geven. Er gewoon 4 uur bijtellen zou dit probleem kunnen oplossen.
- In de front end applicatie kan ik niet aan de data van mijn API in mijn map component. 


