import { ChartType } from 'chart.js'
export interface ChartProps {
  type: ChartType
  options: {
    responsive: boolean
    plugins: {
      legend: {
        position: 'center' | 'left' | 'top' | 'right' | 'bottom' | 'chartArea'
      }
      title: {
        display: boolean
        text: string
      }
    }
  }
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      borderColor: string
      backgroundColor: string
    }[]
  }
}
