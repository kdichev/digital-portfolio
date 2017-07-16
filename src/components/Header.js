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
    this.state = {
      style: {backgroundColor: "transparent", position: "fixed", width: "100%"},
      titleColor: {color: "white"},
      zDepth: 0,
      slide: 0,
      collapsed : false,
      transparentCollapsed: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.toggleHeader(true);
  }

  handleScroll = () => {
    // if (document.body.scrollTop > 0 && document.body.scrollTop < 101) {
    //   this.toggleHeader(false);
    // } else {
    //   this.toggleHeader(true);
    // }
    var finished = false;
    if (document.body.scrollTop === 0) {
      this.setState({
        style: {backgroundColor: "transparent", position: "fixed", width: "100%"},
        titleColor: {color: "white"},
        zDepth: 0,
        slide: 64
      })
      return
    }
    if (document.body.scrollTop > 101) {
      //fixed WHITE header => slides down from 0 to 64
      this.setState({
        style: {backgroundColor: "white", position: "fixed",  width: "100%", zIndex: 2, boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px"},
        titleColor: {color: "black"},
        zDepth: 1,
        slide: 64
      });
    } else {
      // fixed WHITE header => slides up from 64 to 0
      this.setState({
        // style: {backgroundColor: "transparent", position: "fixed",   width: "100%", zIndex: 2},
        // titleColor: {color: "white"},
        label: "white",
        zDepth: 0,
        slide: 0
      })
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll());
  }

  animationState = (state) => {
  }

  toggleHeader = (bool) => {
    if (bool) {
      this.setState({
        slide: 64
      });
    } else if (!bool) {
      this.setState({
        slide: 0
      });
    }
  }

  render() {
    return (
      <AnimateHeight
        duration={ 350 }
        height={this.state.slide}
        onAnimationEnd={this.animationState("end")}
        onAnimationStart={this.animationState("start")}
        style={this.state.style}
        id="header"
      >
        <AppBar
          title={<ReactCSSTransitionGroup transitionName="slide" transitionAppear={true} transitionAppearTimeout={400}>
            <div>{TITLE}</div>
          </ReactCSSTransitionGroup>}
          style={{backgroundColor: "transparent"}}
          showMenuIconButton={false}
          titleStyle={this.state.titleColor}
          zDepth={5}
          ref={(header) => {this.Header = header}}
          iconElementRight={<FlatButton label="Contact us" labelStyle={this.state.titleColor} />}
        />
      </AnimateHeight>
    );
  }
}

export default Header;
