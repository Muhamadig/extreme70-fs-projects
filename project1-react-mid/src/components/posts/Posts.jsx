import {
  faAngleDoubleDown,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Post from "./Post";
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { showPostsList: true };
  }
  togglePosts = () => {
    this.setState({ showPostsList: !this.state.showPostsList });
  };
  render() {
    let postsList = this.props.posts.map((post) => {
      return <Post key={post.id} post={post} />;
    });
    return (
      <div>
        <div className="posts">
          <div className="toolbar" onClick={this.togglePosts}>
            <FontAwesomeIcon
              icon={
                this.state.showPostsList
                  ? faAngleDoubleDown
                  : faAngleDoubleRight
              }
            />
            <h4 className="details-label">Posts</h4>
            <button
              className="button"
              onClick={this.props.handleAddNewPostButtonClick}
            >
              Add
            </button>
          </div>
          {this.state.showPostsList ? (
            <div className="posts-list">{postsList}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Posts;
