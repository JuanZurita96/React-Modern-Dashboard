import {
  BrowserRouter as AppRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Sidebar, Themes } from './components'
import { Ecommerce } from './containers'
import './App.css'
import { useAppSelector, useAppDispatch } from './redux/store'
import { dashboardReducer } from './redux/reducers'

const App = () => {
  const dispatch = useAppDispatch()
  const { activeThemeSettings } = dashboardReducer.actions
  const { currentColor, currentMode, themeSettings, sidebarView } =
    useAppSelector((state) => state.dashboard)

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <AppRouter>
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="TopCenter">
              <button
                type="button"
                onClick={() => dispatch(activeThemeSettings(!themeSettings))}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="p-3 text-3xl text-white hover:bg-light-gray hover:drop-shadow-xl"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {sidebarView ? (
            <div className="sidebar fixed w-72 bg-white dark:bg-secondary-dark-bg ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              sidebarView
                ? 'min-h-screen  w-full bg-main-bg dark:bg-main-dark-bg md:ml-72  '
                : 'flex-2 min-h-screen  w-full bg-main-bg dark:bg-main-dark-bg '
            }
          >
            <div className="navbar fixed w-full bg-main-bg dark:bg-main-dark-bg md:static ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <Themes />}
              <Routes>
                <Route path="/ecommerce" element={<Ecommerce />} />

                <Route path="*" element={<Navigate to="/ecommerce" />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </AppRouter>
    </div>
  )
}

export default App
