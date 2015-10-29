import React, { PropTypes } from 'react';
import styles from './CourseListItem.css';
import { Title, LabelGroup, DateRange } from './';

function CourseListItem(props) {
  return (
    <div className={styles.root}>
      <Title>{props.title}</Title>
      <LabelGroup
        type="secondary"
        label="Educators:">
        {props.educators.join(', ')}
      </LabelGroup>
      <LabelGroup
        type="secondary"
        label="Course Dates:">
        <DateRange
          startDate={props.startDate}
          endDate={props.endDate}
        />
      </LabelGroup>
    </div>
  );
}

CourseListItem.propTypes = {
  brand: PropTypes.string,
  title: PropTypes.string.isRequired,
  sectionCode: PropTypes.string,
  educators: PropTypes.array.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  isDeleted: PropTypes.bool
};

CourseListItem.defaultProps = {
  educators: [],
  isDeleted: false
};

export default CourseListItem;
