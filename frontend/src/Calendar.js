import React from 'react';
import './App.css';
import './Calendar.css';
import { Container, Row, Col } from 'react-bootstrap';

/*To use
<Calendar></Calendar>

AND

import Calendar from './Calendar.js';
import './Calendar.css';
*/


//source : https://codepen.io/gaearon/pen/oWWQNa?editors=0010

const day='Mon';



class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: "white"
        }
    }

    boxClick = (e) => {

        if (this.state.bgColor == "red"){
            this.setState({
                bgColor: "green"
            })
        } else if (this.state.bgColor == "white"){
            this.setState({
                bgColor: "red"
            })        
        } else {
            this.setState({
                bgColor: "white"
            })
        }
        
    }

    render() {

        return (
            <button className="square" style={{ backgroundColor: this.state.bgColor }} onClick={this.boxClick}>
                {this.props.value}
            </button>
        );
    }
}


class Calendar extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {

        return (
            <div className="calendar">
                <div className="board-row">
                    {this.renderSquare('Mon')}
                    {this.renderSquare('Tue')}
                    {this.renderSquare('Wed')}
                </div>
                <div className="board-row">
                    {this.renderSquare('Thu')}
                    {this.renderSquare('Fri')}
                    {this.renderSquare('Sat')}
                </div>
                <div className="board-row">
                    {this.renderSquare('Sun')}
                </div>
            </div>
        );
    }
}


export default Calendar;