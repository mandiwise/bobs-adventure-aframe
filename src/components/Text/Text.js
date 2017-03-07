import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

const Text = ({ color, font, position, value, width }) => {
  return (
    <Entity 
      text={{ value, color, font, width }} 
      position={position} 
    />
  );
};

Text.defaultProps = {
  color: 'black',
  font: 'sourcecodepro',
  position: [2.1, 2, -5],
  value: '',
  width: 6
};

Text.propTypes = {
  color: PropTypes.string,
  font: PropTypes.string,
  position: PropTypes.array,
  value: PropTypes.string,
  width: PropTypes.number
};

export default Text;
