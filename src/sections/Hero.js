import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './../App.css';
import Row from './../components/Row'
import Animation from './../components/Animation'
import data from './../data'

const rowStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "500px",
  background: "linear-gradient(45deg, #141E30 30%, #243B55 90%)",
}

class Hero extends Component {
  constructor(props) {
  super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Row style={rowStyle}>
          <Animation ty={-150} tx={0} tz={0}>
            <h1 style={{color: "white"}}>
              {data.hero.title}
            </h1>
            <p style={{color: "white", fontSize: 17}}>
              {data.hero.title}
            </p>
            <p style={{color: "white", fontSize: 17}}>
              {this.props.scrollState}
            </p>
            <RaisedButton
              label={data.hero.buttonLabel}
              backgroundColor="#10a887"
              labelColor="white"
              labelStyle={{paddingLeft: 60, paddingRight: 60}}
              style={{height: 50, marginTop: 30}}
            />
          </Animation>
        </Row>
    );
  }
}

export default Hero;
