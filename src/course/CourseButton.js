import React, { PropTypes } from 'react';
import styles from './CourseButton.css';

function handleClick(props, event) {
  if (props.onClick) {
    props.onClick(event);
  }

  event.preventDefault();
}

function CourseButton(props) {
  return (
    <a href="#" className={styles.root} onClick={handleClick.bind(this, props)}>
      {props.text}
    </a>
  );
}

CourseButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default CourseButton;
