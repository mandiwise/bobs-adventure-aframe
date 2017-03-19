import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

const ObjModel = (props) => {
  return (
    <Entity 
      obj-model={`obj: ${props.obj}; mtl: ${props.mtl}`}
      position={props.position}
      rotation={props.rotation}
      scale={props.scale}
    >
      {props.children}
    </Entity>
  );
};

ObjModel.defaultProps = {
  position: [0, 0, -5],
  scale: [1, 1, 1]
};

ObjModel.propTypes = {
  children: PropTypes.node,
  mtl: PropTypes.string.isRequired,
  obj: PropTypes.string.isRequired,
  position: PropTypes.array,
  rotation: PropTypes.array,
  scale: PropTypes.array
};

export default ObjModel;
