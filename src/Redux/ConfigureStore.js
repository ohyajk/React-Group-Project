import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './Rockets/Rockets';
import MissionsReducer from './Missions/Missions';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: MissionsReducer,
  },
});

export default store;
