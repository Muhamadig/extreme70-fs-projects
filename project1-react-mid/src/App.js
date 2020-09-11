import React, { Component } from "react";
import "./App.css";
import Users from "./components/Users";
import UserService from "./restService/usersService";
import RestService from "./restService/restService";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Users ToDo and Posts App</header>
        <div className="App-main-row">
          <div className="app-main-column left app-border">
            <Users />
          </div>
          <div className="app-main-column right">Users Details</div>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
