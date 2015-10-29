import React, { PropTypes } from 'react';

function DateRange(props) {
  return (
    <div>
      {props.startDate.toString()} to {props.endDate.toString()}
    </div>
  );
}

DateRange.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired
};

export default DateRange;
