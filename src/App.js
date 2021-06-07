import React, { Component } from "react";
import Search from "./components/Search";

import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mohamad/Layal"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search handleInput={this.handleInputChange} />
        <div className="images">
          <img src="https://placekitten.com/100/100" alt="kitten"/>
          <img src="https://placekitten.com/100/100" alt="kitten"/>
          <img src="https://placekitten.com/100/100" alt="kitten"/>
          <img src="https://placekitten.com/100/100" alt="kitten"/>
          <img src="https://placekitten.com/100/100" alt="kitten"/>
          <img src="https://placekitten.com/100/100" alt="kitten"/>
          <img src="https://placekitten.com/100/100" alt="kitten"/>
        </div>
      </div>
    );
  }
}

export default App;
