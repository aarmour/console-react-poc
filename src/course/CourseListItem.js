import React, { PropTypes } from 'react';
import styles from './CourseListItem.css';
import { CourseInfoItem } from './';
import { Title } from '../typography';
import { DateRange } from '../date-formatting';

function handleClick(props, event) {
  if (props.onSelectCourse) {
    props.onSelectCourse(props.title);
  }

  event.preventDefault();
}

function CourseListItem(props) {
  const educators = props.educators.join(', ');
  const thumbnailBg = { backgroundImage: `url(${props.thumbnailUrl})` };

  return (
    <div className={styles.root} onClick={handleClick.bind(this, props)}>
      <div className={styles.sidebar}>
        <div className={styles.thumbnail} style={thumbnailBg}></div>
      </div>
      <div className={styles.content}>
        <Title><a href="#">{props.title}</a></Title>
        <CourseInfoItem label="Educators:" value={educators} />
        <CourseInfoItem label="Course Dates:">
          <DateRange startDate={props.startDate} endDate={props.endDate} />
        </CourseInfoItem>
      </div>
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
  thumbnailUrl: PropTypes.string.isRequired,
  isDeleted: PropTypes.bool,
  onSelectCourse: PropTypes.func
};

CourseListItem.defaultProps = {
  educators: [],
  isDeleted: false
};

export default CourseListItem;
