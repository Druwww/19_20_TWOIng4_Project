import React from 'react';
import './App.css';
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
              <Col>Widget Tresorie</Col>
            </Row>
            <Row>
              <Col>Widget Calendrier</Col>
              <Col>Widget Nombre Membre</Col>
              <Col>Widget Budget</Col>
            </Row>
          </Col>
          <Col className="mainWidget">réseau sociaux</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
