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
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden"
}

class Info2 extends Component {
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
        <Animation  tx={1500} ty={0} tz={0}>
          <div style={containerStyle}>
              <div style={{margin: 50}}>
              <img src="https://a.slack-edge.com/0180/img/tour/everywhere.png" width="100%" alt="presentational"/>
              </div>
              <div style={{width: 470, margin: 50}}>
              <h1>Our solutions are fully responsive</h1>
              <p>You will be able to target maximum users by having mobile, tablets and desktops covered and you can also target the native markets.</p>
              </div>
          </div>
        </Animation>
      </Row>
    );
  }
}

export default Info2;
