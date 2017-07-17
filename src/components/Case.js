import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
class Case extends Component {
  render() {
    return (
      <section style={{width: 900, height: this.props.height, borderRadius: 6, margin: "0 auto"}}>
        <div style={{width: this.props.leftWidth, backgroundColor: this.props.backgroundColor, height: "100%", borderRadius: "6px 0  0 6px", float: "left"}}>
          <h1 style={{marginLeft: 30, marginTop: 55, color: "white"}}>{this.props.heading}</h1>
          <p style={{marginLeft: 30, color: "white"}}>{this.props.desctiption}</p>
          <FlatButton label="Read" labelStyle={{color: "white"}} style={{border: "1px solid white", marginLeft: 30}} />
        </div>
        <div
          style={{
            filter: "grayscale(0%)",
            width: this.props.rightWidth,
            float: "left",
            backgroundImage: `url(${this.props.image})`,
            height: "100%",
            borderRadius: "0 6px 6px 0",
            backgroundSize: "cover"
          }}
          onHover>
          </div>
      </section>
    );
  }
}

export default Case;
