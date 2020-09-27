import React, { Component } from "react";
import Todoelement from "./todoelement";
import PropTypes from "prop-types";
class Todo extends Component {
  render() {
    return (
      <div>
        {this.props.todes.map((todes) => (
          <Todoelement
            todo={todes}
            oncheck={this.props.oncheck}
            delete={this.props.delete}
          />
        ))}
      </div>
    );
  }
  // Validate the prop passed to a child and warn the developer when a wrong props is passed, which may break your app.
  // As a team, when a member of the team creates a component, you won't know what to do with that unless you see the PropTypes
  // PropTypes is not compulsory.
  // we will define prop type
}
Todo.propTypes = {
  todes: PropTypes.array.isRequired,
};
export default Todo;
