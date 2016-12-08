import React from 'react';
import { Button } from 'react-bootstrap';

class LikeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount: 0};
    this.onLike = this.onLike.bind(this);
    this.onDislike = this.onDislike.bind(this);

  }

  onLike() {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  onDislike() {
    let newLikesCount = this.state.likesCount - 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div>
          <Button bsStyle="primary" bsSize="small" onClick={this.onLike}>Like</Button>
          &nbsp;
          <Button bsStyle="primary" bsSize="small" onClick={this.onDislike}>Dislike</Button>
        </div>
      </div>
    );
  }
}

export default LikeComponent;
