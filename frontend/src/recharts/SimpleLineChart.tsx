import { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'January',
    a: 2000,
    b: 1000,
    c: 3000,
  },
  {
    name: 'February',
    a: 3000,
    b: 2000,
    c: 4000,
  },
  {
    name: 'March',
    a: 4000,
    b: 3000,
    c: 5000,
  },
]

export default class SimpleLineChart extends PureComponent {
  // 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952'

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="b"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="a"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
          <Line
            type="natural"
            dataKey="c"
            stroke="#FF2D20"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}
