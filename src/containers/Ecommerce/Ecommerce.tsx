import { useAppSelector } from '../../redux/store'
import {
  AdditionalInformation,
  Earnings,
  Transactions,
  Updates,
} from './components'

const Ecommerce = () => {
  const { currentColor, currentMode, earnings } = useAppSelector(
    (state) => state.dashboard
  )

  return (
    <div className="mt-24">
      <Earnings currentColor={currentColor} earnings={earnings} />
      <Updates currentColor={currentColor} currentMode={currentMode} />
      <Transactions currentColor={currentColor} currentMode={currentMode} />
      <AdditionalInformation currentColor={currentColor} />
    </div>
  )
}

export default Ecommerce
