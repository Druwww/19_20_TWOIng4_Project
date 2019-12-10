import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
const axios = require('axios');

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`} capteurs</p>
      </div>
    );
  }

  return null;
};

class Graph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/vxq4ep63/';

  constructor(props){
    super(props);

    this.state = { data : []};
  }

  componentDidMount(){
    axios.get('http://localhost:3000/sensors/sensorsLocation')
        .then(response => {
            var myData = [];
            for(var x in response.data){
              myData.push({name: x, Nombre: response.data[x]})
            }
            // console.log(response.data.bathroom);
            this.setState({data: myData});
            console.log(this.state);
        });
  }

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Nombre" barSize={20} fill="#8884d8" />
      </BarChart>
    );
  }
}

export default Graph;
