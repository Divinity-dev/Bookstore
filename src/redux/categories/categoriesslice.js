import { createSlice } from '@reduxjs/toolkit';

export const categoriesslice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'underconstruction',
  },
  reducers: {
    checkStatus: (state) => {
      state.status = 'Underconstruction';
    },
  },
});

export const { checkStatus } = categoriesslice.actions;
export default categoriesslice.reducer;
