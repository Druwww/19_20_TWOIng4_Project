import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
const axios = require('axios');


class UserList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            listSensors : []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.manageClick = this.manageClick.bind(this);
        this.renderElement = this.renderElement.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const deleteInfo = 'http://localhost:3000/user/' + this.props.userID;
        axios.delete(deleteInfo)
        .then(response => {
            this.setState({
                listSensors : []
            });
            window.location.reload();
        });
    }

    manageClick(para){
        console.log(para);
        console.log(this.props.fonctionMeasure);
        this.props.fonctionMeasure.setState({ sensorID :para, showMeasureList: true});
    }

    componentDidMount(){ 
    }

    renderElement(_id, creationDate, location){
        return(
            <ListGroup.Item variant="primary"><Button size="sm" onClick={() => this.manageClick(_id)}>{_id} {creationDate} {location}</Button></ListGroup.Item>
        )
    }

    componentDidUpdate(prevProps){

        if(prevProps.userID != this.props.userID){
            const urlR = 'http://localhost:3000/sensor/' + this.props.userID;  
            axios.get(urlR)
            .then(response => {
                this.setState({
                    listSensors : response.data
                });
            });
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <ListGroup>

                        {this.state.listSensors.map(({ _id, creationDate, location }) => (
                            this.renderElement(_id, creationDate, location)
                        ))}
                            <br></br>
                        </ListGroup>

                        <Button size="sm" onClick={this.handleSubmit}>
                            Supprimer Utilisateur
                        </Button><br></br><br></br>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default UserList;