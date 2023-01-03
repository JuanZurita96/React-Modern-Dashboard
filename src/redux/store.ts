import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import {
  dashboardReducer,
  ordersReducer,
  employeesReducer,
  customersReducer,
  appsReducer,
  chartsReducer,
} from './reducers'

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer.reducer,
    orders: ordersReducer.reducer,
    employees: employeesReducer.reducer,
    customers: customersReducer.reducer,
    apps: appsReducer.reducer,
    charts: chartsReducer.reducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
