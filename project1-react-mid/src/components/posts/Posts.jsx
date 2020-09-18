import {
  faAngleDoubleDown,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { showPostsList: true };
  }
  togglePosts = () => {
    this.setState({ showPostsList: !this.state.showPostsList });
  };
  render() {
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
            <button className="button">Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
