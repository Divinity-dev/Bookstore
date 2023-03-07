import { createSlice } from '@reduxjs/toolkit';

export const bookslice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'underconstruction',
  },
  reducers: {
    checkStatus: (state) => {
      state.status = 'Under construction';
    },
  },
});

export const { addBook, removeBook } = bookslice.actions;
export default bookslice.reducer;
