import React, { PropTypes } from 'react';
import styles from './Title.css';

const SIZES = ['large', 'extra-large'];

function Title(props) {
  return (
    <div className={styles.root}>{props.children}</div>
  );
}

Title.propTypes = {
  size: PropTypes.oneOf(SIZES)
};

export default Title;
