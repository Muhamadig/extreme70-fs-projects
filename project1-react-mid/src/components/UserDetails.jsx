import React, { Component } from "react";
import TasksService from "../restService/tasksService";
import Tasks from "./tasks/Tasks";
import Posts from "./posts/Posts";
class UserDetails extends Component {
  state = { tasks: [] };

  render() {
    let user = this.props.userDeatils;
    return (
      <div>
        {user.id === 0 ? (
          <h3>Choose User to show Details</h3>
        ) : (
          <div>
            <h3>{user.name} Tasks and Posts</h3>
            <Tasks tasks={user.tasks} />
            <Posts />
          </div>
        )}
      </div>
    );
  }
}

export default UserDetails;
