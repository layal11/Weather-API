import React, { Component } from "react";
// import { render } from "react-dom";

export default class NavBar extends Component {
  render() {
    return <div className = "searchbar">
        <div> <input type = "text" className = "txt"></input></div>
        <div> <button className = "findweather">FIND WEATHER</button> </div>
    </div>;
  }
}
export class OvercastCloud extends Component {
  render() {
    return (
      <div className = "bateekh" style={{ color: this.props.color }}>
         {this.props.name}
      </div>
    );
  }
}
