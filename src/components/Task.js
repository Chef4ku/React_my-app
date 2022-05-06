import React, { Component } from "react";
import PropTypes from "prop-types";

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

Task.propTypes = {
  // requiere tipo objecto, cuando propiedad task es dada. Lanza error a la consola
  task: PropTypes.object.isRequired
}

export default Task;
