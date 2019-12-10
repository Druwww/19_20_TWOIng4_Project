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
            this.setState({numberSensor : response.data.numberSensor});
        });
    }
    render() {
        return (
            <p>{this.state.numberSensor}</p>
        );
    }
}

export default Number;