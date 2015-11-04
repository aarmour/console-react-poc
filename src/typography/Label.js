import React, { PropTypes } from 'react';
import styles from './Label.css';

const TYPES = ['primary', 'secondary'];
const DEFAULT_TYPE = 'primary';
const ELEMENT_NAMES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'label'];
const DEFAULT_ELEMENT_NAME = 'div';

function Label(props) {
  const className = [props.className, styles[props.type]].join(' ');

  return (
    <props.elementType className={className}>{props.children}</props.elementType>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(TYPES),
  elementType: PropTypes.oneOf(ELEMENT_NAMES)
};

Label.defaultProps = {
  type: DEFAULT_TYPE,
  elementType: DEFAULT_ELEMENT_NAME
};

export default Label;
