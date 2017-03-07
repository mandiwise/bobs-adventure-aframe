import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

const Sky = ({ color }) => {
  return (
    <Entity 
      geometry={{
        primitive: 'sphere', 
        radius: 100,
      }} 
      material={{
        color, 
        shader: 'flat'
      }} 
      scale={[1, 1, -1]}
    />
  );
};

Sky.defaultProps = {
  // color: '#77e3ff', DARKER
  color: '#ace7fa'
};

Sky.propTypes = {
  color: PropTypes.string
};

export default Sky;
