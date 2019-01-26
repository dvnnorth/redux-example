import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map((post, i) => (
      <Fragment key={i}>
        <h1>{post.title}</h1>
        <h2>{`UserID: ${post.userId} - PostID${post.id}`}</h2>
        <p>{post.body}</p>
        <hr />
      </Fragment>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
