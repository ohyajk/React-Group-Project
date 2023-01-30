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
const FetchMissions = createAsyncThunk(
  'LOAD_MISSIONS',
  async (dispatch) => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    dispatch(loadMissions(data));
  },
);
