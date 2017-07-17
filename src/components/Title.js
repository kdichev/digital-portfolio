import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <h1 style={{textAlign: "center", marginTop:50, marginBottom: 50}}>
        {this.props.text}
      </h1>
    );
  }
}

export default Header;
