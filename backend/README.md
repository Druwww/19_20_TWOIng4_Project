Welcome in Backend part made by Quentin Mulliez !

Installation :

- npm install

- npm start

The MongooseBD is already online (so no need to start it hehe)

There is 3 collections : 
- Sensor

- User

- Measure

Each one with a CRUD

- C with the body
- R with the body
        id to have a unique one
        parameters with value ton finds all those which coherente
- U with the body : only the value you want to change with id
- D with id

And for the Satistics and particular requests :

-sensors/numberSensors : return number of sensors in numberSensors
-measures/lastMeasures : return numberMeasures in body last measurer from all collection