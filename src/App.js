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

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTasks });
  };

  checkDone = (id) => {
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: newTasks });
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

        <Tasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          checkDone={this.checkDone}
        />
      </div>
    );
  }
}

export default App;
