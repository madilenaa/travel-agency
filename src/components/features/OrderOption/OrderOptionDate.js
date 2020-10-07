import React from 'react';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';

const OrderOptionDate = ({ currentValue, setOptionValue }) => (
  <div>
    <DatePicker
      selected={currentValue}
      onChange={setOptionValue}
      placeholderText="Click to select a date"
      dateFormat="dd/MM/yyyy"
    />
  </div>
);

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.date,
};

export default OrderOptionDate;
