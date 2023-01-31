// an object that contains all the missions
const initialState = {
  missions: [],
};

// The action creator
const loadMissions = (payload) => ({
  type: 'FETCH_MISSIONS',
  payload,
});

const joinMission = (payload) => ({
  type: 'JOIN_MISSION',
  payload,
});

const leaveMission = (payload) => ({
  type: 'LEAVE_MISSION',
  payload,
});

const FetchMissions = () => async (dispatch) => {
  const request = await fetch('https://api.spacexdata.com/v3/missions');
  const response = await request.json();
  const missions = Object.keys(response).map((id) => {
    const mission = {
      mission_id: response[id].mission_id,
      mission_name: response[id].mission_name,
      description: response[id].description,
    };
    return mission;
  });
  dispatch(loadMissions(missions));
};

// The reducer
const MissionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MISSIONS':
      return {
        missions: action.payload,
      };
    case 'JOIN_MISSION': {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
      return { missions: newState };
    }
    case 'LEAVE_MISSION': {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: false };
        }
        return mission;
      });
      return { missions: newState };
    }

    default: {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      }); return { missions: newState }; }
  }
};

export {
  loadMissions, leaveMission, joinMission, FetchMissions,
};
export default MissionsReducer;
