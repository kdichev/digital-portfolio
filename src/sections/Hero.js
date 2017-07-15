import React, { Component } from 'react';
import VideoCover from './../components/VideoCover'
import RaisedButton from 'material-ui/RaisedButton'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './../App.css'

class Hero extends Component {
  render() {
    return (
          <div className="row" style={{height: 550, backgroundColor: "#17223A"}}>
            <ReactCSSTransitionGroup transitionName="slide" transitionAppear={true} transitionAppearTimeout={700}>
            {/* <VideoCover /> */}
              <div style={{textAlign: "center", padding:  10, paddingTop: 200}}>
                <h1 style={{color: "white"}}>We create digital products we are proud of. Tell us your idea.</h1>
                <p style={{color: "white", fontSize: 17}}>We have loads of experience and loads of power!!!</p>
                <RaisedButton label="Learn more" backgroundColor="#10a887" labelColor="white" labelStyle={{paddingLeft: 60, paddingRight: 60, borderRadius: "60px"}} style={{height: 50}} />
              </div>
            </ReactCSSTransitionGroup>
          </div>
    );
  }
}

export default Hero;
