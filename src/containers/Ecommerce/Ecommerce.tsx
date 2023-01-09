import { useAppSelector } from '../../redux/store'
import { AdditionalInformation, Earnings, Transactions } from './components'

const Ecommerce = () => {
  const { currentColor, currentMode, earnings } = useAppSelector(
    (state) => state.dashboard
  )

  return (
    <div className="mt-24">
      <Earnings currentColor={currentColor} earnings={earnings} />
      <Transactions currentColor={currentColor} currentMode={currentMode} />
      <AdditionalInformation currentColor={currentColor} />
    </div>
  )
}

export default Ecommerce
