import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "../components/Search.css"

export default function Search() {
  return (
    <div>
      <label for="city" className="label-city">
        <input type="text" name="city" className="city" placeholder= "Type in a city name"></input>
      </label>
      <button className="btn-search">FIND WEATHER</button>
    </div>
  );
}