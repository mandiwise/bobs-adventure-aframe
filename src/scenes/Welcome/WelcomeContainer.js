import React, { Component, PropTypes } from 'react';

import Welcome from './Welcome';

import '../../styles/shared.css';

class WelcomeContainer extends Component {

  render() {
    return (
      <Welcome />
    );
  }

}

WelcomeContainer.propTypes = {

};

export default WelcomeContainer;
