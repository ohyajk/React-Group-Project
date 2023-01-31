import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsSlice from './Rockets/Rockets';
import MissionsReducer from './Missions/Missions';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: MissionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
