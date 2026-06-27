import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './API/bookSlice'

export const store = configureStore({
  reducer: {
    books: booksReducer
  }
})
export default store