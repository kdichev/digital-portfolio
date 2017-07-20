import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './../App.css'
import AnimateHeight from 'react-animate-height'
import ReactDOM from 'react-dom'
import FlatButton from 'material-ui/FlatButton'
const TITLE = "SK Consulting"

class Header extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }

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
