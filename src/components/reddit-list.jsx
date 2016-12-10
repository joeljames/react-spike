import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class RedditListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.reloadPosts = this.reloadPosts.bind(this);
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

  setPosts() {
    this.getSubreddits()
      .then((res) => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  componentDidMount() {
    this.setPosts();
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

  reloadPosts() {
    this.setState({
      posts: [],
      loading: true,
      error: null
    });
    this.setPosts();
    this.renderPosts();
  }

  render() {
    return (
      <div>
        <h2>Reddit Topic List for {`${this.props.subreddit}`}</h2>
        {this.state.loading ? this.renderLoading() : this.renderPosts()}
        <div>
          <Button bsStyle="primary" bsSize="small" onClick={this.reloadPosts}>Reload Post</Button>
        </div>
      </div>
    );
  }
}

export default RedditListComponent;
