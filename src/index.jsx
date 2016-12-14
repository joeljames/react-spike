import React from 'react';
import {render} from 'react-dom';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import LikeComponent from './components/like-component.jsx';
import NavComponent from './components/nav-component.jsx';
import RedditListComponent from './components/reddit-list.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        This is the main
      </div>
    );
  }
}

render(
  <div>
    <NavComponent />
    <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='/example1' component={LikeComponent} />
      <Route path='/example2' component={RedditListComponent} />
    </Router>
  </div>,
  document.getElementById('app')
);
