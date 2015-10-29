import React, { PropTypes } from 'react';
import styles from './Label.css';

const TYPES = ['primary', 'secondary'];
const DEFAULT_TYPE = 'primary';
const ELEMENT_NAMES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span', 'label'];
const DEFAULT_ELEMENT_NAME = 'label';

function Label(props) {
  const className = styles[props.type];

  return (
    <props.elementName className={className}>{props.children}</props.elementName>
  );
}

Label.propTypes = {
  type: PropTypes.oneOf(TYPES),
  elementName: PropTypes.oneOf(ELEMENT_NAMES)
};

Label.defaultProps = {
  type: DEFAULT_TYPE,
  elementName: DEFAULT_ELEMENT_NAME
};

export default Label;
