import React, { Component } from "react";
import SearchBox from "../commonComponents/searchBox";
import "./style.css";
import User from "./User";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
  }

  handleNewUser = () => {};
  handleSearchBox = (event) => {
    let searchText = event.target.value;
    this.setState({ searchText });
  };
  filterUsers = (searchText, usersArr) => {
    let users = usersArr.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase())
    );
    return users;
  };

  render() {
    let { users } = this.props;
    let usersToDisplay =
      this.state.searchText === ""
        ? users
        : this.filterUsers(this.state.searchText, users);
    let usersList = usersToDisplay.map((user) => {
      return (
        <User
          key={user.id}
          data={user}
          onUpdate={this.props.handleUpdateUser}
          onDeleteData={this.props.handleDeleteUserData}
          showUserDetails={this.props.showUserDetails}
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
            <button className="button" onClick={this.props.showNewUserForm}>
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
