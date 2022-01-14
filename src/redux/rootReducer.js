import { combineReducers } from 'redux';
import { calendarReducer } from './calendar/calendarReducer';
import countryReducer from './country/countryReducer';
import yearReducer from './year/yearReducer';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  year: yearReducer,
  country: countryReducer,
});

export default rootReducer;
