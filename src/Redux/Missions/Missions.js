// an object that contains all the missions
const initialState = {
  missions: [],
};

// The action creator
export const loadMissions = (missions) => ({
  type: 'LOAD_MISSIONS',
  payload: missions,
});
