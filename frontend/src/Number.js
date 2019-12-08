import React from 'react';
import './App.css';
import './Number.css';
const axios = require('axios');


export default class Number extends React.Component {

    constructor(props){
        super(props);

        
        
        var bonsoir =  axios.get('http://localhost:3000/sensors/numberSensors')
        .then(function (response) {
            // handle success
            console.log(response.data.numberSensor);
            return response.data.numberSensor;
        })

        //Normalement bonsoir doit contenir le nombre de capteur dans la BDD
        //Mais la réponse de requette arrive après...
        console.log(bonsoir);

        this.state = {
            numberSensor : bonsoir
        }
    }

    render() {
        return (
            <div>
                <p className="simpleText"><strong>Vous avez :</strong></p>
                <p className = "sensorNumber"> {this.state.sensorsNumber}</p>
                <p className="simpleText"> <strong>utilisateurs !</strong></p>               
            </div>
        );
    }
}

// export default Number;