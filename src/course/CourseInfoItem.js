import React, { PropTypes } from 'react';
import { Label } from '../typography';

function CourseInfoItem(props) {
  const value = props.value || props.children;

  return (
    <div>
      <Label type="secondary" elementType="h3">{props.label}</Label>
      <Label>{value}</Label>
    </div>
  );
}

CourseInfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default CourseInfoItem;
