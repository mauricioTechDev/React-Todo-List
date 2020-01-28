import React, {Component} from 'react';
import Header from './components/layouts/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo';
import uuid from 'uuid';



import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Dinner with Laura",
        completed: false
      },{
        id: uuid.v4(),
        title: "Study React",
        completed: false
      },
    ]
  }
// Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }
  // Delete toDo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  // Add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  // here we are not using props because this is where the code will run
  render(){
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>

      </div>
    );
  }
}

export default App;
