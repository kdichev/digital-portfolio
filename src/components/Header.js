import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './../App.css'
import AnimateHeight from 'react-animate-height'
import ReactDOM from 'react-dom'
import FlatButton from 'material-ui/FlatButton'
import Animated from './Animated'
const TITLE = "SK Consulting"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Animated>
          <AppBar
            title={<ReactCSSTransitionGroup transitionName="slide" transitionAppear={true} transitionAppearTimeout={400}>
              <div>{TITLE}</div>
            </ReactCSSTransitionGroup>}
            showMenuIconButton={false}
            titleStyle={this.state.titleColor}
            zDepth={1}
            ref={(header) => {this.Header = header}}
            iconElementRight={<FlatButton label="Contact us" labelStyle={this.state.titleColor} onClick={this.toggleAppBar}/>}
          />
        </Animated>
    );
  }
}

export default Header;
