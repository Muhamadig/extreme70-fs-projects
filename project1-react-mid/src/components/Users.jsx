import React, { Component } from "react";
import SearchBox from "../commonComponents/searchBox";
import * as UsersApi from "../restService/usersService";
import "./style.css";
import User from "./User";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], usersToShow: [], searchText: "" };
  }
  async componentDidMount() {
    let users = await UsersApi.getAllUsers();
    this.setState({ users, usersToShow: users });
  }
  handleNewUser = () => {};
  handleSearchBox = (event) => {
    let searchText = event.target.value;
    let usersToShow = this.state.users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase())
    );
    this.setState({ searchText, usersToShow });
  };
  render() {
    let usersList = this.state.usersToShow.map((user) => {
      return <User key={user.id} data={user} />;
    });
    return (
      <div>
        <div className="form-inline">
          <div className="column">
            <SearchBox
              name="searchUser"
              id="searchUser"
              placeholder="Filter Users by name or email"
              label="Search"
              onChange={this.handleSearchBox}
            />
          </div>
          <div className="column">
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
