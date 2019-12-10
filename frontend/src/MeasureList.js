import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
const axios = require('axios');


class MeasureList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            listMeasure : []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const deleteInfo = 'http://localhost:3000/sensor/' + this.props.sensorID;

        console.log(deleteInfo);

        axios.delete(deleteInfo)
        .then(response => {
            console.log(response);
            this.setState({
                listMeasure : []
            });
            window.location.reload();
        });
    }

    componentDidMount(){ 
    }

    componentDidUpdate(prevProps){
        if(prevProps.sensorID != this.props.sensorID){
            const urlR = 'http://localhost:3000/measure/' + this.props.sensorID;  
            

            console.log(urlR);
    
            axios.get(urlR)
            .then(response => {
                this.setState({
                    listMeasure : response.data
                });

                console.log(this.state.listMeasure);
            });
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <ListGroup>

                        {this.state.listMeasure.map(({ _id, creationDate, sensorID }) => (
                            <ListGroup.Item variant="primary">{_id} {creationDate} {sensorID}</ListGroup.Item>
                        ))}
                            <br></br>
                        </ListGroup>

                        <Button onClick={this.handleSubmit}>
                            Supprimer Sensor
                        </Button><br></br><br></br>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default MeasureList;