import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.firstname}</strong>
      </li>
    );
  }
}

export default TodoItem;
