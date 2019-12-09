import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
const axios = require('axios');


class UserList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            listSensors : []
        }
    }

    componentDidMount(){ 
    }

    componentDidUpdate(prevProps){

        if(prevProps.userID != this.props.userID){
            const urlR = 'http://localhost:3000/sensor/' + this.props.userID;  
            

            console.log(urlR);
    
            axios.get(urlR)
            .then(response => {
                this.setState({
                    listSensors : response.data
                });

                console.log(this.state.listSensors);
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
                            <ListGroup.Item variant="primary">{_id} {creationDate} {location}</ListGroup.Item>
                        ))}
                            <br></br>
                        </ListGroup>

                        <Button>
                            Supprimer Utilisateur
                        </Button><br></br><br></br>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default UserList;