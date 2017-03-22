import React, { Component } from 'react';

import Enter from './Enter';
import { history } from '../../redux/store';

class EnterContainer extends Component {
  // static propTypes = {};
  
  goToMenu() {
    history.push(`/lessons`)
  }

  render() {
    return (
      <Enter goToMenu={this.goToMenu} />
    );
  }
}

export default EnterContainer;
