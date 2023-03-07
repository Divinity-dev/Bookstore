import { createSlice } from '@reduxjs/toolkit';

export const bookslice = createSlice({
  name: 'Book',
  initialState: {
    Books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.Books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.Books = state.Books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = bookslice.actions;
export default bookslice.reducer;
