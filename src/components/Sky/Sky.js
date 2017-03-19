import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

import { colors } from '../../styles/theme';

const Sky = (props) => {
  return (
    <Entity 
      geometry={{
        primitive: 'sphere', 
        radius: 100,
      }} 
      material={{
        color: props.color, 
        shader: 'flat'
      }} 
      scale={[1, 1, -1]}
    />
  );
};

Sky.defaultProps = {
  color: colors.skyBlue
};

Sky.propTypes = {
  color: PropTypes.string
};

export default Sky;
