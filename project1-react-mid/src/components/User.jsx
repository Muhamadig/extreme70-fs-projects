import React, { Component } from "react";
import TasksService from "../restService/tasksService.js";
import UserAddress from "./UserAddress";
import UserBasicInfo from "./UserBasicInfo";

/*
Props:
data={user}
onUpdate={this.handleUpdateUser}
onDelete={this.handleUpdateUser}
showUserDetails={this.props.showUserDetails}
*/
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.data,
      showOtherData: false,
    };
  }

  isAllTasksCompleted = () => {
    return TasksService.isAllUSerTAsksCompleted(this.state.user.id);
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

  getTasksStatus = () => {
    return `${this.isAllTasksCompleted() ? "green" : "red"}`;
  };

  deleteUserData = () => {
    // let { user } = { ...this.state };
    // for (const attribute in user) {
    //   if (attribute !== "id") {
    //     user[attribute] = "";
    //   }
    // }
    // let tasks = [];
    // let allTasksCompleted = this.isAllTasksCompleted(tasks);
    // this.setState({ user, tasks, allTasksCompleted });
    // this.props.onDelete(user);
  };
  render() {
    let { user } = this.state;
    return (
      <div className={`card ${this.getTasksStatus()}-border`}>
        <div
          className={`card-title ${this.getTasksStatus()}-background ${this.getTasksStatus()}-border`}
          onClick={() => this.props.showUserDetails(this.state.user.id)}
        >
          {user.name + " >>"}
        </div>
        <div className="card-content">
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
              onClick={() => this.props.onDeleteData(user.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
