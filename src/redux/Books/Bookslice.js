import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TMW5b3PhbqVNgRzyiBCv/books';

export const getData = createAsyncThunk('Books/getData', async () => {
  await fetch(url).then((res) => res.json);
});

export const addBook = createAsyncThunk('Book/getData', async (Book) => {
  await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(Book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Book;
});

export const removeBook = createAsyncThunk('removeBooks', async (id) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return id;
});

export const bookslice = createSlice({
  name: 'Book',
  initialState: {
    Books: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      const newState = state;
      newState.Books = action.payload;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.Books.push(action.payload);
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.Books = state.Books.filter((book) => book.item_id !== action.payload.item_id);
    });
  },
});

export default bookslice.reducer;
