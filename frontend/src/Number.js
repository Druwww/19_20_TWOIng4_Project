import React from 'react';
import './App.css';
import './Number.css';
const axios = require('axios');


class Number extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            numberSensor : 0
        }
        
        

        //Normalement bonsoir doit contenir le nombre de capteur dans la BDD
        //Mais la réponse de requette arrive après...
        // console.log(bonsoir);

        // this.state = {
        //     numberSensor : bonsoir
        // }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/sensors/numberSensors')
        .then(response => {
            // handle success
            console.log(response.data.numberSensor);

            this.setState({numberSensor : response.data.numberSensor});

            console.log(this.state.numberSensor);
            // return response.data.numberSensor;
        });
    }

    render() {
        return (
            <div>
                <p className="simpleText"><strong>Vous avez :</strong></p>
                <p className = "sensorNumber"> {this.state.numberSensor}</p>
                <p className="simpleText"> <strong>utilisateurs !</strong></p>               
            </div>
        );
    }
}

export default Number;