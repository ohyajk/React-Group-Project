import { createAsyncThunk } from '@reduxjs/toolkit';

// an object that contains all the missions
const initialState = {
  missions: [],
};

// The action creator
const loadMissions = (payload) => ({
  type: 'LOAD_MISSIONS',
  payload,
});

// Fetch the mission from the API
