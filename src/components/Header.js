import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './../App.css'
import Animation from './../components/Animation'
import data from './../data'

const TITLE = "SK Consulting"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Animation slideOutIn={-64}>
        <AppBar
          title={data.header.title}
          showMenuIconButton={false}
          style={{backgroundColor: "transparent", position: "fixed"}}
          titleStyle={{color: "white"}}
          ref={(header) => {this.Header = header}}
          zDepth={0}
        />
      </Animation>
    );
  }
}

export default Header;
