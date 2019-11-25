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

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/* TODO */}
            </button>
        );
    }
}

class Calendar extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {

        return (
            <div className="calendar">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                </div>
            </div>
        );
    }
}


export default Calendar;