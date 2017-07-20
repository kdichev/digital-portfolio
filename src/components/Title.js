import React, { Component } from 'react';

const style = {
  display:"flex",
  flexDirection:"column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
}

class Header extends Component {
  render() {
    return (
      <div style={style}>
        <h1>
          {this.props.text}
        </h1>
      </div>
    );
  }
}

export default Header;
