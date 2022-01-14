import React, { useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { connect } from 'react-redux';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { fetchCalendarEndpoint } from '../../redux';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const WorldCalendar = (props: any) => {
  const {
    calendar: { calendar },
  } = props;
  useEffect(() => {
    props.fetchCalendarHolidays(2022, 'PK');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log('///////////////props.calendar', calendar.holidays);
  return (
    <div>
      {calendar.loading === true ? (
        <h1>Loading..........</h1>
      ) : calendar.error.happened === true ? (
        <h2>{calendar.error.payload.message}</h2>
      ) : (
        <Calendar
          events={calendar.holidays}
          defaultDate={moment().toDate()}
          defaultView="month"
          localizer={localizer}
          style={{ height: 500, width: '95%' }}
          startAccessor="start"
          endAccessor="end"
        />
      )}

      {/* <Calendar
        events={event}
        defaultDate={moment().toDate()}
        defaultView="month"
        localizer={localizer}
        style={{ height: 500, width: '95%' }}
        startAccessor="start"
        endAccessor="end"
      /> */}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    calendar: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCalendarHolidays: (year: number, countryName: string) =>
      dispatch(fetchCalendarEndpoint(year, countryName)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WorldCalendar);
