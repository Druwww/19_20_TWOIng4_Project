import React from 'react';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import './Todo.css';

// source : https://react-bootstrap.github.io/components/overlays/#popovers

//To use put a the top 
//var dataTasks = [{name : "task 1", description :"ma description ouf"}, {name : "task 2", description :"The description ouf"}];
//and : <Todo tasks={dataTasks}></Todo>

function renderTooltip(props) {
  return <Tooltip {...props}>{props.description}</Tooltip>;
}

class Todo extends React.Component {
  
    constructor(props) {
        super(props);
      }



   

    render() {

      return (
        <div>
          {this.props.tasks.map(({ name, description }) => (
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip({name, description})}
              >
                <Button className="oneTask">
                <p className="title"><center>{name}</center></p>
                <p className="description">{description} </p>
                </Button>
            </OverlayTrigger>
          ))}
        </div>
      );
    }
}


export default Todo;
