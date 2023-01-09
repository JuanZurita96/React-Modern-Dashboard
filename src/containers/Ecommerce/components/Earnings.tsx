import { BsCurrencyDollar } from 'react-icons/bs'
import { earningData } from '../constants'
interface Earning {
  currentColor: string
  earnings: string
}

const Earnings = ({ currentColor, earnings }: Earning) => (
  <div className="flex flex-wrap justify-center lg:flex-nowrap ">
    <div className="bg-hero-pattern m-3 h-full w-full rounded-xl bg-white bg-cover bg-center bg-no-repeat p-8 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 lg:w-80">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-gray-400">Earnings</p>
          <p className="text-2xl">{earnings}</p>
        </div>
        <button
          type="button"
          style={{ backgroundColor: currentColor }}
          className="opacity-0.9 cursor-default rounded-full p-4 text-2xl  text-white hover:drop-shadow-xl"
        >
          <BsCurrencyDollar />
        </button>
      </div>
    </div>
    <div className="bg-hero-pattern m-3 h-full w-full rounded-xl bg-white bg-cover bg-center bg-no-repeat p-8 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 lg:w-80">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-gray-400">Last Transaction</p>
          <p className="text-1xl text-red-600">--Pay Taxes: $4,499.99</p>
        </div>
      </div>
    </div>
    <div className="m-3 flex flex-wrap items-center justify-center gap-1">
      {earningData.map((item) => (
        <div
          key={item.title}
          className="h-44 rounded-2xl bg-white p-4 pt-9  dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56 "
        >
          <button
            type="button"
            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            className="opacity-0.9 rounded-full p-4  text-2xl hover:drop-shadow-xl"
          >
            {item.icon}
          </button>
          <p className="mt-3">
            <span className="text-lg font-semibold">${item.amount}</span>
            <span className={`text-sm text-${item.pcColor} ml-2`}>
              {item.percentage}
            </span>
          </p>
          <p className="mt-1 text-sm  text-gray-400">{item.title}</p>
        </div>
      ))}
    </div>
  </div>
)

export default Earnings
