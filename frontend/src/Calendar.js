import React, { PureComponent } from 'react';
import {
    ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip,
    Legend,
} from 'recharts';
const axios = require('axios');

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9kvhed7a/';

    constructor(props){
        super(props);

        this.state = {
            data1 : [],
            data2 : [],
            data3 : [],
            data4 : []
        }
    }

    componentDidMount(){

        axios.get('http://localhost:3000/measures/timeMeasures')
        .then(response => {
            var myData = []; 
            for(var x in response.data){
              myData.push({name: x, index: 1, value: response.data[x]})
            }
            this.setState({data1 : myData});

            console.log(this.state);
        });

        axios.get('http://localhost:3000/measures/timeMeasuresTypeT')
        .then(response => {
            console.log(response);
            var myData = [];
            for(var x in response.data){
              myData.push({name: x, index: 1, value: response.data[x]})
            }
            this.setState({data2 : myData});

            console.log(this.state);
        });

        axios.get('http://localhost:3000/measures/timeMeasuresTypeH')
        .then(response => {
            console.log(response);
            var myData = [];
            for(var x in response.data){
              myData.push({name: x, index: 1, value: response.data[x]})
            }
            this.setState({data3 : myData});

            console.log(this.state);
        });

        axios.get('http://localhost:3000/measures/timeMeasuresTypeA')
        .then(response => {
            console.log(response);
            var myData = [];
            for(var x in response.data){
              myData.push({name: x, index: 1, value: response.data[x]})
            }
            this.setState({data4 : myData});

            console.log(this.state);
        });

    }

    renderTooltip = (props) => {
        const { active, payload } = props; 

        if (active && payload && payload.length) {
            const data = payload[0] && payload[0].payload;

            return (
                <div style={{
                    backgroundColor: '#fff', border: '1px solid #999', margin: 0, padding: 10,
                }}
                >
                    <p>{data.name} heures</p>
                    <p>
                        <span>value: </span>
                        {data.value}
                    </p>
                </div>
            );
        }

        return null;
    }

    render() {
        // const domain = parseDomain();
        const domain = [0,100];
        console.log(domain);
        const range = [16, 225];

        return (
            <div className="calendar">
                <ScatterChart
                    width={800}
                    height={60}
                    margin={{
                        top: 10, right: 0, bottom: 0, left: 0,
                    }}
                >
                    <XAxis type="category" dataKey="name" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                    <YAxis type="number" dataKey="index" name="allType" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'All Type', position: 'insideRight' }} />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                    <Scatter data={this.state.data1} fill="#8884d8" />
                </ScatterChart>

                <ScatterChart
                    width={800}
                    height={60}
                    margin={{
                        top: 10, right: 0, bottom: 0, left: 0,
                    }}
                >
                    <XAxis type="category" dataKey="name" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                    <YAxis type="number" dataKey="index" name="temp" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Temp', position: 'insideRight' }} />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                    <Scatter data={this.state.data2} fill="#8884d8" />
                </ScatterChart>

                <ScatterChart
                    width={800}
                    height={60}
                    margin={{
                        top: 10, right: 0, bottom: 0, left: 0,
                    }}
                >
                    <XAxis type="category" dataKey="name" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                    <YAxis type="number" dataKey="index" name="temp" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Hum', position: 'insideRight' }} />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                    <Scatter data={this.state.data3} fill="#8884d8" />
                </ScatterChart>

                <ScatterChart
                    width={800}
                    height={60}
                    margin={{
                        top: 10, right: 0, bottom: 0, left: 0,
                    }}
                >
                    <XAxis type="category" dataKey="name" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                    <YAxis type="number" dataKey="index" name="temp" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Air', position: 'insideRight' }} />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                    <Scatter data={this.state.data4} fill="#8884d8" />
                </ScatterChart>
            </div>
        );
    }
}
