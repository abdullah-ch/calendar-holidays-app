import { SET_YEAR } from './yearTypes';

export const setYear = (year) => {
  return {
    type: SET_YEAR,
    payload: year,
  };
};
