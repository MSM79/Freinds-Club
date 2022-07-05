import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeValue: (state, action) => action.payload,
  },
});

export const { changeValue } = searchSlice.actions;

export default searchSlice.reducer;
