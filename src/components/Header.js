import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
const TITLE = "Sashko"
class Header extends Component {
  constructor(props) {
  super(props);
    this.state = {
      style: {backgroundColor: "#578ca9", position: "none"},
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
        style: {backgroundColor: "#578ca9", position: "initial"},
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
      />
    );
  }
}

export default Header;
