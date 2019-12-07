import React from 'react';
import Calendar from './Calendar.js';
import AddUserForm from './AddUserForm.js';
import {Row, Col, Button, Toast, Form} from 'react-bootstrap';
import './Admin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showA: false,
            showB: false,
            showC: false,
            formValue:0

        };
    }

    /*displayForm(i){
        if (i == 1){
            return(
                <Toast show={this.state.showA} onClose={() => this.setState({ showA: false })}>
                    <Toast.Header>
                        <button type="button" class="close ml-2" data-dismiss="toast" />
                        <Button onClick={() => this.setState({ showB: true })}> Ajouter User</Button>
                    </Toast.Header>

                    <AddUserForm />

                </Toast>
            );
        }
        else if (i==2){
            return(
                <Toast show={this.state.showA} onClose={() => this.setState({ showA: false })}>
                    <Toast.Header>
                        <button type="button" class="close ml-2" data-dismiss="toast" />
                        <Button onClick={() => this.setState({ showB: true })}> Ajouter Capteur</Button>
                    </Toast.Header>

                    <AddUserForm />

                </Toast>
            );

        }
    }*/

    renderForm(){
        return(<AddUserForm/>);
    }

    render(){
        return (

            <Row>
                <Col md="2">
                    <Button onClick={() => this.setState({ showA: true })}>
                        Ajouter User
                    </Button>
                </Col>
                <Col md="5">
                    <Toast show={this.state.showA} onClose={() => this.setState({showA: false})}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded mr-2"
                                alt=""
                            />
                            <Button onClick={() => this.setState({ showB: true })}> Ajouter capteur</Button>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>{this.renderForm()}</Toast.Body>
                    </Toast>
                    {/*this.displayForm(this.state.formValue)*/}

                    
                </Col>

                <Col md="5">
                    <Toast show={this.state.showB} onClose={() => this.setState({ showB: false })}>
                        <Toast.Header>
                            <button type="button" class="close ml-2" data-dismiss="toast" />
                        </Toast.Header>

                        <Calendar />

                    </Toast>
                </Col>
            </Row>

        );
    }
}
export default Admin;