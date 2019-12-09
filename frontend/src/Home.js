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
            <div>
                <Row>
                    <Col md='8'className="mainWidget">
                        <Row>
                            <Col className="widgetList"><Todo></Todo></Col>
                            <Col className="widgetTreso"><Graph/></Col>
                        </Row>
                        <Row>
                            <Col className="widgetNumberSensor">
                                <Number/>
                            </Col >
                            <Col className="widgetBudget"><Camembert/></Col>
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
            </div>
        );
    }
}
export default Home;