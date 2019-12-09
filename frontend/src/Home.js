import React from 'react';
import './Home.css';
import {Row, Col} from 'react-bootstrap';
import Graph from './Graph.js';
import Todo from './Todo.js'
import Camembert from './Camembert.js'
import Number from './Number.js';
import './Number.css'
import Calendar from './Calendar.js';
import './Calendar.css';
import SocialNetwork from './SocialNetwork.js';

class Home extends React.Component {
    render() {
        return (
                <Row>
                    <Col md='8'className="mainWidget">
                        <Row>
                            <Col className="widgetList">
                            <p className="listTitle"><strong>DERNIERS CAPTEURS AJOUTES</strong></p>
                                <Todo/>
                            </Col>
                            <Col className="widgetTreso">
                                <p className="listTitle"><strong>NOMBRE DE CAPTEURS PAR PIECE</strong></p>
                                <Graph/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="widgetNumberSensor">
                                <p className="simpleText"><strong>Vous avez :</strong></p>
                                <p className="sensorNumber" ><Number /></p>
                                <p className="simpleText"> <strong>capteurs installés !</strong></p> 
                            </Col >
                            <Col className="widgetBudget">
                                <Camembert/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="widgetCal">
                                <Calendar/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md='3' className="widgetSocial">
                        <SocialNetwork/>
                    </Col>
                </Row>
        );
    }
}
export default Home;