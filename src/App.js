import React, { Component } from "react";
import "./App.css";

import tasks from "./sample/task.json";

// components
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";

class App extends Component {
  state = {
    tasks: tasks,
  };

  addTask = (title, description) => {
    const newTask = {
      id: this.state.tasks.length,
      title: title,
      description: description,
      done: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  render() {
    return (
      <div id="app">
        <h1>Hello World</h1>

        <br />
        <hr />
        <br />

        <TaskForm addTask={this.addTask} />

        <br />
        <hr />
        <br />

        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
