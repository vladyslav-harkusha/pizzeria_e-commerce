import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortByIndex: 0,
  currentPage: 1,
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
    setCurrentPage: (state, action) => {
      state.pageCount = action.payload;
    },
  },
});

export const { setCategoryId, setSortByIndex, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
