import React, { Component } from "react";
import "../App.css";

class CApp extends Component {
  state = {
    counter: 0
  };
  render() {
    const { counter } = this.state;
    return (
      <div className="center">
        <div>Class {counter}</div>
        <button onClick={this.incrementItem}>increment</button>
        <button onClick={this.decrementItem}>decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };
  decrementItem = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      };
    });
  };
}

export default CApp;
