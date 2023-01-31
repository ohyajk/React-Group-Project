import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
  },
});

export default store;
