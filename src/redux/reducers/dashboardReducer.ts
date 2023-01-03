import { createSlice } from '@reduxjs/toolkit'

type PopUps = {
  chat: boolean
  cart: boolean
  userProfile: boolean
  notification: boolean
}

interface DashboardState {
  currentColor: string
  currentMode: string
  earnings: number
  themeSettings: boolean
  sidebarView: boolean
  screenSize: number
  popups: PopUps
}

const initialState: DashboardState = {
  currentColor: localStorage.getItem('themeMode') || '#03C9D7',
  currentMode: localStorage.getItem('colorMode') || 'Light',
  earnings: Math.floor(Math.random() * 999999),
  themeSettings: false,
  sidebarView: false,
  screenSize: window.innerWidth,
  popups: {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  },
}

export const dashboardActions = createSlice({
  name: 'ecommerce',
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.currentColor = action.payload
      localStorage.setItem('themeMode', action.payload)
    },
    changeMode: (state, action) => {
      state.currentMode = action.payload
      localStorage.setItem('colorMode', action.payload)
    },
    activeSidebar: (state, action) => {
      state.sidebarView = action.payload
    },
    activeThemeSettings: (state, action) => {
      state.themeSettings = action.payload
    },
    activePopUps: (state, { payload }) => {
      state.popups = {
        ...state.popups,
        [payload.key]: payload.value,
      }
    },
    updateWindowSize: (state, action) => {
      state.screenSize = action.payload
    },
    updateEarnings: (state, action) => {
      state.earnings = action.payload
    },
  },
})

const dashboardReducer = {
  reducer: dashboardActions.reducer,
  actions: dashboardActions.actions,
}

export default dashboardReducer
