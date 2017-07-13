import React, { Component } from 'react';
import VideoCover from './../components/VideoCover'

class Hero extends Component {
  render() {
    return (
          <div className="row">
            <VideoCover />
            <div
            >
            <h1>We create digital products we are proud of. Tell us your idea
               and we’ll do everything else -
              from research and planning to custom design and development.
              We help startups and businesses achieve their goals and score big
              .</h1>
            </div>
          </div>
    );
  }
}

export default Hero;
