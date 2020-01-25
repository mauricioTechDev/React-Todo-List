import React, { Component } from 'react';
import PropTypes from 'prop-types';


export  class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#add8e6',
      padding: '10px',
      borderBottom: '2px #000000 dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }

  markComplete = () => {
    console.log(this.props)

  }



  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          { title }
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.array.isRequired
}



export default TodoItem
