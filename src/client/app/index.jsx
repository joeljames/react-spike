import React from 'react';
import {render} from 'react-dom';
import LikeComponent from './components/like-component.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Team Tesla is awesome!</p>
        <LikeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
