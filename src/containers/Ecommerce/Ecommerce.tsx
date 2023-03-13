import { useAppSelector } from '../../redux/store'
import {
  AdditionalInformation,
  Earnings,
  Transactions,
  Updates,
} from './components'

const Ecommerce = () => {
  const { currentColor, earnings } = useAppSelector((state) => state.dashboard)

  return (
    <div className="mt-24">
      <Earnings currentColor={currentColor} earnings={earnings} />
      <Updates currentColor={currentColor} />
      <Transactions currentColor={currentColor} />
      <AdditionalInformation currentColor={currentColor} />
    </div>
  )
}

export default Ecommerce
