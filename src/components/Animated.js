import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './../App.css'
import AnimateHeight from 'react-animate-height'
import ReactDOM from 'react-dom'
import FlatButton from 'material-ui/FlatButton'
import {addScrollEventListener, removeScrollEventListener} from './../Lib/addScrollListener'

const TITLE = "SK Consulting"

var scroll = false
class Animated extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     transition : "transform 300ms cubic-bezier(.165,.84,.44,1)",
  //     position: "fixed",
  //     width: "100%",
  //     zIndex: 999,
  //     backgroundColor: "transparent"
  //   };
  // }
  //
  // componentDidMount() {
  //   this.toggleAppBar();
  //   addScrollEventListener(this.handleOnTopScroll);
  //   addScrollEventListener(this.handleFirstScroll);
  // }
  //
  // handleOnTopScroll = () => {
  //   let scrollTop = document.body.scrollTop
  //   if (scrollTop === 0) {
  //     this.toggleAppBar();
  //     console.log("tophit");
  //   }
  // }
  //
  // handleFirstScroll = () => {
  //   let scrollTop = document.body.scrollTop
  //   console.log(scroll);
  //   if (!scroll) {
  //     console.log("hey");
  //     this.toggleAppBar();
  //     scroll = true
  //     return
  //   }
  //   if (scrollTop === 0) {
  //     scroll = false
  //   }
  // }
  //
  //
  // slideInDown = () => {
  //   console.log("Slide in Down");
  //   this.setState({
  //     transform : "translate3d(0, 0px,0)",
  //   });
  //   if (scroll === true) {
  //     this.setState({
  //       backgroundColor: "white"
  //     });
  //   } else {
  //     this.setState({
  //       backgroundColor: "transparent"
  //     });
  //   }
  // }
  //
  // slideOutUp = () => {
  //   console.log("Slide out Up");
  //   this.setState({
  //     transform : "translate3d(0,-70px,0)",
  //   });
  // }
  //
  // toggleAppBar = () => {
  //   this.slideOutUp()
  //   setTimeout(() => this.slideInDown(), 300);
  // }
  //
  // componentWillUnmount = () => {
  //   removeScrollEventListener('scroll', this.handleScroll());
  // }
  // // handleTransitionEventEnd = () => {
  // //   console.log("a transition has ended");
  // // }

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
