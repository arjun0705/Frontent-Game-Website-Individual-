
import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../Reducers/reducer'
export const Store= configureStore({
  reducer: {
      APIapp:apiSlice
  },
})

