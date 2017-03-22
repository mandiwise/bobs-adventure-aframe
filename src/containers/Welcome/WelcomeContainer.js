import React, { Component } from 'react';

import Welcome from './Welcome';

import '../../styles/shared.css';

class WelcomeContainer extends Component {
  // static propTypes = {};

  componentDidMount() {
    const height = window.innerHeight;
    setTimeout(() => this.scrollToContent(height), 2500);
  }

  render() {
    return (
      <Welcome />
    );
  }

  scrollToContent(height) {
    setTimeout(() => {
      let pageYOffset = window.pageYOffset;
      if ( pageYOffset >= height ) return;
      window.scrollBy(0, 10);
      this.scrollToContent(height)
    }, 5);
  }

}

export default WelcomeContainer;
