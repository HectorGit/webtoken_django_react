import React from 'react'
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';

const Root = props => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
  );
  const Label = props => (
    <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
  );

export default function MultiBarChart() {

    var chartData = [
        {
            team: 'Team 1',
            biking: 300,
            standing: 150,
            seated: 400,
        },
        {
            team: 'Team 2',
            biking: 300,
            standing: 500,
            seated: 150,
        },
        {
            team: 'Team 3',
            biking: 150,
            standing: 800,
            seated: 300,
        },
    ]



  return (
    <div className="multi_bar_chart">
        <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Time Seated"
            valueField="seated"
            argumentField="team"
            color="#c0c0c0"
          />
          <BarSeries
            name="Time Biking"
            valueField="biking"
            argumentField="team"
            color="#ffd700"
          />
          <BarSeries
            name="Time Standing"
            valueField="standing"
            argumentField="team"
            color="#cd7f32"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Team Activity Comparison" />
          <Stack />
        </Chart>
      </Paper>
    </div>
  )
}
