import React, { PropTypes } from 'react';

const TYPES = ['primary', 'secondary'];
const DEFAULT_TYPE = 'primary';

function Label(props) {
  return (
    <label>{props.children}</label>
  );
}

Label.propTypes = {
  type: PropTypes.oneOf(TYPES)
};

Label.defaultProps = {
  type: DEFAULT_TYPE
};

export default Label;
