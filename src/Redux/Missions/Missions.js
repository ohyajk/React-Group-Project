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

// The reducer
const MissionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MISSIONS':
      return {
        missions: action.payload,
      };
    case 'JOIN_MISSION': {
      // Update the state if the mission id matches the payload
      const stateUpdate = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
      return { missions: stateUpdate };
    }
    case 'LEAVE_MISSION': {
      // Update the state if the mission id matches the payload
      const stateUpdate = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: false };
        }
        return mission;
      });
      return { mission: stateUpdate };
    }

    default:
      return state;
  }
};

export { loadMissions, FetchMissions };
export default MissionsReducer;
