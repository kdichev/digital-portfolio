import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './../App.css'
const TITLE = "SK Consulting"

class Header extends Component {
  constructor(props) {
  super(props);
    this.state = {
      style: {backgroundColor: "#17223A", position: "fixed"},
      titleColor: {color: "white"},
      zDepth: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (document.body.scrollTop > 64) {
      this.setState({
        style: {backgroundColor: "white", position: "fixed"},
        titleColor: {color: "black"},
        zDepth: 1
      })
    } else {
      this.setState({
        style: {backgroundColor: "#17223A", position: "fixed"},
        titleColor: {color: "white"},
        zDepth: 0
      })
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll());
  }
  render() {
    return (

        <AppBar
          title={<ReactCSSTransitionGroup transitionName="slide" transitionAppear={true} transitionAppearTimeout={400}><div>{TITLE}</div></ReactCSSTransitionGroup>}
          showMenuIconButton={false}
          style={this.state.style}
          titleStyle={this.state.titleColor}
          zDepth={this.state.zDepth}
          ref={(header) => {this.Header = header}}
        />
    );
  }
}

export default Header;
