import React from 'react';
import './App.css';
import './Number.js';
import { Container, Row, Col } from 'react-bootstrap';

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
              <Col className="widgetList">Widget To do List</Col>
              <Col className="widgetTreso">Widget Tresorie</Col>
            </Row>
            <Row>
              <Col className="widgetCal">Widget Semaine</Col> 
              <Col className="widgetMembre">Widget Nombre Membre</Col>
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
