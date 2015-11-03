import React, { PropTypes } from 'react';

const shortMonths = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function formatDateRange(startDate, endDate) {
  const startDay = startDate.getDate();
  const startMonth = shortMonths[startDate.getMonth()];
  const startYear = startDate.getFullYear();
  const endDay = endDate.getDate();
  const endMonth = shortMonths[endDate.getMonth()];
  const endYear = endDate.getFullYear();

  if (startYear === endYear) {
    return `${startMonth} ${startDay} to ${endMonth} ${endDay}, ${endYear}`;
  } else {
    return `${startMonth} ${startDay}, ${startYear} to ${endMonth} ${endDay}, ${endYear}`;
  }
}

function DateRange(props) {
  const dateRange = formatDateRange(props.startDate, props.endDate);

  return (
    <div>
      {dateRange}
    </div>
  );
}

DateRange.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired
};

export default DateRange;
