import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { connect } from 'react-redux';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import setYear, { fetchCalendarEndpoint } from '../../redux';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const WorldCalendar = (props: any) => {
  const {
    calendar: { calendar },
    year: { year },
    country: { country },
  } = props;

  // console.log(
  //   '///////default date',
  //   moment().toDate(),
  //   'what im sending',
  //   moment({ year: year, month: 0, day: 1 }).toDate()
  // );

  return (
    <div>
      {country === '' ? (
        <h1>Please Select a Country</h1>
      ) : calendar.loading === true ? (
        <h1>Loading..........</h1>
      ) : calendar.error.happened === true ? (
        <h2>
          {calendar.error.payload.message} (please see if your getting response
          from API)
        </h2>
      ) : (
        <Calendar
          events={calendar.holidays}
          defaultDate={moment({ year: year, month: 0, day: 1 }).toDate()}
          max={new Date(2042, 11, 12)}
          defaultView="month"
          localizer={localizer}
          style={{ height: 500, width: '95%' }}
          startAccessor="start"
          endAccessor="end"
          onNavigate={(e: any) => {
            let currentYear = moment(e).year();

            if (year !== currentYear) {
              // console.log('/////updated year', currentYear);
              props.setYear(currentYear);
            }
          }}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    calendar: state,
    year: state.year,
    country: state.country,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCalendarHolidays: (year: number, countryName: string) =>
      dispatch(fetchCalendarEndpoint(year, countryName)),
    setYear: (year: number) => dispatch(setYear(year)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WorldCalendar);
