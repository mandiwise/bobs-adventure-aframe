import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

const Plane = ({ color, position, rotation, scale }) => {
  return (
    <Entity 
      geometry={{
        primitive: 'plane',
      }}
      material={{
        color,
        shader: 'flat'
      }}
      position={position} 
      rotation={rotation}
      scale={scale}
    />
  );
};

Plane.defaultProps = {
  color: '#000000',
  position: [0, 0, -4],
  rotation: [0, 0, 0],
  scale: [1, 1, 1]
};

Plane.propTypes = { 
  color: PropTypes.string,
  position: PropTypes.array,
  rotation: PropTypes.array,
  scale: PropTypes.array,
}

export default Plane;