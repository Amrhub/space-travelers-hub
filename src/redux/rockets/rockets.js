import _ from 'lodash';

const STORE_DATA = 'SPACE_TRAVELERS_HUB/ROCKETS/STORE_DATA';

const apiURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const storeData = (payload) => ({
  type: STORE_DATA,
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
    };
    rockets.push(rocketDesiredProperties);
  });

  dispatch(storeData(rockets));
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
