import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <div>
          <h3>{this.props.todo.title}</h3>
        <p>Hello</p>
      </div>
    )
  }
}

export default TodoItem
