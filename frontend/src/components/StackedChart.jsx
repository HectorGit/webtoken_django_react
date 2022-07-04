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

export default function StackedChart() {

    var chartData = [
        {
            team: 'Team 1',
            biking: 300,
            standing: 150,
            sitting: 400,
        },
        {
            team: 'Team 2',
            biking: 300,
            standing: 500,
            sitting: 150,
        },
        {
            team: 'Team 3',
            biking: 150,
            standing: 800,
            sitting: 300,
        },
        {
            team: 'Team 4',
            biking: 110,
            standing: 600,
            sitting: 320,
        },
        {
            team: 'Team 5',
            biking: 109,
            standing: 400,
            sitting: 600,
        },
        {
            team: 'Team 6',
            biking: 500,
            standing: 800,
            sitting: 210,
        },
    ]


  return (
    <div className="stacked_chart">
        <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis
            max={2400}
          />

          <BarSeries
            name="Sitting"
            valueField="sitting"
            argumentField="team"
          />
          <BarSeries
            name="Standing"
            valueField="standing"
            argumentField="team"
          />
          <BarSeries
            name="Biking"
            valueField="biking"
            argumentField="team"
          />

          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Stacked Team Comparison" />
          <Stack
            stacks={[
              { series: ['Sitting', 'Standing', 'Biking'] },
            ]}
          />
        </Chart>
      </Paper>
    </div>
  )
}
