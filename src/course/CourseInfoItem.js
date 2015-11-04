import React, { PropTypes } from 'react';
import styles from './CourseInfoItem.css';
import { Label } from '../typography';

function CourseInfoItem(props) {
  const value = props.value || props.children;

  return (
    <div>
      <Label className={styles.label} type="secondary" elementType="h3">{props.label}</Label>
      <Label>{value}</Label>
    </div>
  );
}

CourseInfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default CourseInfoItem;
