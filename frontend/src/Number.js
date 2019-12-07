import React from 'react';
import './App.css';
import './Number.css';
import { Container, Row, Col } from 'react-bootstrap';

/*To use : 
<Col className="widgetNumberSensor"> 
    <Number sensorsNumber="4"></Number>
</Col >
*/
const sensorsNumber = '0';

class Number extends React.Component {

    constructor(props){
        super(props);

    }
    render() {
        return (
            <div>
                <p className="simpleText"><strong>Vous avez :</strong></p>
                <p className = "sensorNumber"> {this.props.sensorsNumber}</p>
                <p className="simpleText"> <strong>utilisateurs !</strong></p>               
            </div>
        );
    }
}

export default Number;