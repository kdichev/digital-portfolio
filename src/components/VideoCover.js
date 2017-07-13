import React, { Component } from 'react';
import video from './../assets/discussing_features.mp4';
import './../App.css'

class VideoCover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoHeight: {}
    };
  }

  componentWillMount() {
    this.scaleVideoContainer();
  }

  scaleVideoContainer = () => {
    var height = window.screen.availHeight - 450;
    this.setState({
      videoHeight: {height: height + 'px'}
    })
  }

  render() {
    return (
      <div className="homepage-hero-module" style={this.state.videoHeight} onChange={this.onChange}>
        <div className="video-container">
            <div className="filter"></div>
            <video autoPlay loop className="fillWidth"
              ref={(video) => {this.coverVideo = video}}
              >
                <source src={video} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                {/* <source src="PATH_TO_WEBM" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser. */}
            </video>
            <div className="poster hidden">
                {/* <img src="PATH_TO_JPEG" alt="" /> */}
            </div>
        </div>
      </div>
    );
  }
}

export default VideoCover;
