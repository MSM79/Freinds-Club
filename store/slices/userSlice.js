import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isLogged: {},
  },
});

export default userSlice.reducer;
