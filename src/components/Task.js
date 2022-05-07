import React, { Component } from "react";
import PropTypes from "prop-types";

class Task extends Component {
  styleFunc() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "green" : "red",
    };
  }

  render() {
    const { task } = this.props;

    return (
      <div className="tasks">
        <h2>{task.title}</h2>
        <p style={this.styleFunc()}>
          {task.description} - Done: {task.done ? "true" : "false"}
        </p>
        <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
        <button onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
      </div>
    );
  }
}

Task.propTypes = {
  // requiere tipo objecto, cuando propiedad task es dada. Lanza error a la consola
  task: PropTypes.object.isRequired,
};

export default Task;
