import React, { Component } from "react";
import "../App.css";

class CApp extends Component {
  state = {
    contents: [
      { tab: "Section1", content: "this is Section1 content" },
      { tab: "Section2", content: "this is Section2 content" }
    ],
    currentIndex: 0
  };
  render() {
    const { contents, currentIndex } = this.state;
    console.log(contents, currentIndex);
    return (
      <div className="center">
        <div>Class Tab</div>
        <div>
          {contents.map((content, index) => (
            <button key={index} onClick={() => this.setCurrentContent(index)}>
              {content.tab}
            </button>
          ))}
        </div>
        <div>{contents[currentIndex].content}</div>
      </div>
    );
  }
  setCurrentContent = index => {
    this.setState({
      currentIndex: index
    });
  };
}

export default CApp;
