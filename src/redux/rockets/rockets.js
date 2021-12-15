import _ from 'lodash';

const STORE_DATA = 'SPACE_TRAVELERS_HUB/ROCKETS/STORE_DATA';
const TOGGLE_RESERVATION = 'SPACE_TRAVELERS_HUB/ROCKETS/TOGGLE_RESERVATION';

const apiURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const storeData = (payload) => ({
  type: STORE_DATA,
  payload,
});

export const toggleReservation = (payload) => ({
  type: TOGGLE_RESERVATION,
  payload,
});

export const fetchRockets = () => async (dispatch) => {
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
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STORE_DATA:
      return payload;
    case TOGGLE_RESERVATION: {
      const newState = _.map(state, (rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, isReserved: !rocket.isReserved };
        }
        return rocket;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
