import React, { useEffect } from 'react';
import styles from './selector.module.css';
import { countryArr } from './../../utils/countries';
import { fetchCalendarEndpoint, setCountry } from '../../redux';
import { connect } from 'react-redux';

const Selector = (props: any) => {
  const {
    country: { country },
    year: { year },
  } = props;

  useEffect(() => {
    if (country !== '') {
      console.log('/// Country and Year Changed in useEffect', country, year);
      props.fetchCalendarHolidays(year, country);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, year]);

  const handleSelect = (e: any) => {
    props.setCountry(e.target.value);
  };
  return (
    <div className={`${styles.center}`}>
      <select
        onChange={handleSelect}
        className={`${styles.select}`}
        name="country"
        id="countries"
      >
        <option disabled selected>
          Select Desired Country
        </option>
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

const mapStateToProps = (state: any) => {
  return {
    country: state.country,
    year: state.year,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCalendarHolidays: (year: number, countryName: string) =>
      dispatch(fetchCalendarEndpoint(year, countryName)),
    setCountry: (countryName: string) => dispatch(setCountry(countryName)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Selector);
