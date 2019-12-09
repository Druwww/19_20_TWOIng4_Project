import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

/*Creation sensor
axios({
    method: 'put',
    url: 'http://localhost:3000/sensor',
    data: {
        creationDate: "blabla",
        location: 'blablabla',
        userID: 'blablabla'
    }
})
    .then(response => {
        var monSensorCreer = responce;
    });
*/
class AddSensorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creationDate: null,
            location: null
        }
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });

    };

    onSubmit = () => {

    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form className="formFormat" method="POST" onsubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Date d'installation</Form.Label>
                                <Form.Control 
                                type="date" 
                                name="creationDate"
                                value={this.state.creationDate}
                                onChange={e => this.change(e)}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Emplacement</Form.Label>
                                <Form.Control 
                                placeholder="Salon, Cuisine, Salle de bain"
                                name="location"
                                value={this.state.location}
                                onChange={e => this.change(e)}/>
                            </Form.Group>
                            <Button variant="primary" onClick={() => this.onSubmit()}>
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