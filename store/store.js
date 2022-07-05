import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../store/slices/userSlice';
import searchSlice from '../store/slices/searchSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    search: searchSlice,
  },
});
