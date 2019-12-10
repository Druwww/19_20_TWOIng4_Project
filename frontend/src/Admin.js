import React from 'react';
import Calendar from './Calendar.js';
import AddUserForm from './AddUserForm.js';
import AddSensorForm from './AddSensorForm.js';
import UserList from './UserList.js';
import MeasureList from './MeasureList.js';
import {Row, Col, Button, Toast, Form} from 'react-bootstrap';
import './Admin.css';
import { tsParameterProperty } from '@babel/types';
const axios = require('axios');


class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showAddUserForm: false,
            showUserList: false,
            showAddSensorForm: false,
            showMeasureList: false,
            listUser : [],
            listSensor : [],
            listMeasure : [],
            userID: 0,
            sensorID: 0
        };
    }

    renderListMeasure(para){
        console.log(para);
        this.setState({sensorID : para});
        this.setState({showMeasureList : true});
    }

    componentDidMount(){
        axios.get('http://localhost:3000/users')
        .then(response => {
            this.setState({listUser : response.data});
            console.log(this.state.listUser);
        });
    }

    render(){
        return (
            <div>
            <Row>
                <Col md="3">
                    <div className="userList">
                        <header>
                            <Button onClick={() => this.setState({ showAddUserForm: true })}>
                                Ajouter User
                            </Button><br></br><br></br>
                        </header>
                        <p className="user">
                            
                        {this.state.listUser.map(({ _id, location, houseSize, personsInHouse}) => (
                            <Button size="sm" className="user" onClick={() => this.setState({ showUserList: true, userID: _id, sensorID: "", measureID: "", showMeasureList: false})}>
                                    {_id}
                            </Button>
                        ))}
                        </p>
                    </div>
                </Col>
                <Col md="9">
                    <Row>
                        <Col md="3">
                            <Toast className="userForm" show={this.state.showUserList} onClose={() => this.setState({ showUserList: false })}>
                                <Toast.Header className="textStyle">
                                    Capteurs du User {this.state.userID}
                                </Toast.Header>
                                    <br></br>
                                    <Button className="buttonCSS" size="sm" onClick={() => this.setState({ showAddSensorForm: true })}> Nouveau capteur</Button>
                                <Toast.Body>
                                    <UserList userID={this.state.userID} fonctionMeasure={this}/>
                                </Toast.Body>
                                
                            </Toast>
                        </Col>

                        <Col md="3">
                            <Toast className="userForm" show={this.state.showMeasureList} onClose={() => this.setState({ showMeasureList: false })}>
                                    <Toast.Header className="textStyle">
                                    Mesures du Capteur {this.state.sensorID}
                                </Toast.Header>
                                    <br></br>
                                    <Button className="buttonCSS" size="sm" onClick={() => this.setState({ showAddSensorForm: true })}> Nouveau capteur</Button>

                                <Toast.Body>
                                    <MeasureList sensorID={this.state.sensorID}/>
                                </Toast.Body>
                                
                            </Toast>
                        </Col>
                
                        <Col md="3">
                            <Toast className="userForm" show={this.state.showAddUserForm} onClose={() => this.setState({ showAddUserForm: false })}>
                                <Toast.Header>
                                    <span>Ajouter un nouvel utilisateur</span>
                                </Toast.Header>
                                <AddUserForm/>
                            </Toast>
                        </Col>

                        <Col md="3">
                            <Toast className="userForm" show={this.state.showAddSensorForm} onClose={() => this.setState({ showAddSensorForm: false })}>
                                <Toast.Header>
                                    <span>Ajouter un nouveau capteur</span>
                                </Toast.Header>
                                <AddSensorForm userID={this.state.userID}/>
                            </Toast>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </div>

        );
    }
}
export default Admin;