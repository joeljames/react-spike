import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Table } from 'react-bootstrap';

import LikeComponent from './components/like-component.jsx';
import NavComponent from './components/nav-component.jsx';
import RedditListComponent from './components/reddit-list.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to React.js Spike</h1>
        <p>
          The main aim of this spike is to demonstrate how to setup a javascript app environment, compile ES6 and jsx to js, and building components with react.
          Below is the list of react components which will be demonstrated.
         </p>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Component Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Like Componenent</td>
            <td>Displays a comment where a user can react to a commment with like/dislike</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Reddit List Component</td>
            <td>Fetches react.js subreddits and displays it in a list</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Navigation Componenent</td>
            <td>Uses componenents from react-bootstrap to create a navigation bar</td>
          </tr>
        </tbody>
      </Table>
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
