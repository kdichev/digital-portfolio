import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './../App.css';

class Products extends Component {
  constructor(props) {
  super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="row" style={{ marginTop: 50, marginBottom: 50}}>
        <ReactCSSTransitionGroup transitionName="slide" transitionAppear={true} transitionAppearTimeout={1000}>
          <div className="col-md-8 col-md-offset-2">
            <div className="col-md-4 text-center">
              <img alt="presentation" src="https://a.slack-edge.com/49235/img/developers/icon_build.png" />
              <h2 style={{display: "inline-block"}}>Project Development</h2>
              <br />
              <p style={{display: "inline-block", marginLeft: 50, marginRight: 50}}>
                Create apps for a brand new interface with bot users, slash commands and notifications.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img alt="presentation" src="https://a.slack-edge.com/49235/img/developers/icon_connect.png" />
              <h2 style={{display: "inline-block"}}>Software Development</h2>
              <br />
              <p style={{display: "inline-block", marginLeft: 50, marginRight: 50}}>
                Connect with Slack's 4 million daily active users through the App Directory.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img alt="presentation" src="https://a.slack-edge.com/49235/img/developers/icon_delight.png" />
              <h2 style={{display: "inline-block"}}>Hosting Solutions</h2>
              <br />
              <p style={{display: "inline-block", marginLeft: 50, marginRight: 50}}>
                Deliver a great experience to your customers with your simple, easy-to-use Slack app.
              </p>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Products;
