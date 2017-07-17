import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './../App.css'
import AnimateHeight from 'react-animate-height'
import ReactDOM from 'react-dom'
import FlatButton from 'material-ui/FlatButton'
import {addScrollEventListener, removeScrollEventListener} from './../Lib/addScrollListener'
const TITLE = "SK Consulting"


class Animated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transition : "transform 300ms cubic-bezier(.165,.84,.44,1)",
      position: "fixed",
      width: "100%",
      zIndex: 999
    };
  }

  componentWillMount() {
    this.slideOutUp();
  }

  componentDidMount() {
    this.toggleAppBar();
    addScrollEventListener(this.handleScroll);
  }

  handleScroll = () => {
    let scrollTop = document.body.scrollTop
    if (scrollTop === 0) {
      this.toggleAppBar();
      return
    }
    if (scrollTop > 1 && scrollTop < 10) {
      this.toggleAppBar();
    }
  }


  slideInDown = () => {
    console.log("Slide in Down");
    this.setState({
      transform : "translate3d(0, 0px,0)"
    });
  }

  slideOutUp = () => {
    console.log("Slide out Up");
    this.setState({
      transform : "translate3d(0,-70px,0)"
    });
  }

  toggleAppBar = () => {
    this.slideOutUp()
    setTimeout(() => this.slideInDown(), 300);
  }

  componentWillUnmount = () => {
    removeScrollEventListener('scroll', this.handleScroll());
  }
  // handleTransitionEventEnd = () => {
  //   console.log("a transition has ended");
  // }

  render() {
    const {children} = this.props
    return (
        <div style={this.state} ref={(el) => {this.Element = el}}>
          {children}
        </div>
    );
  }
}

export default Animated;
