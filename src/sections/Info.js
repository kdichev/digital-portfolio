import React, { Component } from 'react';
import Row from './../components/Row'
import Animation from './../components/Animation'

const rowStyle = {
  paddingBottom: "3%",
  paddingTop: "3%",
  overflow: "hidden"
}

const containerStyle = {
  display: "flex",
  flexDirection: "row-reverse",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden"
}

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      animate: 0
    };
  }

  render() {
    return (
      <Row style={rowStyle}>
        {/* <VideoCover /> */}
        <Animation  tx={-1500} ty={0} tz={0}>
          <div style={containerStyle}>
              <div style={{margin: 50}}>
              <img src="https://a.slack-edge.com/f3494/img/uk/drag_drop_share.png" width="100%" alt="presentation"/>
              </div>
              <div style={{width: 470, margin: 50}}>
              <h1>We deliver for performance</h1>
              <p>Server side or client side, we can deliver both to the table.
                 Load your initial view using the server, use the client for the rest</p>
              </div>
          </div>
        </Animation>
      </Row>
    );
  }
}

export default Info;
