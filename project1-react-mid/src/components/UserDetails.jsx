import React, { Component } from "react";
import TasksService from "../restService/tasksService";
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
            <ul>
              {user.tasks.map((task) => {
                return <li>{task.title}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default UserDetails;
