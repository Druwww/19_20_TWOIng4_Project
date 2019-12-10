import React from 'react';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import './Todo.css';
const axios = require('axios');


// source : https://react-bootstrap.github.io/components/overlays/#popovers

//To use put a the top 
//var dataTasks = [{name : "task 1", description :"ma description ouf"}, {name : "task 2", description :"The description ouf"}];
//and : <Todo tasks={dataTasks}></Todo>

function renderTooltip(props) {
  return <Tooltip {...props}>{props._id} {props.location} {props.creationDate} {props.userID}</Tooltip>;
}

class Todo extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };

    }
    componentDidMount(){
      axios.get('http://localhost:3000/sensors/lastSensors')
        .then(response => {
            this.setState({data: response.data});
        });
    
    }
    render() {

      return (
        <div>
          {this.state.data.map(({ _id, creationDate, location, userID }) => (
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip({_id, creationDate, location, userID})}
              >
                <Button className="oneTask">
                <p className="title"><center>{_id }</center></p>
                <p className="description">{creationDate} </p>
                </Button>
            </OverlayTrigger>
          ))}
        </div>
      );
    }
}

export default Todo;
