import React, { Component } from "react";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let post = this.props.post;
    return (
      <div className="post-card">
        <div className="title">
          <label htmlFor="postTitle">
            <b>Title:</b> {post.title}
          </label>
        </div>
        <div className="post-body">
          <label>
            <b>Body:</b>
          </label>
          <p>{post.body}</p>
        </div>
      </div>
    );
  }
}

export default Post;
