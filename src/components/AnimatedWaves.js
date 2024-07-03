import React from 'react';
import PropTypes from 'prop-types';

const AnimatedWaves = ({ className, fillOpacity, pathData, animation }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className={`wave ${className}`}
      style={{ animation }}
    >
      <path
        fill="#00cba9"
        fillOpacity={fillOpacity}
        d={pathData}
      ></path>
    </svg>
  );
};

AnimatedWaves.propTypes = {
    className: PropTypes.string.isRequired,
    fillOpacity: PropTypes.number.isRequired,
    pathData: PropTypes.string.isRequired,
    animation: PropTypes.string.isRequired,
  };

export default AnimatedWaves;