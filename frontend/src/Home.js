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

var dataTasks = [{ name: "task 1", description: "ma description ouf" }, { name: "task 2", description: "The description ouf qui est beaucoup trop long donc elle va durer super mega longtemps lol mdrrr" }];


class Home extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md='8'className="mainWidget">
                        <Row>
                            <Col className="widgetList"><Todo tasks={dataTasks}></Todo></Col>
                            <Col className="widgetTreso"><Graph/></Col>
                        </Row>
                        <Row>
                            <Col className="widgetNumberSensor">
                                <Number sensorsNumber="4"/>
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