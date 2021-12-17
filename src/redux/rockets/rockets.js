import _ from 'lodash';

const TOGGLE_RESERVATION = 'SPACE_TRAVELERS_HUB/ROCKETS/TOGGLE_RESERVATION';
const FETCH_SUCCEED = 'SPACE_TRAVELERS_HUB/ROCKETS/FETCH_SUCCEED';
const FETCH_FAILED = 'SPACE_TRAVELERS_HUB/ROCKETS/FETCH_FAILED';

const apiURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const storeData = (payload) => ({
  type: FETCH_SUCCEED,
  payload,
});

const fetchFailed = () => ({
  type: FETCH_FAILED,
});

export const toggleReservation = (payload) => ({
  type: TOGGLE_RESERVATION,
  payload,
});

export const fetchRockets = () => async (dispatch) => {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    let rocketDesiredProperties = {};
    const rockets = [];

    _.forEach(data, (rocket) => {
      rocketDesiredProperties = {
        id: rocket.id,
        name: rocket.rocket_name,
        type: rocket.rocket_type,
        image: rocket.flickr_images[0],
        description: rocket.description,
        isReserved: false,
      };
      rockets.push(rocketDesiredProperties);
    });

    dispatch(storeData(rockets));
  } catch (error) {
    dispatch(fetchFailed());
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCEED:
      return payload;
    case TOGGLE_RESERVATION:
      return _.map(state, (rocket) => (rocket.id === payload
        ? { ...rocket, isReserved: !rocket.isReserved }
        : rocket));
    case FETCH_FAILED:
      return {
        error: 'Failed to fetch data :(  please try to reload the page',
      };
    default:
      return state;
  }
};

export default reducer;
