import {
  CALENDAR_API_ERROR,
  CALENDAR_API_REQUEST,
  CALENDAR_API_SUCCESS,
} from './calendarActionTypes';
const initialState = {
  holidays: [],
  loading: true,
  error: {
    happened: false,
    payload: {},
  },
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALENDAR_API_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CALENDAR_API_SUCCESS:
      return {
        ...state,
        loading: false,
        holidays: action.payload,
        error: {
          happened: false,
          payload: {},
        },
      };

    case CALENDAR_API_ERROR:
      return {
        ...state,
        loading: false,
        error: {
          happened: true,
          payload: action.payload,
        },
        holidays: [],
      };

    default:
      return state;
  }
};
