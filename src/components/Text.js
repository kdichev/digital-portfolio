import React, { Component } from 'react';

const style = {
  display:"flex",
  flexDirection:"column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
}

class Text extends Component {
  render() {
    return (
      <div style={style}>
        <p>
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default Text;
