import React from 'react';
import Calendar from './Calendar.js';
import AddUserForm from './AddUserForm.js';
import AddSensorForm from './AddSensorForm.js';
import UserList from './UserList.js';
import {Row, Col, Button, Toast, Form} from 'react-bootstrap';
import './Admin.css';

class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showAddUserForm: false,
            showUserList: false,
            showAddSensorForm: false,
            userID: 0
        };
    }

    createTable = () => {
        let table = []

        for (let i = 0; i < 3; i++) {
            table.push(<tr>
                <Button className="user" onClick={() => this.setState({ showUserList: true, userID: i})}>
                    utilisateur
                </Button>
            </tr>)
        }
        return table
    }

    render(){
        return (
            <Row>
                <Col md="3">
                    <div className="userList">
                        <header>
                            <Button onClick={() => this.setState({ showAddUserForm: true })}>
                                Ajouter User
                            </Button><br></br><br></br>
                        </header>
                        <p className="user">
                            {this.createTable()}
                        </p>
                    </div>
                </Col>
                <Col md="3">
                    <Toast className="userForm" show={this.state.showUserList} onClose={() => this.setState({ showUserList: false })}>
                        <Toast.Header>
                            Capteurs du User {this.state.userID}
                            <Button className="buttonCSS"onClick={() => this.setState({ showAddSensorForm: true })}> Nouveau capteur</Button>
                        </Toast.Header>
                        <UserList/>
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
                        <AddSensorForm/>
                    </Toast>
                </Col>
            </Row>

        );
    }
}
export default Admin;