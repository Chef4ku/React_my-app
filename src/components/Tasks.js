import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  render() {
    return (
      <div id="tasks">
        {this.props.tasks.map((e) => (
          <Task task={e} key={"task_" + e.id} />
        ))}
      </div>
    );
  }
}

export default Tasks;
