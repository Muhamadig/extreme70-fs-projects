import React, { Component } from "react";
import RestService from "../restService/restService";
import UsersService from "../restService/usersService";
import UserDetails from "../components/UserDetails";
import AddNewUser from "../components/AddNewUser";
import Users from "./Users";
import TasksService from "../restService/tasksService";
import PostsService from "../restService/postService";
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
    if (responseMessage !== RestService.responseMessages.OK) {
      alert("Tasks was not loaded successfully!!!");
      return;
    }
    responseMessage = await PostsService.loadAllposts();
    if (responseMessage !== RestService.responseMessages.OK) {
      alert("Posts was not loaded successfully!!!");
      return;
    }
    let firstUser = { ...this.state.users[0] };
    let { currentUser } = this.state;
    currentUser.id = firstUser.id;
    currentUser.name = firstUser.name;
    currentUser.tasks = TasksService.getUserTasksById(firstUser.id);
    currentUser.posts = PostsService.getUserPostsById(firstUser.id);
    this.setState({ currentUser });
  }
  showNewUserForm = () => {
    this.setState({ showDetails: false });
  };

  showUserDetails = (userId) => {
    let currentUser = { ...this.state.currentUser };
    currentUser.id = userId;
    currentUser.name = this.getUserProperty(userId, "name");
    currentUser.tasks = TasksService.getUserTasksById(userId);
    currentUser.posts = PostsService.getUserPostsById(userId);
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
  handleAddNewPost = (post) => {
    let newPost = {
      title: post.title,
      userId: this.state.currentUser.id,
      body: post.body,
    };

    let response = PostsService.addNewPost(newPost);
    if (response === RestService.responseMessages.OK) {
      let currentUser = { ...this.state.currentUser };
      currentUser.posts = PostsService.getUserPostsById(currentUser.id);
      this.setState({ currentUser });
    }
  };

  handleUpdateUser = (updatedUser) => {
    let responseMessage = UsersService.updateUserById(
      updatedUser.id,
      updatedUser
    );

    if (responseMessage === RestService.responseMessages.OK) {
      let users = UsersService.getAllUsers();
      if (updatedUser.id === this.state.currentUser.id) {
        let user = UsersService.getUserById(updatedUser.id);
        let currentUser = { ...this.state.currentUser };
        currentUser.name = user.name;
        this.setState({ users, currentUser });
      } else this.setState({ users });
    }
  };
  handleDeleteUserData = (userId) => {
    let user = UsersService.getUserById(userId);
    for (const key in user) {
      if (user.hasOwnProperty(key) && key !== "id") {
        switch (typeof user[key]) {
          case "number":
            user[key] = 0;
            break;
          case "string":
            user[key] = "";
            break;
          case "boolean":
            user[key] = false;
            break;
          case "object":
            if (Array.isArray(user[key])) user[key] = [];
            user[key] = {};
            break;
          default:
            user[key] = null;
        }
      }
    }
    this.handleUpdateUser(user);

    // handle delete tasks and posts
    TasksService.deleteAllUserTaksById(userId);
    PostsService.deleteAllUserPostsById(userId);

    if (this.state.currentUser.id === userId) {
      let currentUser = { ...this.state.currentUser };
      currentUser.tasks = TasksService.getUserTasksById(userId);
      currentUser.posts = PostsService.getUserPostsById(userId);
      this.setState({ currentUser });
    }
  };
  render() {
    return (
      <div className="App-main-row">
        <div className="app-main-column left app-border">
          <Users
            users={this.state.users}
            handleUpdateUser={this.handleUpdateUser}
            handleDeleteUserData={this.handleDeleteUserData}
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
              handleAddNewPost={this.handleAddNewPost}
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
