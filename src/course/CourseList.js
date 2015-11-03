import React, { PropTypes } from 'react';

function CourseList(props) {
  return (
    <ul>
    </ul>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
