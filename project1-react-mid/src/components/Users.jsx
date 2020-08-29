import React, { Component } from "react";
import SearchBox from "../commonComponents/searchBox";
import "./style.css";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], searchText: "" };
  }
  render() {
    return (
      <div>
        <div className="form-inline">
          <div className="column">
            <SearchBox
              name="searchUser"
              id="searchUser"
              placeholder="Filter Users by name or email"
              label="Search"
            />
          </div>
          <div className="column">
            <button className="button">Add New User</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
