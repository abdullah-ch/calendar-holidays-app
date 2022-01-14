import { SET_COUNTRY } from './countryTypes';

const initialState = {
  country: '',
};

const countryReducer = (state = initialState, action) => {
  // console.log('////reducer country action', action.payload);
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    default:
      return state;
  }
};

export default countryReducer;
