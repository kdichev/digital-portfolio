import React, { Component } from 'react';
import Title from './../components/Title'

class Tools extends Component {
  render() {
    return (
      <div className="row" style={{marginBottom: 50}}>
        <Title text="How we do it"/>
        <div className="col-md-8 col-md-offset-2">
          <div className="col-md-4 text-center">
            <img alt="" src="https://a.slack-edge.com/49235/img/developers/icon_build.png" />
            <h2 style={{display: "inline-block"}}>Working agile</h2>
            <br />
            <p style={{display: "inline-block", marginLeft: 50, marginRight: 50}}>
              Create apps for a brand new interface with bot users, slash commands and notifications.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img alt="" src="https://a.slack-edge.com/49235/img/developers/icon_connect.png" />
            <h2 style={{display: "inline-block"}}>Using top tech</h2>
            <br />
            <p style={{display: "inline-block", marginLeft: 50, marginRight: 50}}>
              Connect with Slack's 4 million daily active users through the App Directory.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img alt="" src="https://a.slack-edge.com/49235/img/developers/icon_delight.png" />
            <h2 style={{display: "inline-block"}}>Brainstorming with you</h2>
            <br />
            <p style={{display: "inline-block", marginLeft: 50, marginRight: 50}}>
              Deliver a great experience to your customers with your simple, easy-to-use Slack app.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tools;
