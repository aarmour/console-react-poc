import React, { PropTypes } from 'react';
import styles from './CourseListItem.css';
import { Title, LabelGroup, DateRange } from './';

function handleClick(props, event) {
  if (props.onSelectCourse) {
    props.onSelectCourse(props.title);
  }

  event.preventDefault();
}

function CourseListItem(props) {
  const educators = props.educators.join(', ');

  return (
    <div className={styles.root} onClick={handleClick.bind(this, props)}>
      <Title><a href="#">{props.title}</a></Title>
      <LabelGroup
        type="secondary"
        label="Educators:"
        elementName="h3">
        {educators}
      </LabelGroup>
      <LabelGroup
        type="secondary"
        label="Course Dates:"
        elementName="h3">
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
  isDeleted: PropTypes.bool,
  onSelectCourse: PropTypes.func
};

CourseListItem.defaultProps = {
  educators: [],
  isDeleted: false
};

export default CourseListItem;
