import React from 'react';
import {render} from 'react-dom';
import LikeComponent from './components/like-component.jsx';
import NavComponent from './components/nav-component.jsx';
import RedditListComponent from './components/reddit-list.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavComponent />
        <h1> Example 1</h1>
        <p> Team Tesla is awesome!</p>
        <LikeComponent />
        <h1> Example 2</h1>
        <RedditListComponent subreddit="reactjs"/>
      </div>
    );
  }
}

var appMountNode = document.getElementById('app');
render(<App/>, appMountNode);
