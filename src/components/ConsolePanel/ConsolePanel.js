import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

const ConsolePanel = ({ isActive, children }) => {
  return (
    <Entity visible={isActive}>
      {children}
    </Entity>
  );
};

ConsolePanel.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool
};

export default ConsolePanel;
