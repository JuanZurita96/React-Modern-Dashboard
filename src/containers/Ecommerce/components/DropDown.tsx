import Dropdown from 'react-dropdown'
import { dropdownData } from '../constants'

const DropDown = () => (
  <div className="relative w-28 cursor-pointer rounded-md border-1 border-color px-2 py-1">
    <Dropdown
      menuClassName="dropdown bg-white dark:bg-secondary-dark-bg dark:text-gray-200"
      value={dropdownData[0]}
      options={dropdownData}
    />
  </div>
)

export default DropDown
