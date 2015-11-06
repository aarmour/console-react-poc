import React, { PropTypes } from 'react';
import styles from './CourseList.css';
import CourseListItem from './CourseListItem';

function CourseList(props) {
  return (
    <ul className={styles.root}>
      {props.courses.map(course => {
        return <li key={course.id}><CourseListItem {...course} {...props} /></li>;
      })}
    </ul>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onSelectCourse: PropTypes.func.isRequired,
  onRemoveCourse: PropTypes.func.isRequired,
  onInviteStudents: PropTypes.func.isRequired,
  onCourseSettings: PropTypes.func.isRequired
};

export default CourseList;
