import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

const Console = (props) => {
  return (
    <Entity onClick={props.goToNextPanel}>
      {props.children}
    </Entity>
  );
};

Console.propTypes = {
  children: PropTypes.node
};

export default Console;
