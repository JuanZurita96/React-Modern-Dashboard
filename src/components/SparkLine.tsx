import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts'

interface SparkLineProps {
  currentColor: string
  id: string
  type: 'Line' | 'Column' | 'WinLoss' | 'Pie' | 'Area' | undefined
  height: string
  width: string
  data: {
    x: number
    yval: number
  }[]
  color: string
}
const SparkLine = ({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
}: SparkLineProps) => (
  <SparklineComponent
    id={id}
    height={height}
    width={width}
    lineWidth={1}
    valueType="Numeric"
    fill={color}
    border={{ color: currentColor, width: 2 }}
    tooltipSettings={{
      visible: true,
      format: '${x} : data ${yval}',
      trackLineSettings: {
        visible: true,
      },
    }}
    markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
    dataSource={data}
    xName="x"
    yName="yval"
    type={type}
  >
    <Inject services={[SparklineTooltip]} />
  </SparklineComponent>
)

export default SparkLine
