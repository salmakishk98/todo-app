import React, { Component } from "react";
import PropTypes from "prop-types";
export class Todoelement extends Component {
  // make style of every element and checked if task is completed and make a text decoration line through.
  get_style = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  render() {
    return (
      <div style={this.get_style()}>
        <p>
          <input
            type="checkbox"
            defaultChecked={this.props.todo.completed}
            onChange={this.props.oncheck.bind(this, this.props.todo.id)}
          />{" "}
          {this.props.todo.title}{" "}
          <button
            style={btn_style}
            onClick={this.props.delete.bind(this, this.props.todo.id)}
          >
            {" "}
            X{" "}
          </button>
        </p>
      </div>
    );
  }
}

Todoelement.propTypes = {
  todo: PropTypes.object.isRequired,
};
const btn_style = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
export default Todoelement;
