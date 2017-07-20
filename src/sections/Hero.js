import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './../App.css';
import Row from './../components/Row'

class Hero extends Component {
  // constructor(props) {
  // super(props);
  //   this.state = {
  //   };
  // }

  render() {
    return (
        <Row style={{height: 550, background: "linear-gradient(45deg, #141E30 30%, #243B55 90%)"}}>
            <div style={{textAlign: "center", padding:  10, paddingTop: 200}}>
                <div>
                  <h1 style={{color: "white"}}>We create digital products we are proud of. Tell us your idea.</h1>
                  <p style={{color: "white", fontSize: 17}}>We have loads of experience and loads of power!!!</p>
                  <RaisedButton label="Learn more" backgroundColor="#10a887" labelColor="white" labelStyle={{paddingLeft: 60, paddingRight: 60, borderRadius: "60px"}} style={{height: 50, marginTop: 30}} />
                </div>
            </div>
        </Row>
    );
  }
}

export default Hero;
