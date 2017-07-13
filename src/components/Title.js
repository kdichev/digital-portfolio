import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
const TITLE = "Sashko"
class Header extends Component {
  render() {
    return (
      <h1 style={{textAlign: "center"}}>
        {this.props.text}
      </h1>
    );
  }
}

export default Header;
