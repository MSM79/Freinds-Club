import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    load: (state, action) => action.payload,
  },
  searchUser: (state, action) => {
    return state.name.filter((x) => x.name === action.payload.name);
  },
});

export const { load, searchUser } = userSlice.actions;

export default userSlice.reducer;
