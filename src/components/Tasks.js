import React, { Component } from "react";
import Task from "./Task";
import PropTypes from "prop-types";

//css
import "./Tasks.css";

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

Tasks.protTypes = {
  tasks: PropTypes.array.isRequired
}

export default Tasks;
