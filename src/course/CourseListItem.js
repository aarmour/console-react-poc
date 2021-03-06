import React, { PropTypes } from 'react';
import styles from './CourseListItem.css';
import { CourseInfoItem, CourseActionButtons } from './';
import { Title, Label } from '../typography';
import { DateRange } from '../date-formatting';

function handleAction(action, courseId, event) {
  if (event && event.defaultPrevented) return;
  if (action) action(courseId);
  if (event) event.preventDefault();
}

function renderEducators(props) {
  const educators = props.educators.slice(0, 2).join(',<br>');

  if (props.educators.length > 2) {
    const count = props.educators.length - 2;

    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: educators}} />
        <Label type="secondary">+{count} more</Label>
      </div>
    );
  } else {
    return <div dangerouslySetInnerHTML={{__html: educators}} />;
  }
}

function CourseListItem(props) {
  const thumbnailBg = { backgroundImage: `url(${props.thumbnailUrl})` };

  return (
    <div className={styles.root} onClick={handleAction.bind(null, props.onSelectCourse, props.id)}>
      <div className={styles.sidebar}>
        <div className={styles.thumbnail} style={thumbnailBg}></div>
      </div>
      <div className={styles.content}>
        <span className={styles.textSecondary}>{props.brand}</span>
        <Title><a href="#" className={styles.link}>{props.title}</a></Title>
        <span className={styles.textSecondary}>{props.sectionCode}</span>
        <CourseInfoItem label="Educators:">
          {renderEducators(props)}
        </CourseInfoItem>
        <CourseInfoItem label="Course Dates:">
          <DateRange startDate={props.startDate} endDate={props.endDate} />
        </CourseInfoItem>
      </div>
      <div className={styles.actionBtnContainer}>
        <CourseActionButtons
          isUserOwner={props.isUserOwner}
          isDeleted={props.isDeleted}
          onInviteStudents={handleAction.bind(null, props.onInviteStudents, props.id)}
          onCourseSettings={handleAction.bind(null, props.onCourseSettings, props.id)}
          onSelectCourse={handleAction.bind(null, props.onSelectCourse, props.id)}
          onRemoveCourse={handleAction.bind(null, props.onRemoveCourse, props.id)}
        />
      </div>
    </div>
  );
}

CourseListItem.propTypes = {
  id: PropTypes.string.isRequired,
  brand: PropTypes.string,
  title: PropTypes.string.isRequired,
  sectionCode: PropTypes.string,
  educators: PropTypes.array.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  isDeleted: PropTypes.bool,
  isUserOwner: PropTypes.bool,
  onSelectCourse: PropTypes.func,
  onRemoveCourse: PropTypes.func,
  onInviteStudents: PropTypes.func,
  onCourseSettings: PropTypes.func
};

CourseListItem.defaultProps = {
  educators: [],
  isDeleted: false,
  isUserOwner: false
};

export default CourseListItem;
