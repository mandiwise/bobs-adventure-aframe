/* global AFRAME */
import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

const Text = (props) => {
  const extraProps = AFRAME.utils.extend({}, props);
  delete extraProps.color;
  delete extraProps.text;

  return (
    <Entity
      text={props.text} material={{color: props.color}}
      {...extraProps}
    >
      {props.children}
    </Entity>
  );
};

Text.defaultProps = {
  color: ''
};

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  text: PropTypes.object
};

export default Text;
