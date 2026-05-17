import React from 'react';
import './styles.css';

const Spinner = ({ size = 80, color = 'rgb(209, 29, 50)' }) => (
  <span
    className="jdp-spinner"
    role="status"
    aria-label="Loading"
    style={{
      width: size,
      height: size,
      borderColor: color,
      borderTopColor: 'transparent',
    }}
  />
);

export default Spinner;
