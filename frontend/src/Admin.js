import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Admin.css';
import './App.css';

class Admin extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col className="menuBar">L'Admin</Col>
                </Row>
            </div>
        )
    }
}
export default Admin;