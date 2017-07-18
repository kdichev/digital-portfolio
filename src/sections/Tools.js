import React, { Component } from 'react';
import Title from './../components/Title'
import Row from './../components/Row'

class Tools extends Component {
  render() {
    return (
      <Row style={{marginBottom: 50}}>
        <div>
          <Title text="How we do it"/>
          <div className="col-md-8 col-md-offset-2">
            <div className="col-md-4 text-center">
              <img alt="" src="https://a.slack-edge.com/49235/img/developers/icon_build.png" />
              <h2 style={{display: "inline-block"}}>Working agile</h2>
              <br />
              <p style={{display: "inline-block", marginLeft: 50, marginRight: 50}}>
                We focus on eliminating the barriers to getting work done efficiently.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img alt="" src="https://a.slack-edge.com/49235/img/developers/icon_connect.png" />
              <h2 style={{display: "inline-block"}}>Using top tech</h2>
              <br />
              <p style={{display: "inline-block", marginLeft: 50, marginRight: 50}}>
                We use only high end technologies, because you need to stay on track.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img alt="" src="https://a.slack-edge.com/49235/img/developers/icon_delight.png" />
              <h2 style={{display: "inline-block"}}>Brainstorming with you</h2>
              <br />
              <p style={{display: "inline-block", marginLeft: 50, marginRight: 50}}>
                Let’s talk about this idea for aligning crackers with recent advancements in String Theory.
              </p>
            </div>
          </div>
        </div>
      </Row>
    );
  }
}

export default Tools;
