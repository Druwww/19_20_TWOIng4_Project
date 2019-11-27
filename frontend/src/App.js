import React from 'react';
import './App.css';
import Number from './Number.js';
import './Number.css'
import Calendar from './Calendar.js';
import './Calendar.css';
import Graph from './Graph.js';
import Todo from './Todo.js'
import Camembert from './Camembert.js'
import { Container, Row, Col } from 'react-bootstrap';


var dataTasks = [{name : "task 1", description :"ma description ouf"}, {name : "task 2", description :"The description ouf qui est beaucoup trop long donc elle va durer super mega longtemps lol mdrrr"}];

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="menuBar">Menu bar</Col>
        </Row>
        <Row>
          <Col md='8' className="mainWidget">6 widget gauche
            <Row>
              <Col className="widgetList"><Todo tasks={dataTasks}></Todo></Col>
              <Col className="widgetTreso">Widget Tresorie</Col>
            </Row>
            <Row>
              <Col className="widgetCal">Widget Semaine
              <Calendar></Calendar>
              </Col>
              <Col className="widgetNumberSensor">
                <Number sensorsNumber="4"></Number>
              </Col >
              <Col className="widgetBudget">Widget Budget</Col>
            </Row>
          </Col>
          <Col className="mainWidget">réseau sociaux</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
