import React, { PropTypes } from 'react';
import styles from './CourseActionButtons.css';
import { CourseButton } from './';

function handleClick(handler, event) {
  handler();
  event.preventDefault();
}

function renderDeletedButtons(props) {
  return (
    <CourseButton
      text="Remove this course"
      onClick={handleClick.bind(this, props.onRemoveCourse)}
    />
  );
}

function renderOwnerButtons(props) {
  const buttonSeparator = {
    width: '149px',
    borderRight: 'solid 1px #ccc'
  };

  return (
    <div>
      <ul className={styles.buttonGroup}>
        <li className={styles.buttonGroupItem} style={buttonSeparator}>
          <CourseButton
            text="Invite Students"
            onClick={handleClick.bind(this, props.onInviteStudents)}
          />
        </li>
        <li className={styles.buttonGroupItem}>
          <CourseButton
            text="Course settings"
            onClick={handleClick.bind(this, props.onCourseSettings)}
          />
        </li>
      </ul>
    </div>
  );
}

function renderButtons(props) {
  return (
    <CourseButton
      text="Go to my course"
      onClick={handleClick.bind(this, props.onSelectCourse)}
    />
  );
}

function CourseActionButtons(props) {
  if (props.isDeleted) return renderDeletedButtons(props);
  if (props.isUserOwner) return renderOwnerButtons(props);
  return renderButtons(props);
}

CourseActionButtons.propTypes = {
  isUserOwner: PropTypes.bool,
  isDeleted: PropTypes.bool,
  onSelectCourse: PropTypes.func.isRequired,
  onRemoveCourse: PropTypes.func.isRequired,
  onInviteStudents: PropTypes.func.isRequired,
  onCourseSettings: PropTypes.func.isRequired
};

export default CourseActionButtons;
