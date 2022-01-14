import axios from 'axios';
import {
  CALENDAR_API_ERROR,
  CALENDAR_API_REQUEST,
  CALENDAR_API_SUCCESS,
} from './calendarActionTypes';

export const fetchCalendarAPI = () => {
  return {
    type: CALENDAR_API_REQUEST,
  };
};

export const fetchCalendarAPISuccess = (calendar) => {
  return {
    type: CALENDAR_API_SUCCESS,
    payload: calendar,
  };
};

export const fetchCalendarAPIError = (error) => {
  return {
    type: CALENDAR_API_ERROR,
    payload: error,
  };
};

const proneIntoCalendarData = (responseArr) => {
  const pronedArr = [];
  // console.log('/////unPronedArr', responseArr);

  responseArr.map((holiday, i) => {
    return pronedArr.push({
      id: i++,
      title: holiday.name,
      start: new Date(
        holiday.date.datetime.year,
        holiday.date.datetime.month - 1,
        holiday.date.datetime.day,
        holiday.date.datetime.hour ? holiday.date.datetime.hour : 0,
        holiday.date.datetime.minute ? holiday.date.datetime.minute : 0,
        holiday.date.datetime.second ? holiday.date.datetime.second : 0
      ),
      end: new Date(
        holiday.date.datetime.year,
        holiday.date.datetime.month - 1,
        holiday.date.datetime.day
      ),
    });
  });
  // console.log('/////pronedArr', pronedArr);
  return pronedArr;
};

export const fetchCalendarEndpoint = (year = 2022, countryName = 'PK') => {
  return async (dispatch) => {
    dispatch(fetchCalendarAPI());
    try {
      const response = await axios.get(
        `https://calendarific.com/api/v2/holidays?api_key=5b37ddb55b4cad39bf705addd8ccf3f62b6b89e1&country=${countryName}&year=${year}`
      );
      const pronedHolidaysData = proneIntoCalendarData(
        response.data.response.holidays
      );
      dispatch(fetchCalendarAPISuccess(pronedHolidaysData));
    } catch (error) {
      console.log(error);
      dispatch(fetchCalendarAPIError(error));
    }
  };
};
