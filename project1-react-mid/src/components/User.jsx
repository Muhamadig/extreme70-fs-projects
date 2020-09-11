import React, { Component } from "react";
import * as TasksService from "../restService/tasksService";
import UserAddress from "./UserAddress";
import UserBasicInfo from "./UserBasicInfo";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.data,
      tasks: [],
      allTasksCompleted: false,
      showOtherData: false,
    };
  }

  async componentDidMount() {
    let tasks = await TasksService.getUsersTodos(this.props.data.id);
    let allTasksCompleted = this.isAllTasksCompleted(tasks);
    this.setState({ tasks, allTasksCompleted });
  }
  isAllTasksCompleted = (tasks) => {
    let incompletedTasks = tasks.filter((task) => task.completed === false);
    return !incompletedTasks || incompletedTasks.length === 0;
  };
  handleMouseOver = (event) => {
    let showOtherData = !this.state.showOtherData;
    this.setState({ showOtherData });
  };

  handleUserChange = (attribute, value) => {
    let user = { ...this.state.user };
    user[attribute] = value;
    this.setState({ user });
  };

  getUserClasses = () => {
    return `user-info ${
      this.state.allTasksCompleted ? "green-border" : "red-border"
    }`;
  };

  deleteUserData = () => {
    let { user } = { ...this.state };
    for (const attribute in user) {
      if (attribute !== "id") {
        user[attribute] = "";
      }
    }

    let tasks = [];
    let allTasksCompleted = this.isAllTasksCompleted(tasks);
    this.setState({ user, tasks, allTasksCompleted });

    this.props.onDelete(user);
  };
  render() {
    let { user } = this.state;
    return (
      <div className={this.getUserClasses()}>
        <UserBasicInfo data={user} onChange={this.handleUserChange} />
        <button
          className="button user-other-data-button"
          onMouseOver={this.handleMouseOver}
          id={`user-${user.id}-otherData`}
        >
          Other Data
        </button>
        {this.state.showOtherData ? (
          <UserAddress data={user} onChange={this.handleUserChange} />
        ) : null}
        <div className="user-update-delete">
          <button
            className="button button-group"
            id={`user-${user.id}-update`}
            onClick={() => this.props.onUpdate(this.state.user)}
          >
            Update
          </button>
          <button
            className="button button-group"
            id={`user-${user.id}-delete`}
            onClick={this.deleteUserData}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default User;
