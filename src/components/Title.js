import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
const TITLE = "Sashko"
class Header extends Component {
  render() {
    return (
      <h1 style={{textAlign: "center", marginTop:50, marginBottom: 50}}>
        {this.props.text}
      </h1>
    );
  }
}

export default Header;
