import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../constants/assets/avatar.jpg'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { dashboardReducer } from '../redux/reducers'
import {
  useIsomorphicLayoutEffect,
  useWindowDimension,
} from '../hooks/useWindowSize'
import NavButton from './NavButton'
import Cart from './Cart'
import Chat from './Chat'
import Notification from './Notification'
import UserProfile from './UserProfile'

const Navbar = () => {
  const { activeSidebar, updateWindowSize } = dashboardReducer.actions
  const { currentColor, screenSize, sidebarView, popups } = useAppSelector(
    (state) => state.dashboard
  )
  const dispatch = useAppDispatch()
  const { width } = useWindowDimension()
  const [openPopups, setOpenPopups] = React.useState(popups)

  const handleOpenPopUp = (value: string) =>
    setOpenPopups({ ...popups, [value]: true })

  useIsomorphicLayoutEffect(() => {
    dispatch(updateWindowSize(width))
    if (screenSize <= 900) {
      dispatch(activeSidebar(false))
    } else {
      dispatch(activeSidebar(true))
    }
  }, [screenSize])

  return (
    <div className="relative flex justify-between p-2 md:ml-6 md:mr-6">
      <NavButton
        title="Menu"
        customFunc={() => dispatch(activeSidebar(!sidebarView))}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleOpenPopUp('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleOpenPopUp('chat')}
          dotColor="#03C9D7"
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          customFunc={() => handleOpenPopUp('notification')}
          dotColor="rgb(254, 201, 15)"
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-light-gray"
            onClick={() => handleOpenPopUp('userProfile')}
          >
            <img
              className="h-8 w-8 rounded-full"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-14 text-gray-400">Hellow,</span>{' '}
              <span className="ml-1 text-14 font-bold text-gray-400">
                JuanJo
              </span>
            </p>
            <MdKeyboardArrowDown className="text-14 text-gray-400" />
          </div>
        </TooltipComponent>

        {openPopups.cart && (
          <Cart
            currentColor={currentColor}
            changeFunc={() => setOpenPopups(popups)}
          />
        )}
        {openPopups.chat && (
          <Chat
            currentColor={currentColor}
            changeFunc={() => setOpenPopups(popups)}
          />
        )}
        {openPopups.notification && (
          <Notification
            currentColor={currentColor}
            changeFunc={() => setOpenPopups(popups)}
          />
        )}
        {openPopups.userProfile && (
          <UserProfile
            currentColor={currentColor}
            changeFunc={() => setOpenPopups(popups)}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar
