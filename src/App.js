import React, { Component } from "react";
import "./App.css";

import tasks from "./sample/task.json";
import Tasks from "./components/Tasks";

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
      <div>
        <h1>Hello World</h1>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
