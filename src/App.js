import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import { store, history } from './redux/store';

import Welcome from './scenes/Welcome';
import Variables from './scenes/Variables';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route path="/" component={Welcome} />
            <Route path="/variables" component={Variables} />
          </div>
        </Router>
      </Provider>
    );
  }

}
