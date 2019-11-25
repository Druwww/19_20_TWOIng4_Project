import React from 'react';
import './App.css';

//To use put a the top 
//var dataTasks = [{name : "task 1", description :"ma description ouf"}, {name : "task 2", description :"The description ouf"}];
//and : <Todo tasks={dataTasks}></Todo>

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
