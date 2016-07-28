import React, { Component, PropTypes } from 'react'
import {List, ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import TodoItem from './TodoItem'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { todos, actions } = this.props

    return (
      <List>
      {todos.map(todo=>
        <TodoItem key={todo.id} todo={todo} {...actions} />
      )}
      </List>
    )
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
