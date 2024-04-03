import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from '../features/score/scoreSlice'
import nameReducer from '../features/name/nameSlice'

export default configureStore({
  reducer: {
    score: scoreReducer,
    name: nameReducer,
  },
})