import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

const Plane = (props) => {
  return (
    <Entity 
      geometry={{
        primitive: 'plane',
        height: props.height,
        width: props.width
      }}
      material={{
        color: props.color,
        shader: 'flat'
      }}
      {...props}
    />
  );
};

Plane.defaultProps = {
  color: 'black',
  height: 1,
  position: [0, 0, -4],
  rotation: [0, 0, 0],
  scale: [1, 1, 1],
  width: 1
};

Plane.propTypes = { 
  color: PropTypes.string,
  height: PropTypes.number,
  position: PropTypes.array,
  rotation: PropTypes.array,
  scale: PropTypes.array,
  width: PropTypes.number
}

export default Plane;