const POPULATE_MISSIONS = 'missions/POPULATE_MISSIONS';
const TOGGLE_RESERVATION = 'missions/TOGGLE_STATUS';

const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_MISSIONS:
      return action.payload;
    case TOGGLE_RESERVATION:
      return state.map((mission) => (mission.mission_id === action.payload
        ? { ...mission, reserved: !mission.reserved }
        : mission));
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
  const newMissions = missions.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  if (response.ok) {
    dispatch(populateMissions(newMissions));
  }
};

export const toggleMissionReservation = (payload) => ({
  type: TOGGLE_RESERVATION,
  payload,
});

export default missionsReducer;
