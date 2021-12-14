const POPULATE_MISSIONS = 'missions/POPULATE_MISSIONS';

const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export const populateMissions = (payload) => ({
  type: POPULATE_MISSIONS,
  payload,
});

export const fetchMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = await response.json();
  if (response.ok) {
    dispatch(populateMissions(missions));
  }
};

export default missionsReducer;
