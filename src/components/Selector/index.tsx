import React from 'react';
import styles from './selector.module.css';
import { countryArr } from './../../utils/countries';
import { fetchCalendarEndpoint } from '../../redux';
import { connect } from 'react-redux';

const Selector = (props: any) => {
  const handleSelect = (e: any) => {
    console.log('//////country Selected', e.target.value);
    props.fetchCalendarHolidays(2022, e.target.value);
  };
  return (
    <div className={`${styles.center}`}>
      <select
        onChange={handleSelect}
        className={`${styles.select}`}
        name="country"
        id="countries"
      >
        <option value="PK">Pakistan</option>
        {countryArr.map((country, i) => {
          return (
            <option key={i} value={country.value}>
              {country.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCalendarHolidays: (year: number, countryName: string) =>
      dispatch(fetchCalendarEndpoint(year, countryName)),
  };
};
export default connect(null, mapDispatchToProps)(Selector);
