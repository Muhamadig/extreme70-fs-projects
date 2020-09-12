import React, { Component } from "react";
import tasksService from "../../restService/tasksService";
class Task extends Component {
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
          >
            {task.completed ? "Yes" : "No"}
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
