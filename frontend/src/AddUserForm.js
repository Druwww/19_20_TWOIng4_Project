import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
const axios = require('axios');

class AddUserForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location:null,
            personsInHouse: null,
            houseSize: null
        }
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });

    };

    onSubmit = () => {
        
    }

    render(){
        return(
            <div>
                <Row>
                    <Col>                    
                        <Form className="formFormat" method="POST" onsubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Adresse Personnelle</Form.Label>
                                <Form.Control 
                                name="location"
                                placeholder="1234 Main St" 
                                value={this.state.location} 
                                onChange={e => this.change(e)}/>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Nombre d'habitants</Form.Label>
                                    <Form.Control
                                    name="personsInHouse" 
                                    type="number" 
                                    value={this.state.personsInHouse}
                                    onChange={e => this.change(e)}/>
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label>Taille (m²)</Form.Label>
                                    <Form.Control
                                    name="houseSize"
                                    type="number" 
                                    value={this.state.houseSize} 
                                    onChange={e => this.change(e)}/>
                                </Form.Group>
                            </Form.Row>

                            <Button variant="primary" type ="submit" onClick={() => this.onsubmit()}>
                                Submit
                            </Button>
                        </Form>
                 
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AddUserForm;