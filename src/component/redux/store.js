import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice'

import postsReducer from './getSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsReducer,
  }
})