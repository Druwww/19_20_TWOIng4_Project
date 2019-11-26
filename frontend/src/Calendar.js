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
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

class SquareColoredGreen extends React.Component {
    render() {
        return (
            <button className="square_color_green">
                {this.props.value}
            </button>
        );
    }
}

class SquareColoredRed extends React.Component {
    render() {
        return (
            <button className="square_color_red">
                {this.props.value}
            </button>
        );
    }
}

class Calendar extends React.Component {
    renderSquare(i) {
        if(i=='Mon'){
            return <SquareColoredGreen value={i} />;
        }
        else if(i=='Fri'){
            return <SquareColoredRed value={i} />;
        }
        else{
            return <Square value={i} />;
        }
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