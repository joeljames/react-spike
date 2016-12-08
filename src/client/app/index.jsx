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
        <p> Team Tesla is awesome!</p>
        <LikeComponent />
        <RedditListComponent subreddit="reactjs"/>
      </div>
    );
  }
}

var appMountNode = document.getElementById('app');
render(<App/>, appMountNode);
