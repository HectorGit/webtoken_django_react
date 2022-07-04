import React from 'react'
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const Root = props => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
  );
const Label = props => (
<Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
);

export default function DonutGraph() {

    var chartData = [
        { activity: "Sitting", val: 1045},
        { activity: "Standing", val: 2429},
        { activity: "Biking", val: 305},
    ]


  return (
    <div className="donut_graph">
        <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="val"
            argumentField="activity"
            innerRadius={0.6}
          />
          <Title
            text="Activity Breakdown (by user/team/company)"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />

        </Chart>
      </Paper>
    </div>
  )
}
