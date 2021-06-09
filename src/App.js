import React, { Component } from "react";
import Search from "./components/Search";
import fakeWeatherData from "./fakeWeatherData.json";
import storm from "../src/img/weather-icons/storm.svg"
import clear from "../src/img/weather-icons/clear.svg"
import cloudy from "../src/img/weather-icons/cloudy.svg"
import drizzle from "../src/img/weather-icons/drizzle.svg"
import rain from "../src/img/weather-icons/rain.svg"
import snow from "../src/img/weather-icons/snow.svg"
import fog from "../src/img/weather-icons/fog.svg"
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg"
import partlycloudy from "../src/img/weather-icons/partlycloudy.svg"
import Nav from "./Nav";
import TodayWeather from "./TodayWeather";
import HourlyWeather from "./HourlyWeather";
import { isEmpty } from "lodash";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "london",
      list: [],
      today: {}
    };
  }

  async componentDidMount() {
    try {
      const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&cnt=8&units=metric&appid=d36b05df3433db3176f6887851867af3`;
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        list: data.list,
        today: {
          description: data.list[1].weather[0].description,
          temp: data.list[1].main.temp,
          tempMax: data.list[1].main.temp_max,
          tempMin: data.list[1].main.temp_min,
          humidity: data.list[1].main.humidity,
          pressure: data.list[1].main.pressure,
          nbId: data.list[1].weather[0].id
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  handle = () => {
    const cityName = this.state.cityName;
    let cond = true;
    if (isEmpty(cityName)) {
      return (cond = false);
    }
  };

  onSubmit = async e => {
    try {
      this.setState({
        cityName: e
      });
      const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&cnt=8&units=metric&appid=d36b05df3433db3176f6887851867af3`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(response);
      if (response.status === 404) {
        console.log("Error 404, Country doesn't exit!, please try again later");
        alert("Country not found");
      }

      this.setState({
        today: {
          description: data.list[1].weather[0].description,
          temp: data.list[1].main.temp,
          tempMax: data.list[1].main.temp_max,
          tempMin: data.list[1].main.temp_min,
          humidity: data.list[1].main.humidity,
          pressure: data.list[1].main.pressure,
          nbId: data.list[1].weather[0].id
        },
        list: data.list
      });
    } catch (err) {
      alert("Connection problems");
    }
  };

  icon = nb => {
    if (nb < 300) {
      return storm;
    } else if (nb >= 300 && nb < 500) {
      return drizzle;
    } else if (nb >= 500 && nb < 600) {
      return rain;
    } else if (nb >= 600 && nb < 700) {
      return snow;
    } else if (nb >= 700 && nb < 800) {
      return fog;
    } else if (nb === 800) {
      return clear;
    } else if (nb === 801) {
      return partlycloudy;
    } else if (nb >= 801 && nb < 805) {
      return mostlycloudy;
    }
  };

  backgroundPicker = nb => {
    if (nb >= 300 && nb < 800) {
      return "#AEB7C1";
    } else if(nb ===800){
      return "#2490F3";
    }else{
      return "#9CCEF4";
    }
  };
  navColor = nb => {
    if (nb >= 300 && nb < 800) {
      return "#6D7AAA";
    }else if(nb ===800){
        return "#206CC0";
    }else{
      return "#759EDA";
    }
  };

  buttonBackground = nb => {
    if (nb >= 300 && nb < 800) {
      return "#575BAA";
    }else if(nb===800){
      return "#1948AD";
    } else {
      return "#5879C7";
    }
  };

  render() {
    return (
      <div className="app">
        <Nav
          onSubmit={this.onSubmit}
          cityName={this.state.cityName}
          handle={this.handle}
          navColor={this.navColor}
          nbID={this.state.today.nbId}
          buttonBackground={this.buttonBackground}
        ></Nav>
        <TodayWeather
          description={this.state.today.description}
          tempMin={this.state.today.tempMin}
          tempMax={this.state.today.tempMax}
          pressure={this.state.today.pressure}
          humidity={this.state.today.humidity}
          icon={this.icon}
          nbID={this.state.today.nbId}
          backgroundPicker={this.backgroundPicker}
        ></TodayWeather>
        <HourlyWeather
          list={this.state.list}
          icon={this.icon}
          nbID={this.state.today.nbId}
          backgroundPicker={this.backgroundPicker}
        ></HourlyWeather>
      </div>
    );
  }
}

export default App;

