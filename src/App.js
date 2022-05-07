import React, { Component } from "react";
import "./App.css";

import tasks from "./sample/task.json";

// components
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";

/*
const tasks = tasks.forEach(element => {
  <div id={element.id}>
    <h2>{element.title}</h2>
    <p>{element.description}</p>
  </div>  
});
*/

class App extends Component {
  state = {
    tasks: tasks,
  };

  render() {
    return (
      <div id="app">
        <h1>Hello World</h1>

        <br />
        <hr />
        <br />

        <TaskForm />

        <br />
        <hr />
        <br />

        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
