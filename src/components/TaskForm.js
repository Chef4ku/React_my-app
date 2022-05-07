import React from "react";

export default class TaskForm extends React.Component {
  state = {
    title: "",
    description: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const task = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Write a task title"
          name="title"
          onChange={this.onChange}
          value={task.title}
        />
        <br />
        <textarea
          placeholder="Write a description"
          name="description"
          onChange={this.onChange}
          value={task.description}
        ></textarea>
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }
}
