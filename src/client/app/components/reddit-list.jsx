import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class RedditListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);

    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  getSubreddits() {
    const baseURL = 'http://www.reddit.com/r';
    return axios.get(`${baseURL}/${this.props.subreddit}.json`);
  }

  componentDidMount() {
    this.getSubreddits()
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  renderLoading() {
    return (<div>Loading...</div>);
  }

  renderError() {
    return (<div> Uh oh: {this.state.error.message}</div>);
  }

  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }
    return (
      <ul>
        {this.state.posts.map(post =>
          <li key={post.id}>{post.title}</li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Reddit Topic List for {`${this.props.subreddit}`}</h1>
        {this.state.loading ? this.renderLoading() : this.renderPosts()}
        <div>
          <Button bsStyle="primary" bsSize="small" onClick={this.renderPosts}>Reload Post</Button>
        </div>
      </div>
    );
  }
}

export default RedditListComponent;
