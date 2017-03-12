import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Welcome from './scenes/Welcome';
import Variables from './scenes/Variables';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Welcome} />
          <Route path="/variables" component={Variables} />
        </div>
      </Router>
    );
  }

}
