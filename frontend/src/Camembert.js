//import React, { PureComponent } from 'react';
//import { PieChart, Pie, Sector } from 'recharts';
import './App.css';

//sources http://recharts.org/en-US/examples/CustomActiveShapePieChart

//to use put : <Camembert></Camembert>

import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend, Tooltip
} from 'recharts';

const axios = require('axios');


class Camembert extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

  constructor(props){
    super(props);

    this.state = { data : []};
  }

  componentDidMount(){
    axios.get('http://localhost:3000/users/personsInHouse')
        .then(response => {
            var myData = [];
            for(var x in response.data){
              myData.push({name: 'Maisons avec '+ x + ' habitants', value: response.data[x]})
            }
            this.setState({data: myData});
        });
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer>
          <PieChart width={70} height={70}>
            <Pie dataKey="value" isAnimationActive={false} data={this.state.data} cx='50%' cy='50%' outerRadius='50%' fill="#ffb3d9" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Camembert;
