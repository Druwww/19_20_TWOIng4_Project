import React from 'react';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const dataGraph = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 400, pv: 2400, amt: 2400}, {name: 'Page C', uv: 400, pv: 2400, amt: 2400}];

class Graph extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
            <LineChart width={300} height={180} data={dataGraph} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
           <p><center>Variation Trésorie</center></p>
        </div>
      );
    }
  }
  
export default Graph;