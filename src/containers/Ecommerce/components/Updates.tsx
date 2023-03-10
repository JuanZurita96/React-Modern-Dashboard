import { GoPrimitiveDot } from 'react-icons/go'
import { Charts } from '../../../components/Charts'
import { LineChartData } from '../constants'

interface UpdatesProps {
  currentColor: string
}
const Updates = ({ currentColor }: UpdatesProps) => (
  <div className="flex flex-wrap justify-center gap-10">
    <div className="m-3 rounded-2xl bg-white p-4 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-780  ">
      <div className="flex justify-between">
        <p className="text-xl font-semibold">Revenue Updates</p>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
            <span>
              <GoPrimitiveDot />
            </span>
            <span>Expense</span>
          </p>
          <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
            <span>
              <GoPrimitiveDot />
            </span>
            <span>Budget</span>
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <div className=" m-4 border-r-1 border-color pr-10">
          <div>
            <p>
              <span className="text-3xl font-semibold">$93,438</span>
              <span className="ml-3 cursor-pointer rounded-full bg-green-400 p-1.5 text-xs text-white hover:drop-shadow-xl">
                23%
              </span>
            </p>
            <p className="mt-1 text-gray-500">Budget</p>
          </div>
          <div className="mt-8">
            <p className="text-3xl font-semibold">$48,487</p>

            <p className="mt-1 text-gray-500">Expense</p>
          </div>

          <div className="mt-5">
            <Charts
              type="line"
              options={LineChartData.options}
              data={LineChartData.data}
            />
          </div>
        </div>
        <div>
          <Charts
            type="bar"
            options={LineChartData.options}
            data={LineChartData.data}
          />
        </div>
      </div>
    </div>
    <div>
      <div
        className=" m-3 rounded-2xl p-4 md:w-400"
        style={{ backgroundColor: currentColor }}
      >
        <div className="flex items-center justify-between ">
          <p className="text-2xl font-semibold text-white">Earnings</p>

          <div>
            <p className="mt-8 text-2xl font-semibold text-white">$63,448.78</p>
            <p className="text-gray-200">Monthly revenue</p>
          </div>
        </div>

        <div className="mt-4">
          <Charts
            type="line"
            options={LineChartData.options}
            data={LineChartData.data}
          />
        </div>
      </div>

      <div className="m-3 flex items-center justify-center gap-10 rounded-2xl bg-white p-8 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-400">
        <div>
          <p className="text-2xl font-semibold ">$43,246</p>
          <p className="text-gray-400">Yearly sales</p>
        </div>

        <div className="w-40">
          <Charts
            type="pie"
            options={LineChartData.options}
            data={LineChartData.data}
          />
        </div>
      </div>
    </div>
  </div>
)

export default Updates
