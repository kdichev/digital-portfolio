import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './../App.css';
import Row from './../components/Row'
import Animation from './../components/Animation'

const rowStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  paddingTop: 64,
  height: "50vh",
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
          <Animation
            slideOutIn={-150}
          >
            <h1 style={{color: "white"}}>
              We create digital products we are proud of. Tell us your idea.
            </h1>
            <p style={{color: "white", fontSize: 17}}>
              We have loads of experience and loads of power!!!
            </p>
            <p style={{color: "white", fontSize: 17}}>
              {this.props.scrollState}
            </p>
            <RaisedButton
              label="Learn more"
              backgroundColor="#10a887"
              labelColor="white"
              labelStyle={{paddingLeft: 60, paddingRight: 60, borderRadius: "60px"}}
              style={{height: 50, marginTop: 30}}
            />
          </Animation>
        </Row>
    );
  }
}

export default Hero;
