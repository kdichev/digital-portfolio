import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './../App.css'
import AnimateHeight from 'react-animate-height'
import ReactDOM from 'react-dom'
import FlatButton from 'material-ui/FlatButton'
import Animated from './Animated'
import {addScrollEventListener, removeScrollEventListener} from './../Lib/addScrollListener'
let scroll = false
const TITLE = "SK Consulting"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        transition : "transform 300ms cubic-bezier(.165,.84,.44,1)",
        position: "fixed",
        width: "100%",
        zIndex: 999,
        titleColor: {color: "white"},
        backgroundColor: "transparent",
        zDepth: 0
    };
  }

  componentDidMount() {
    this.toggleAppBar();
    addScrollEventListener(this.handleOnTopScroll);
    addScrollEventListener(this.handleFirstScroll);
  }

  handleOnTopScroll = () => {
    let scrollTop = document.body.scrollTop
    if (scrollTop === 0) {
      this.toggleAppBar();
    }
  }

  handleFirstScroll = () => {
    let scrollTop = document.body.scrollTop
    //console.log(scroll);
    if (!scroll) {
      this.toggleAppBar();
      scroll = true
      return
    }
    if (scrollTop === 0) {
      scroll = false
    }
  }


  slideInDown = () => {
    //console.log("Slide in Down");
    this.setState({
        position: "fixed",
        width: "100%",
        transform : "translate3d(0, 0px,0)",
        zIndex: 999
    });
    if (scroll === true) {
      this.setState({
        backgroundColor: "white",
        titleColor: {color: "black"},
        zDepth: 1
      });
    } else {
      this.setState({
        backgroundColor: "transparent",
        titleColor: "white",
        zDepth: 0
      });
    }
  }

  slideOutUp = () => {
    //console.log("Slide out Up");
    this.setState({
        position: "fixed",
        width: "100%",
        transform : "translate3d(0,-70px,0)",
        zIndex: 999,
    });
    if (scroll === false) {
      this.setState({
          backgroundColor: "transparent",
          titleColor: {color: "white"},
          zDepth: 0
      });
    } else {
      this.setState({
          backgroundColor: "white",
          titleColor: {color: "black"},
          zDepth: 1
      });
    }
  }

  toggleAppBar = () => {
    this.slideOutUp()
    setTimeout(() => this.slideInDown(), 500);
  }

  componentWillUnmount = () => {
    removeScrollEventListener('scroll', this.handleScroll());
    removeScrollEventListener('scroll', this.handleFirstScroll());
  }
  // handleTransitionEventEnd = () => {
  //   console.log("a transition has ended");
  // }

  render() {
    //console.log(this.state.titleColor);
    return (
        <Animated>
          <AppBar
            title={<ReactCSSTransitionGroup transitionName="slide" transitionAppear={true} transitionAppearTimeout={400}>
              <div>{TITLE}</div>
            </ReactCSSTransitionGroup>}
            showMenuIconButton={false}
            titleStyle={this.state.titleColor}
            style={this.state}
            backgroundColor={"red"}
            zDepth={this.state.zDepth}
            ref={(header) => {this.Header = header}}
            iconElementRight={<FlatButton label="Contact us" labelStyle={this.state.titleColor} onClick={this.toggleAppBar}/>}
          />
        </Animated>
    );
  }
}

export default Header;
