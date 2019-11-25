import React from 'react';
import './App.css';



class Todo extends React.Component {
  
    constructor(props) {
        super(props);
      }

    renderTask(dataTask){
        return(
          <div>
            <p>Name : {dataTask.name} Desc : {dataTask.description} </p>
          </div>
        );
    }

    render() {
      console.log(this.props.tasks);
      return (
        <div>
            {this.renderTask(this.props.tasks['0'])}
            {this.renderTask(this.props.tasks['1'])}
        </div>
      );
    }
}


export default Todo;
