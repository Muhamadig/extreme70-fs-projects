import React, { Component } from "react";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let task = this.props.task;
    return (
      <div className="task-card">
        <div className="title">
          <label htmlFor="taskTitle">
            <b>Title:</b> {task.title}
          </label>
        </div>
        <div className="completed">
          <label htmlFor="completed">Completed: </label>
          <button
            className={`button button-${task.completed ? "green" : "red"}`}
            id="completed"
            name="completed"
            onClick={() => {
              this.props.handleTaskCompeletedChange(task.id);
            }}
          >
            {task.completed ? "Yes" : "No"}
          </button>
        </div>
      </div>
    );
  }
}

export default Post;
