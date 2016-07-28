import React, { Component, PropTypes } from 'react'
import {List, ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { todo, completeTodo } = this.props

    let completedStyle;
    if (todo.completed) {
      completedStyle = {
        textDecoration: 'line-through'
      }
    }

    return (
      <ListItem
        leftCheckbox={
          <Checkbox
            checked={todo.completed}
            onCheck={() => completeTodo(todo.id)}
          />
        }
        style={completedStyle}
        primaryText={todo.text}
      />
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default TodoItem
