import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
  },
});

export default store;
