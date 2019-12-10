# Welcome in Backend part made by Quentin Mulliez !

## Installation :
```bash
 npm install
 npm start
```

The MongooseBD is [already online] (so no need to start it hehe)

## Collections
There are 3 collections : 

- Sensor

- User

- Measure

Each one with a CRUD

## API

### CRUD

- C with the body : put
- R with the body : get
        id to have a unique one
        parameters with value ton finds all those which coherente
- U with the body : only the value you want to change with id : post
- D with id : delete


### Stats
And for the Satistics and particular requests

- users/personsInHouse : return how many user got 1 personInHouse, 2, 3,...,6

- sensors/numberSensors : return number of sensors in numberSensors

- sensors/lastSensors : return the n last sensor created in time (n define in the body by numberSensors)

- sensors/sensorsLocation : return a list of all location possible

- measures/lastMeasures : return numberMeasures in body last measurer from all collection

- measure/lastMeasure : return numberMeasures(in body) last measurer from all the param give in the body (like get measure)

- measures/timeMeasures : return a list of hours and number of measure done at this hours

- measures/timeMeasuresType : same but in the body you specify the type of measure (humidity, temperature, ...)

## Remarques

Bon... il se peut que je me sois rendu compte au dernier moments que certaines requetes (comme le delete) ne fonctionais pas avec un body en req d'envoie mais seulement des params ...
Du coup il se peut que j'ai remplacer ça un peu à l'arache et pas proprement... désole !