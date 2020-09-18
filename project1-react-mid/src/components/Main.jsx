import React, { Component } from "react";
import RestService from "../restService/restService";
import UsersService from "../restService/usersService";
import UserDetails from "../components/UserDetails";
import AddNewUser from "../components/AddNewUser";
import Users from "./Users";
import TasksService from "../restService/tasksService";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUser: { id: 0, name: "", tasks: [], posts: [] },
      showDetails: true,
    };
  }

  async componentDidMount() {
    let responseMessage = await UsersService.loadAllUsers();
    if (responseMessage !== RestService.responseMessages.OK)
      alert("Users data was not loaded successfully!!!");
    else {
      let users = UsersService.getAllUsers();
      this.setState({ users });
    }
    responseMessage = await TasksService.loadAlltasks();
    if (responseMessage !== RestService.responseMessages.OK)
      alert("Tasks was not loaded successfully!!!");
    else {
      let firstUser = { ...this.state.users[0] };
      let { currentUser } = this.state;
      currentUser.id = firstUser.id;
      currentUser.name = firstUser.name;
      currentUser.tasks = TasksService.getUserTasksById(firstUser.id);
      this.setState({ currentUser });
    }
  }
  showNewUserForm = () => {
    this.setState({ showDetails: false });
  };

  showUserDetails = (userId) => {
    let currentUser = { ...this.state.currentUser };
    currentUser.id = userId;
    currentUser.name = this.getUserProperty(userId, "name");
    currentUser.tasks = TasksService.getUserTasksById(userId);
    this.setState({ showDetails: true, currentUser });
  };
  getUserProperty = (id, key) => {
    let user = this.state.users.find((user) => user.id === id);
    if (user) return user[key];
    return null;
  };
  handleTaskCompeletedChange = (taskId) => {
    let tasks = [...this.state.currentUser.tasks];
    let taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) {
      alert("task was not found");
      return;
    }

    let task = { ...tasks[taskIndex] };
    task.completed = !task.completed;
    let responseMessage = TasksService.updateTaskById(taskId, task);
    if (responseMessage !== RestService.responseMessages.OK) {
      alert(responseMessage);
      return;
    }
    let currentUser = { ...this.state.currentUser };
    tasks = TasksService.getUserTasksById(currentUser.id);
    currentUser.tasks = tasks;
    this.setState({ currentUser });
  };
  handleAddNewTask = (taskTitle) => {
    let newTask = {
      title: taskTitle,
      userId: this.state.currentUser.id,
      completed: false,
    };

    let response = TasksService.addNewTask(newTask);
    if (response === RestService.responseMessages.OK) {
      let currentUser = { ...this.state.currentUser };
      currentUser.tasks = TasksService.getUserTasksById(currentUser.id);
      this.setState({ currentUser });
    }
  };
  render() {
    return (
      <div className="App-main-row">
        <div className="app-main-column left app-border">
          <Users
            users={this.state.users}
            showNewUserForm={this.showNewUserForm}
            showUserDetails={this.showUserDetails}
          />
        </div>
        <div className="app-main-column right">
          {this.state.showDetails ? (
            <UserDetails
              userDeatils={this.state.currentUser}
              handleTaskCompeletedChange={this.handleTaskCompeletedChange}
              handleAddNewTask={this.handleAddNewTask}
            />
          ) : (
            <AddNewUser />
          )}
        </div>
      </div>
    );
  }
}

export default Main;
