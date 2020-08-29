import React, { Component } from "react";
import FormInput from "./../commonComponents/formInput";
import * as TasksService from "../restService/tasksService";
import UserAddress from "./UserAdress";
import UserBasicInfo from "./UserBasicInfo";
import { UserProvider } from "../components/userContextApi";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], allTasksCompleted: false, showOtherData: false };
  }

  async componentDidMount() {
    let tasks = await TasksService.getUsersTodos(this.props.data.id);
    this.setState({ tasks }, () => {
      this.isAllTasksCompleted();
    });
  }
  isAllTasksCompleted = () => {
    let incompletedTasks = this.state.tasks.filter(
      (task) => task.completed === false
    );
    let allTasksCompleted = incompletedTasks.length === 0;
    this.setState({ allTasksCompleted });
  };
  handleMouseOver = (event) => {
    let showOtherData = !this.state.showOtherData;
    this.setState({ showOtherData });
  };
  render() {
    let user = this.props.data;
    return (
      <UserProvider value={user}>
        <div
          className={`user-info ${
            this.state.allTasksCompleted ? "green-border" : "red-border"
          }`}
        >
          <UserBasicInfo />
          <button
            className="button user-other-data-button"
            onMouseOver={this.handleMouseOver}
            id={`user-${user.id}-otherData`}
          >
            Other Data
          </button>
          {this.state.showOtherData ? <UserAddress /> : null}
        </div>
      </UserProvider>
    );
  }
}

export default User;
