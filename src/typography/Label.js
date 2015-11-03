import React, { PropTypes } from 'react';
import styles from './Label.css';

const TYPES = ['primary', 'secondary'];
const DEFAULT_TYPE = 'primary';
const ELEMENT_NAMES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span', 'label'];
const DEFAULT_ELEMENT_NAME = 'label';

function Label(props) {
  const className = styles[props.type];

  return (
    <props.elementType className={className}>{props.children}</props.elementType>
  );
}

Label.propTypes = {
  type: PropTypes.oneOf(TYPES),
  elementType: PropTypes.oneOf(ELEMENT_NAMES)
};

Label.defaultProps = {
  type: DEFAULT_TYPE,
  elementType: DEFAULT_ELEMENT_NAME
};

export default Label;
