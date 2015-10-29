import React, { PropTypes } from 'react';
import { Label } from './';

function LabelGroup(props) {
  return (
    <div>
      <Label>{props.label}</Label>
      <div>{props.children}</div>
    </div>
  );
}

LabelGroup.propTypes = Object.assign(
  {},
  {
    label: PropTypes.string.isRequired
  },
  Label.propTypes
);

LabelGroup.defaultProps = Object.assign({}, Label.defaultProps);

export default LabelGroup;
