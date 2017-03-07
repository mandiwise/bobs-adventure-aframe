import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

const ObjModel = ({ obj, mtl, scale, position }) => {
  return (
    <Entity 
      obj-model={`obj: ${obj}; mtl: ${mtl}`}
      position={position}
      scale={scale}
    />
  );
};

ObjModel.defaultProps = {
  position: [0, 0, -5],
  scale: [1, 1, 1]
};

ObjModel.propTypes = {
  mtl: PropTypes.string.isRequired,
  obj: PropTypes.string.isRequired,
  position: PropTypes.array,
  scale: PropTypes.array
};

export default ObjModel;
