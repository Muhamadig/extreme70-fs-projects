import React, { Component } from "react";
import SearchBox from "../commonComponents/searchBox";
import UserService from "../restService/usersService";
import "./style.css";
import User from "./User";
import RestService from "../restService/restService";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], searchText: "" };
  }
  async componentDidMount() {
    let responseMessage = await UserService.loadAllUsers();
    if (responseMessage !== RestService.responseMessages.OK)
      alert("Users data was not loaded successfully!!!");
    else {
      let users = UserService.getAllUsers();
      this.setState({ users });
    }
  }
  handleNewUser = () => {};
  handleSearchBox = (event) => {
    let searchText = event.target.value;
    this.setState({ searchText });
  };
  filterUsers = (searchText) => {
    let users = this.state.users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase())
    );
    return users;
  };
  handleUpdateUser = (updatedUser) => {
    //   let userIndex = this.state.usersInDb.findIndex(
    //     (user) => user.id === updatedUser.id
    //   );
    //   let { usersInDb: users } = this.state;
    //   users[userIndex] = updatedUser;
    //   let usersToShow = this.filterUsers(this.state.searchText);
    //   this.setState({ users, usersToShow });
  };

  render() {
    let usersToDisplay =
      this.state.searchText === ""
        ? this.state.users
        : this.filterUsers(this.state.searchText);
    let usersList = usersToDisplay.map((user) => {
      return (
        <User
          key={user.id}
          data={user}
          onUpdate={this.handleUpdateUser}
          onDelete={this.handleUpdateUser}
        />
      );
    });
    return (
      <div>
        <div className="form-inline">
          <div className="searchBox">
            <SearchBox
              name="searchUser"
              id="searchUser"
              placeholder="Filter Users by name or email"
              label="Search"
              onChange={this.handleSearchBox}
            />
          </div>
          <div className="new-user-button">
            <button className="button" onClick={this.handleNewUser}>
              Add New User
            </button>
          </div>
        </div>
        <div>{usersList}</div>
      </div>
    );
  }
}

export default Users;
