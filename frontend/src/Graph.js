import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
const axios = require('axios');

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];


const getIntroOfPage = (label) => {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  } if (label === 'Page B') {
    return "Page B is about women's dress";
  } if (label === 'Page C') {
    return "Page C is about women's bag";
  } if (label === 'Page D') {
    return 'Page D is about household goods';
  } if (label === 'Page E') {
    return 'Page E is about food';
  } if (label === 'Page F') {
    return 'Page F is about baby food';
  }
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="desc">Nombre de capteur dans cette pièce.</p>
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

              myData.push({name: x, nb: response.data[x]})

              console.log(x);
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
        <Bar dataKey="nb" barSize={20} fill="#8884d8" />
      </BarChart>
    );
  }
}

export default Graph;
