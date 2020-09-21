import React, { Component } from "react";
import Todo from "./component/todo";
import Header from "./component/layout/header";
import Additem from "./component/Additem";
import "./App.css";
class App extends Component {
  state = {
    todo: [
      {
        id: 1,
        title: "eat break fast",
        completed: false,
      },
      {
        id: 2,
        title: "go to training",
        completed: true,
      },
      {
        id: 3,
        title: "meeting with friends",
        completed: false,
      },
    ],
  };
  oncheck = (id) => {
    this.setState({
      todo: this.state.todo.map((todos) => {
        if (todos.id === id) {
          todos.completed = !todos.completed;
        }
        return todos;
      }),
    });
  };
  delete = (id) => {
    this.setState({
      todo: [...this.state.todo.filter((todo1) => todo1.id !== id)],
    });
  };
  addtodo = (title) => {
    console.log(title);
    const newtodo = {
      id: 4,
      title,
      completed: false,
    };
    this.setState({ todo: [...this.state.todo], newtodo });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Additem addtodo={this.addtodo} />
          <Todo
            todes={this.state.todo}
            oncheck={this.oncheck}
            delete={this.delete}
          />
        </div>
      </div>
    );
  }
}
export default App;
