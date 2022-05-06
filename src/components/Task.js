import React, { Component } from "react";

class Task extends Component {
  styleFunc() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "green" : "red",
    }
  }

  render() {
    const { task } = this.props;

    return (
      <div className="tasks">
        <h2>{task.title}</h2>
        <p style={this.styleFunc()}>{task.description} - Done: {task.done ? "true" : "false"}</p>
        <input type="checkbox" />
        <button>x</button>
      </div>
    );
  }
}

export default Task;
