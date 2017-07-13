import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
const TITLE = "Sashko"
class Header extends Component {
  render() {
    return (
      <AppBar
        title={TITLE}
        showMenuIconButton={false}
        style={{backgroundColor: "white"}}
        titleStyle={{color: "black"}}
      />
    );
  }
}

export default Header;
