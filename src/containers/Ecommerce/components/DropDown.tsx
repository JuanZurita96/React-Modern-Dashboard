import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { dropdownData } from '../constants'

const DropDown = ({ currentMode }: { currentMode: string }) => (
  <div className="w-28 rounded-md border-1 border-color px-2 py-1">
    <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{
        border: 'none',
        color: currentMode === 'Dark' ? 'white' : 'black',
      }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
)

export default DropDown
