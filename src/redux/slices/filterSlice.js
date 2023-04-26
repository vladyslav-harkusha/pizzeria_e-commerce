import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortByIndex: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortByIndex: (state, action) => {
      state.sortByIndex = action.payload;
    },
  },
});

export const { setCategoryId, setSortByIndex } = filterSlice.actions;

export default filterSlice.reducer;
