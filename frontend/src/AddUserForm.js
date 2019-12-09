import React from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
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
        this.onChangeLocation = this.onChangeLocation.bind(this);
		this.onChangeNbPersons = this.onChangeNbPersons.bind(this);
		this.onChangeHouseSize = this.onChangeHouseSize.bind(this);
    }

	onChangeLocation(e){

		this.setState({
			location: e.target.value
        });
        
	}

	onChangeNbPersons(e) {

		this.setState({
			personsInHouse: e.target.value
        });
        
    }
    
	onChangeHouseSize(e) {

		this.setState({
			houseSize: e.target.value
        });
    }


    handleSubmit(e) {
        e.preventDefault();

        const newUser = {
            location: this.state.location,
			personsInHouse: this.state.personsInHouse,
			houseSize: this.state.houseSize,
        }

        axios.put('http://localhost:3000/user', newUser)
        .then(response => {
            this.setState({
                location: "",
                personsInHouse: "",
                houseSize: ""  
            });
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
                                value={this.state.location} 
                                onChange={this.onChangeLocation}
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
                                    value={this.state.personsInHouse} 
                                    onChange={this.onChangeNbPersons}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label>Taille</Form.Label>
                                    <Form.Control
                                    name="houseSize"
                                    id="houseSize"
                                    placeholder="small, medium, big" 
                                    type="text"
                                    value={this.state.houseSize} 
                                    onChange={this.onChangeHouseSize}
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