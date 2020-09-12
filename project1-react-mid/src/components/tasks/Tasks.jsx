import React, { Component } from "react";
import Task from "./Task";
class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let tasks = this.props.tasks;
    let tasksList = tasks.map((task) => {
      return (
        <Task
          key={task.id}
          task={task}
          handleTaskCompeletedChange={this.props.handleTaskCompeletedChange}
        />
      );
    });
    return (
      <div>
        <div className="tasks">
          <div className="toolbar">
            <h4 className="details-label">Todos</h4>
            <button className="button">Add</button>
          </div>
          <div className="tasks-list">
            <ul>{tasksList}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
