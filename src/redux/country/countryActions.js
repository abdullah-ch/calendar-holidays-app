import { SET_COUNTRY } from './countryTypes';

export const setCountry = (country) => {
  // console.log('///////////Action', country);
  return {
    type: SET_COUNTRY,
    payload: country,
  };
};
