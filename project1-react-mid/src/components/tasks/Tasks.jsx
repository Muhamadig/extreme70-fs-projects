import React, { Component } from "react";
import Task from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = { showTasksList: true, showUncompletedOnly: true };
  }
  toggleTasks = () => {
    this.setState({ showTasksList: !this.state.showTasksList });
  };
  handleUncompletedTasksCheckbox = (e) => {
    this.setState({ showUncompletedOnly: e.target.checked });
  };
  render() {
    let tasks =
      this.state.showUncompletedOnly === false
        ? this.props.tasks
        : this.props.tasks.filter((task) => task.completed === false);
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
          <div className="toolbar" onClick={this.toggleTasks}>
            <FontAwesomeIcon
              icon={
                this.state.showTasksList
                  ? faAngleDoubleDown
                  : faAngleDoubleRight
              }
            />
            <h4 className="details-label">Todos</h4>
            <button
              className="button"
              onClick={this.props.handleAddNewTaskButtonClick}
            >
              Add
            </button>
          </div>
          <input
            checked={this.state.showUncompletedOnly}
            className="checkbox uncompleted-checkbox"
            type="checkbox"
            name="uncompletedTasks"
            id="uncompletedTasks"
            onChange={this.handleUncompletedTasksCheckbox}
          />
          <label htmlFor="uncompletedTasks">Uncompleted Tasks Only</label>
          {this.state.showTasksList ? (
            <div className="tasks-list">{tasksList}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Tasks;
