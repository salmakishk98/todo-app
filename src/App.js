import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Todo from "./component/todo";
import Header from "./component/layout/header";
import Additem from "./component/Additem";
import { v4 as uuid } from "uuid";
import "./App.css";
import About from "./component/pages/About";
import axios from "axios";
class App extends Component {
  state = {
    todo: [],
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
  // get states from json placeholder
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        this.setState({ todo: res.data });
      });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Additem addtodo={this.addtodo} />
                  <Todo
                    todes={this.state.todo}
                    oncheck={this.oncheck}
                    delete={this.delete}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
