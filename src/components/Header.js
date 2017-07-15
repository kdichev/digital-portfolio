import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
const TITLE = "SK Consulting"

class Header extends Component {
  constructor(props) {
  super(props);
    this.state = {
      style: {backgroundColor: "#17223A", position: "none"},
      titleColor: {color: "white"},
      zDepth: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.Header);
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
        style: {backgroundColor: "#17223A", position: "initial"},
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
        title={TITLE}
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
