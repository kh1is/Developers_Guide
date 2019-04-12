import React, { Component } from "react";

import Topic from "./topicComponent";

class Body extends Component {
  state = {
    Data : [
      {
        topic_title: "Desktop Languages",
        items: ["Java", "C++", "C", "Python", "C#", "Kotlin"] 
      },
      {
        topic_title: "Desktop Languages",
        items: ["Java", "C++", "C", "Python", "C#", "Kotlin"]
      },
      {
        topic_title: "Desktop Languages",
        items: ["Java", "C++", "C", "Python", "C#", "Kotlin"]
      },
      {
        topic_title: "Desktop Languages",
        items: ["Java", "C++", "C", "Python", "C#", "Kotlin"]
      }


    ]
  };
  render() {
    return(
    
      <div>
        {this.state.Data.map(item => (
             
            <Topic key={item.topic_title} value={item.items} />
        ))}
      </div>
      );
  }
}

export default Body;
