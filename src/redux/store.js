import { configureStore } from '@reduxjs/toolkit';
import Bookslice from './Books/Bookslice';
import categoriesslice from './categories/categoriesslice';

export default configureStore({
  reducer: {
    Book: Bookslice.reducer,
    categories: categoriesslice.reducer,
  },
});
