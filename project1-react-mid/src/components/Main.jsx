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
    console.log("MAin");
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
              userName={this.state.currentUser.name}
              userId={this.state.currentUser.id}
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
