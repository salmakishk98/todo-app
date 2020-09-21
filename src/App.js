import React, { Component } from "react";
import Todo from "./component/todo";
import Header from "./component/layout/header";
import Additem from "./component/Additem";
import { v4 as uuid } from "uuid";
import "./App.css";
class App extends Component {
  state = {
    todo: [
      {
        id: uuid(),
        title: "eat break fast",
        completed: false,
      },
      {
        id: uuid(),
        title: "go to training",
        completed: true,
      },
      {
        id: uuid(),
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
    const newtodo = {
      id: uuid(),
      title,
      completed: false,
    };
    this.setState({ todo: [...this.state.todo, newtodo] });
    console.log(newtodo.id);
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
