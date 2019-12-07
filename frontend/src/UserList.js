import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';

class UserList extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                            <ListGroup.Item variant="primary">Primary</ListGroup.Item><br></br>
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