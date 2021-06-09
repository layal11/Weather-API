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

        {this.props.overcastt ? (
        <div className="bateekhovercast">
          <label> {this.props.overcastt} </label>
        </div>):null}

        {this.props.mintempp ? (
        <div className="bateekhtemp">
          <label>
            <b>Temperature</b> {this.props.mintempp} &#8451; to {this.props.maxtempp} &#8451;
          </label>
        </div> ):null}

        {this.props.humidityy ? (
        <div className="bateekhhum">
          <label>
            <b>Humidity &nbsp;</b> {this.props.humidityy}% <b>Pressure &nbsp; </b> {this.props.pressuree}
          </label>
        </div>):null}
    
      </div>
    );
  }
}
