import React, { PropTypes } from 'react';
import { Label } from './';

function LabelGroup(props) {
  return (
    <div>
      <Label {...props}>{props.label}</Label>
      <span>{props.children}</span>
    </div>
  );
}

LabelGroup.propTypes = {
  label: PropTypes.string.isRequired
};

export default LabelGroup;
