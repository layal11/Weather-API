import React from "react";

// import clear from "../img/weather-icons/clear.svg";
import "./Search.css";

class Weather extends React.Component {
  state = {
    input: "",
  };

  render() {
    return (
      <div className = "minibateekhwrapper">
        <div className = "minihourdegree">
          <label>{this.props.hour}</label>
        </div>
        <div className = "minibateekhimg"> 
          <label><img src = { this.props.image }/></label>
        </div>
        <div className = "minihourdegree">
          <label>{this.props.temp} &#8451;</label>
        </div>
      </div>
    );
  }
}
export default Weather;
