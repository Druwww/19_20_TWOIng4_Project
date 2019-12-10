import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
const axios = require('axios');


class AddSensorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creationDate: "",
            location: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
		this.onChangeCreationDate = this.onChangeCreationDate.bind(this);
    }

	onChangeLocation(e){

		this.setState({
			location: e.target.value
        });
        
	}

	onChangeCreationDate(e) {

		this.setState({
			creationDate: e.target.value
        });
        
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state);

        const newSensor = {
            userID: this.props.userID,
            location: this.state.location,
			creationDate : this.state.creationDate
        }

        axios.put('http://localhost:3000/sensor', newSensor)
        .then(response => {
            console.log(response);
            this.setState({
                location: "",
                creationDate : ""
            });
            window.location.reload();
        });
    }


    render() {
        return (
            <div>
                <Row>
                    <Col>
                    <Form className="formFormat" onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Date d'installation</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="creationDate"
                                id="creationDate"
                                value={this.state.creationDate}
                                onChange={this.onChangeCreationDate}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Emplacement</Form.Label>
                                <Form.Control 
                                placeholder="Salon, Cuisine, Salle de bain"
                                name="location"
                                id="location"
                                value={this.state.location}
                                onChange={this.onChangeLocation}/>
                            </Form.Group>
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

export default AddSensorForm;