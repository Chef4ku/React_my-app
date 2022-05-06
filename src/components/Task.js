import React, { Component } from "react";

class Task extends Component {
  render() {
    const { task } = this.props;

    return (
      <div className="tasks">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <input type="checkbox" />
        <button>x</button>
      </div>
    );
  }
}

export default Task;
