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
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnStyle ={
  background: "#ff0000",
  color: "white",
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}


export default TodoItem
