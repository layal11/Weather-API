import React, { Component } from "react";
import Weather from "./components/Search";

import NavBar, { OvercastCloud } from "./components/WeatherItem";
// import fakeWeatherData from "./data/Fakeweather.json";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";

import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";

class App extends Component {
  YOUR_API_KEY = "55bca563b8fde1714a353b51c03f4dc8";

  constructor(props) {
    super(props);
    this.state = {
      name: [],
      mintemp: undefined,
      maxtemp: undefined,
      humidity: undefined,
      pressure: "",
      overcast: "",
      images: [],
      imageCurrent: "",
    };
  }

  handleInputChange = (value) => {
    const CITY_NAME = value;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&cnt=8&units=metric&appid=${this.YOUR_API_KEY}`;

    try {
      fetch(url).then((response) => {
        response.json().then((data) => {
          // console.log(data);
          if (data.list !== undefined && data.list !== null) {

             this.setState({
              name: data.list,
              mintemp: data.list[0].main.temp_min,
              maxtemp: data.list[0].main.temp_max,
              humidity: data.list[0].main.humidity,
              pressure: data.list[0].main.pressure,
              overcast: data.list[0].weather[0].description,
            });

            this.setState((oldprops , oldstate) => {
              console.log(oldprops , oldstate);
            })
           
          } else {
            alert("City doesn't exist or misspelled");
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  getImage = (id) => {
    switch (true) {
      case id < 300:
        return storm;
        break;

      case id < 499:
        return drizzle;
        break;

      case id < 599:
        return rain;
        break;

      case id < 699:
        return snow;
        break;

      case id < 799:
        return fog;
        break;

      case (id = 800):
        return clear;
        break;

      case (id = 801):
        return partlycloudy;
        break;

      case id < 805:
        return mostlycloudy;
        break;

      default:
        return unknown;
        break;
    }
  };

  render() {
    this.state.name.map((elt, index) => {});

    // console.log( `http://api.openweathermap.org/data/2.5/forecast?q=london&cnt=8&units=metric&appid=55bca563b8fde1714a353b51c03f4dc8`);

    return (
      <div className="app">
        <NavBar handleInput={this.handleInputChange} />{" "}
        {/* passing function handleInputChange (from parent component) as a property / parameter to (child component) */}
        <OvercastCloud
          name={
            <CurrentWeather
              overcastt={this.state.overcast}
              mintempp={this.state.mintemp}
              maxtempp={this.state.maxtemp}
              humidityy={this.state.humidity}
              pressuree={this.state.pressure}
            />
          }
        />
        <div className="sayHello">
          {this.state.name.map((elt) => {
            const time = parseInt(elt.dt_txt.slice(10, 14));
            // console.log("time", time);

            // get the id of the image
            if (time !== 0) {
              const weatherId = elt.weather.map((wea) => {
                return wea.id;
              });
              // console.log("weather", weatherId);
              const img = this.getImage(weatherId);
              // console.log("image", img);
              return (
                <Weather
                  temp={elt.main.temp}
                  hour={
                    new Date(elt.dt_txt).getHours() +
                    ":" +
                    new Date(elt.dt_txt).getMinutes()
                  }
                  image={img}
                />
              );
            }
          })}
          {/* hour is an attribute thet you can access through props (this.props.hour) inside the component  */}
        </div>
      </div>
    );
  }
}

export default App;
