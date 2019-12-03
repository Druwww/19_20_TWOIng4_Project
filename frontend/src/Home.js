import React from 'react';
import './Home.css';
import {Row, Col} from 'react-bootstrap';
import './App.css';
import Graph from './Graph.js';
import Todo from './Todo.js'
import Camembert from './Camembert.js'
import Number from './Number.js';
import './Number.css'
import Calendar from './Calendar.js';
import './Calendar.css';

var dataTasks = [{ name: "task 1", description: "ma description ouf" }, { name: "task 2", description: "The description ouf qui est beaucoup trop long donc elle va durer super mega longtemps lol mdrrr" }];


class Home extends React.Component {
    render() {
        return (
            <div className="background">
                <Row>
                    <Col md='8' className="mainWidget">
                        <Row>
                            <Col className="widgetList"><Todo tasks={dataTasks}></Todo></Col>
                            <Col className="widgetTreso"><Graph></Graph></Col>
                        </Row>
                        <Row>
                            <Col className="widgetCal">Widget Semaine
                                <Calendar></Calendar>
                            </Col>
                            <Col className="widgetNumberSensor">
                                <Number sensorsNumber="4"></Number>
                            </Col >
                            <Col className="widgetBudget"><Camembert></Camembert></Col>
                        </Row>
                    </Col>
                    <Col className="mainWidget">réseaux sociaux</Col>
                </Row>
            </div>
        );
    }
}
export default Home;