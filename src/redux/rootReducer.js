import { combineReducers } from 'redux';
import { calendarReducer } from './calendar/calendarReducer';

const rootReducer = combineReducers({
  calendar: calendarReducer,
});

export default rootReducer;
