import React, { Component } from "react";
import "../App.css";

class CApp extends Component {
  state = {
    value: ""
  };
  render() {
    const { value } = this.state;
    return (
      <div className="center">
        <div>Class Input</div>
        <input
          placeholder="write text"
          value={value}
          onChange={this.onChange}
        />
      </div>
    );
  }
  onChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ value });
  };
}

export default CApp;
