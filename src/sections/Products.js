import React, { Component } from 'react';

class Products extends Component {
  render() {
    return (
      <div className="row" style={{ marginTop: 50, marginBottom: 50}}>
        <div className="col-md-8 col-md-offset-2">
          <div className="col-md-4 text-center">
            <img src="https://a.slack-edge.com/49235/img/developers/icon_build.png" srcset="https://a.slack-edge.com/49235/img/developers/icon_build.png 1x, https://a.slack-edge.com/bfaba/img/developers/icon_build@2x.png 2x" />
            <h2 style={{display: "inline-block"}}>Project Development</h2>
            <br />
            <p style={{display: "inline-block", marginLeft: 50, marginRight: 50}}>
              Create apps for a brand new interface with bot users, slash commands and notifications.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img src="https://a.slack-edge.com/49235/img/developers/icon_connect.png" srcset="https://a.slack-edge.com/49235/img/developers/icon_connect.png 1x, https://a.slack-edge.com/49235/img/developers/icon_connect@2x.png 2x" />
            <h2 style={{display: "inline-block"}}>Software Development</h2>
            <br />
            <p style={{display: "inline-block", marginLeft: 50, marginRight: 50}}>
              Connect with Slack's 4 million daily active users through the App Directory.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img src="https://a.slack-edge.com/49235/img/developers/icon_delight.png" srcset="https://a.slack-edge.com/49235/img/developers/icon_delight.png 1x, https://a.slack-edge.com/bfaba/img/developers/icon_delight@2x.png 2x" />
            <h2 style={{display: "inline-block"}}>Hosting Solutions</h2>
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

export default Products;
