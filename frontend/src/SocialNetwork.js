import React, { Component } from 'react';
import { Row, Col, Toast } from 'react-bootstrap';
const axios = require('axios');


class SocialNetwork extends Component {

    constructor(props){
        super(props);

        this.state = {
            data : [],
            show : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/measures/lastMeasure')
        .then(response => {
            //limit for ce moment
            var showIni = {};

            for(var x in response.data){
                
                showIni[x._id] = true;
            }

            this.setState({data: response.data, show : showIni});
        });
    }

    render() {
        return (
            <div>
                <Row>

                    {this.state.data.map(({ _id, creationDate, type, sensorID, value }) => (

                        <Col>
                            <Toast show={this.state.show[_id]} onClose={() =>
                                {
                                    var newData = this.state.show;
                                    newData[_id] = false;
                                    this.setState({show : newData});
                                }
                                }>
                                <Toast.Header> 
                                    <img
                                        src="holder.js/20x20?text=%20"
                                        className="rounded mr-2"
                                        alt=""
                                    />
                                    <strong className="mr-auto">{_id}</strong>
                                    <small>{creationDate}</small>
                                </Toast.Header>
                                <Toast.Body>
                                    {type} : {value}
                                </Toast.Body>
                            </Toast>
                        </Col>

                    ))}
                </Row>
            </div>
        );
    }
}

export default SocialNetwork;