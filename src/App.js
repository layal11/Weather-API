import React, { Component } from "react";
import Weather from "./components/Search";

import NavBar, { OvercastCloud } from "./components/WeatherItem";
import fakeWeatherData from "./data/Fakeweather.json";
import "./App.css";
import CurrentWeather from './components/CurrentWeather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: <CurrentWeather /> 
    };
    // console.log(fakeWeatherData.cod)
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className = "app">
        <NavBar />
        <OvercastCloud name={this.state.name} />
        <Weather handleInput = {this.handleInputChange} />
      </div>
    );
  }
}

export default App;
