import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    load: (state, action) => action.payload,
  },
});

export const { load } = userSlice.actions;

export default userSlice.reducer;
