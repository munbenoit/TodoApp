import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

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
        completed : false
      },
      {
        id: 3,
        title : "Start the Next app",
        completed : false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
