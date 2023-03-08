import { createSlice } from '@reduxjs/toolkit';

const initialState = { categories: [] };
const categoriesslice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.categories.push('Underconstruction');
    },
  },
});

export const { checkStatus } = categoriesslice.actions;
export default categoriesslice.reducer;
