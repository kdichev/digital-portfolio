import React, { Component } from 'react';
import Button from 'material-ui/Button';
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
  height: "550px",
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
            <Button
              style={{height: 50, marginTop: 30, backgroundColor: "#0070ba", color: "white",paddingLeft: 60, paddingRight: 60}}
              raised
            >
              {data.hero.buttonLabel}
            </Button>
          </Animation>
        </Row>
    );
  }
}

export default Hero;
