import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../store/slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
