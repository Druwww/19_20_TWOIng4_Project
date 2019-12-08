import React, { Component } from 'react';
import { Row, Col, Toast } from 'react-bootstrap';

class SocialNetwork extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Toast show={true}>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded mr-2"
                                    alt=""
                                />
                                <strong className="mr-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>
                                Nouvelle notification !
                            </Toast.Body>
                        </Toast>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SocialNetwork;