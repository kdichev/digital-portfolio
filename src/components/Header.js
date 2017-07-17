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
      transition : "all .3s cubic-bezier(.165,.84,.44,1)",
      position: "fixed",
      width: "100%"
    };
  }

  componentWillMount() {
    this.hideAppBar();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.toggleAppBar();
    this.Element.addEventListener("transitionend", this.handleTransitionEventEnd);
  }

  handleScroll = () => {
    if (document.body.scrollTop === 0) {
      this.toggleAppBar();
    }
  }

  handleTransitionEventEnd = () => {
    console.log("a transition has ended");
  }

  showAppBar = () => {
    this.setState({
      transform : "translate3d(0, 0px,0)"
    })
  }

  hideAppBar = () => {
    this.setState({
      transform : "translate3d(0,-70px,0)"
    })
  }

  toggleAppBar = () => {
    this.hideAppBar()
    setTimeout(() => {this.showAppBar()}, 300);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll());
  }

  render() {
    return (
        <div style={this.state} ref={(el) => {this.Element = el}}>
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
        </div>
    );
  }
}

export default Header;
