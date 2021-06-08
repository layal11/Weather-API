import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";

class Weather extends React.Component {
  state = {
    input: "",
  };

  render() {
    return (
      <div className = "minibateekhwrapper">
        <div className = "minihourdegree">
          <label>03:00</label>
        </div>
        <div className = "minibateekhimg"> 
          <label><img src = {clear}/></label>
        </div>
        <div className = "minihourdegree">
          <label>8 &#8451;</label>
        </div>
      </div>
    );
  }
}
export default Weather;
