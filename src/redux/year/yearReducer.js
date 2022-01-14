import { SET_YEAR } from './yearTypes';

const initialState = {
  year: 2022,
};

const yearReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };

    default:
      return state;
  }
};

export default yearReducer;
