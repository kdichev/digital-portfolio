import React, { Component } from 'react';
import VideoCover from './../components/VideoCover'
import RaisedButton from 'material-ui/RaisedButton'
class Hero extends Component {
  render() {
    return (
          <div className="row" style={{height: 700, backgroundColor: "#578CA9"}}>
            {/* <VideoCover /> */}
            <div style={{textAlign: "center", padding: 300}}>
            <h1 style={{color: "white"}}>We create digital products we are proud of. Tell us your idea.</h1>
            <p style={{color: "white", fontSize: 17}}>We have loads of experience and loads of power!!!</p>
              <RaisedButton label="Learn more" backgroundColor="#10a887" labelColor="white" labelStyle={{paddingLeft: 60, paddingRight: 60}} style={{height: 50}}/>
            </div>
          </div>
    );
  }
}

export default Hero;
