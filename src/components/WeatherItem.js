import React, { Component } from "react";
// import { render } from "react-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
  }
  variable = {};
  handleclick = (event) => {
    this.props.handleInput(this.state.keyword);
  };
  render() {
    return (
      <div className="searchbar">
        <div>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ keyword: e.target.value });
            }}
            value={this.state.keyword}
            className="txt"
          ></input>
        </div>
        <div>
          <button onClick={this.handleclick} className="findweather">
            FIND WEATHER
          </button>
        </div>
      </div>
    );
  }
}
export class OvercastCloud extends Component {
  render() {
    return (
      <div className="bateekh" style={{ color: this.props.color }}>
        {this.props.name}
      </div>
    );
  }
}
