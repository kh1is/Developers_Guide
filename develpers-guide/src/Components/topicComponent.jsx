import React, { Component } from "react";

import "./css/topicComponent.css";

class Topic extends Component {
  state = {
    topic_title: "Desktop Languages",
    items: ["Java", "C++", "C", "Python", "C#", "Kotlin"]
  };

  render() {
    return (
      <div className="topic">
        <div className="topic_header">
          <h3 className="topic_header">
            <span className="badge badge-primary m-4">{this.state.topic_title}</span>
          </h3>
        </div>
        <div className="topic_item">
          {this.state.items.map(item => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Topic;
