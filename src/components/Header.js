import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './../App.css'

const TITLE = "SK Consulting"

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  render() {
    return (
          <AppBar
            title={TITLE}
            showMenuIconButton={false}
            style={{backgroundColor: "white", position: "fixed"}}
            titleStyle={{color: "black"}}
            ref={(header) => {this.Header = header}}
            zDepth={1}
          />
    );
  }
}

export default Header;
