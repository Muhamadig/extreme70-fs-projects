import React, { Component } from "react";
import "./App.css";
import Users from "./components/Users";
import UserService from "./restService/usersService";
import RestService from "./restService/restService";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Users ToDo and Posts App</header>
        <Main />
        <footer></footer>
      </div>
    );
  }
}

export default App;
