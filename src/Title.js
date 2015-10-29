import React, { PropTypes } from 'react';

const SIZES = ['large', 'extra-large'];

function Title(props) {
  return (
    <div>{props.children}</div>
  );
}

Title.propTypes = {
  size: PropTypes.oneOf(SIZES)
};

export default Title;
