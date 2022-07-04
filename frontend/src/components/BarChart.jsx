import React from 'react'
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


export default function BarChart(props) {

      const dummyData = [
        {hour:'0', time_active: 0},
        {hour:'1', time_active: 0},
        {hour:'2', time_active: 0},
        {hour:'3', time_active: 0},
        {hour:'4', time_active: 0},
        {hour:'5', time_active: 13},
        {hour:'6', time_active: 45},
        {hour:'7', time_active: 10},
        {hour:'8', time_active: 40},
        {hour:'9', time_active: 0},
        {hour:'10', time_active: 0},
        {hour:'11', time_active: 0},
        {hour:'12', time_active: 24},
        {hour:'13', time_active: 15},
        {hour:'14', time_active: 15},
        {hour:'15', time_active: 32},
        {hour:'16', time_active: 59},
        {hour:'17', time_active: 10},
        {hour:'18', time_active: 0},
        {hour:'19', time_active: 0},
        {hour:'20', time_active: 0},
        {hour:'21', time_active: 0},
        {hour:'22', time_active: 0},
        {hour:'23', time_active: 0}
    ]

      console.log("props.data: ", props.data)
      console.log("expected format: ", dummyData)


  return (
    <div className="bar_chart">
        <Paper>
        <Chart

        // this should work as the format of the prop data is correct
        // for some reason using prop data won't display
        // use dummy data instead for now
        //   data={props.data}

        data={props.data}
        >
          <ArgumentAxis />
          <ValueAxis max={61} />

          <BarSeries
            valueField="time_active"
            argumentField="hour"
          />
          <Title text="Daily Activity" />
          <Animation />
        </Chart>
      </Paper>
    </div>
  )
}
