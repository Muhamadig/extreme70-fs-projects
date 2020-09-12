import React, { Component } from "react";
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="posts">
          <div className="toolbar">
            <h4 className="details-label">Posts</h4>
            <button className="button">Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
