import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import { store, history } from './redux/store';

import Welcome from './containers/Welcome';
import Enter from './containers/Enter';
import Lessons from './containers/Lessons';
import Variables from './containers/Variables';
import Functions from './containers/Functions';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/">
            <IndexRoute component={Welcome} />
            <Route path="enter" component={Enter} />
            <Route path="lessons">
              <IndexRoute component={Lessons} />
              <Route path="variables" component={Variables} />
              <Route path="functions" component={Functions} />
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }

}
