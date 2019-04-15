import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title : "Initialize Wordpress",
        completed : false
      },
      {
        id: 2,
        title : "Start the React Tutorial",
        completed : true
      },
      {
        id: 3,
        title : "Start the Next app",
        completed : false
      }
    ]
  }

  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id===id){
        todo.completed = ! todo.completed
      }
      return todo;
    })
   })
  }

  delTodo = (id) => {
    this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]
  })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
