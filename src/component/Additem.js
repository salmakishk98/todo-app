import React, { Component } from "react";

export default class Additem extends Component {
  state = {
    title: "",
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.title);
    this.props.addtodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            style={{ flex: "10", padding: "10px" }}
            placeholder="Add new task..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="SUBMIT"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}
