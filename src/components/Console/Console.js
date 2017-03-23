import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

const Console = (props) => {
  return (
    <Entity 
      rotation={props.rotation} 
      onClick={props.goToNextPanel}
    >
      {props.children}
    </Entity>
  );
};

Console.propTypes = {
  children: PropTypes.node,
  rotation: PropTypes.array
};

export default Console;
