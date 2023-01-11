import 'chart.js/auto'
import { ChartProps } from '../interfaces/Charts'
import { Chart } from 'react-chartjs-2'

export const Charts = ({ type, options, data }: ChartProps) => (
  <Chart type={type} options={options} data={data} />
)
