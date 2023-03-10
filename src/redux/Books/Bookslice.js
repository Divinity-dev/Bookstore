import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WvLa8hfXucaQvVZ7BLYc/books';

export const getData = createAsyncThunk('Books/getData', async () => {
  const getbooks = await fetch(url).then((res) => res.json());
  const books = Object.keys(getbooks).map((bookid) => (
    {
      item_id: bookid,
      ...getbooks[bookid][0],
    }
  ));
  return books;
});

export const addBook = createAsyncThunk('Book/getData', async (Book) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(Book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
});

export const removeBook = createAsyncThunk('removeBooks', async (id) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WvLa8hfXucaQvVZ7BLYc/books/${id}`, {
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
      return newState;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.Books.push(action.payload);
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.Books = state.Books.filter((book) => book.item_id !== action.payload);
    });
  },
});

export default bookslice.reducer;
