import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
const axios = require('axios');

class AddUserForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location: "",
            personsInHouse: "",
            houseSize: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault(); 
        const data1 = new FormData(event.target);
        // const form = new FormData(document.getElementById('login-form'));
        
        const myData = {
            location : data1.get('location'),
            personsInHouse : data1.get('personsInHouse'),
            houseSize : data1.get('houseSize')   
        }

        console.log(myData);


        axios({
            method: 'PUT',
            url: 'http://localhost:3000/user',
            body: myData, 
            headers: {"Content-Type": "text/plain"}
        })
        .then(response => {
            console.log(response);
        });
    }
    
    render(){
        return(
            <div>
                <Row>
                    <Col>                    
                        <Form className="formFormat" onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Adresse Personnelle</Form.Label>
                                <Form.Control 
                                name="location"
                                id="location"
                                placeholder="France" 
                                type="text"
                                />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Nombre d'habitants</Form.Label>
                                    <Form.Control
                                    name="personsInHouse" 
                                    id="personsInHouse"
                                    placeholder="1, 2, ..." 
                                    type="text"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label>Taille</Form.Label>
                                    <Form.Control
                                    name="houseSize"
                                    id="houseSize"
                                    placeholder="small, medium, big" 
                                    type="text"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Button variant="primary" type="submit">
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