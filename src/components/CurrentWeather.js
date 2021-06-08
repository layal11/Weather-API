import React, { Component } from "react";
// import { render } from "react-dom";
import sunny from "../img/weather-icons/storm.svg";

export default class CurrentWeather extends Component {
  render() {
    return (
      <div className="bateekhwrapper">
        <div>
          <img className="bateekhimg" src={sunny}></img>
        </div>
        <div className="bateekhovercast">
          <label> Overcast Clouds</label>
        </div>
        <div className="bateekhtemp">
          <label>
            <b>Temperature</b> 10 &#8451; to 11 &#8451;
          </label>
        </div>
        <div className="bateekhhum">
          <label>
            <b>Humidity &nbsp;</b> 78% <b>Pressure &nbsp; </b> 1008.48
          </label>
        </div>
      </div>
    );
  }
}
