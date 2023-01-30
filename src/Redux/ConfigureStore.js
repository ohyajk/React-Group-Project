import { configureStore } from '@reduxjs/toolkit';
import MissionsReducer from './Missions/Missions';

const store = configureStore({
  reducer: {
    missions: MissionsReducer,
  },
});

export default store;
