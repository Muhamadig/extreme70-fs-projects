import React, { Component } from "react";
import Tasks from "./tasks/Tasks";
import NewTask from "./tasks/NewTask";
import Posts from "./posts/Posts";
class UserDetails extends Component {
  state = { tasksSection: "tasks", postsSection: "posts" };

  handleAddNewTaskButtonClick = () => {
    this.setState({ tasksSection: "addNew" });
  };
  cancelAddTask = (e) => {
    e.preventDefault();
    this.setState({ tasksSection: "tasks" });
  };

  handleAddNewTask = (e, task) => {
    e.preventDefault();
    this.setState({ tasksSection: "tasks" });
    this.props.handleAddNewTask(task);
  };
  render() {
    let user = this.props.userDeatils;
    return (
      <div>
        {user.id === 0 ? (
          <h3>Choose User to show Details</h3>
        ) : (
          <div>
            <label>
              <b>{user.name}</b> - <label htmlFor=""> Tasks and Posts</label>
            </label>
            {this.state.tasksSection === "tasks" ? (
              <Tasks
                handleAddNewTaskButtonClick={this.handleAddNewTaskButtonClick}
                tasks={user.tasks}
                handleTaskCompeletedChange={
                  this.props.handleTaskCompeletedChange
                }
              />
            ) : (
              <NewTask
                onCancel={this.cancelAddTask}
                onAdd={this.handleAddNewTask}
              />
            )}
            <Posts />
          </div>
        )}
      </div>
    );
  }
}

export default UserDetails;