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
    }
    componentDidMount(){
        axios.get('http://localhost:3000/sensors/numberSensors')
        .then(response => {
            console.log(response.data.numberSensor);

            this.setState({numberSensor : response.data.numberSensor});
        });
    }
    render() {
        return (
            <div>
                <p className="simpleText"><strong>Vous avez :</strong></p>
                <p className = "sensorNumber"> {this.state.numberSensor}</p>
                <p className="simpleText"> <strong>Capteur !</strong></p>               
            </div>
        );
    }
}

export default Number;