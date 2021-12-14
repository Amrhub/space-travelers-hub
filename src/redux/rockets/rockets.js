const STORE_DATA = 'SPACE_TRAVELERS_HUB/ROCKETS/STORE_DATA';

const apiURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

const storeData = (payload) => ({
  type: STORE_DATA,
  payload,
});

export const fetchRockets = () => async (dispatch) => {
  const response = await fetch(apiURL);
  const data = await response.json();
  dispatch(storeData(data));
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STORE_DATA:
      return payload;
    default:
      return state;
  }
};

export default reducer;
