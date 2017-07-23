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
  justifyContent: "space-between",
  overflow: "hidden"
}

class Info3 extends Component {
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
          <div style={containerStyle}>
            <Animation  tx={1500} ty={0} tz={0}>
              <div>
              <img src="https://a.slack-edge.com/66f9/img/tour/ways_ssb.png" width="100%" alt="presentational"/>
              </div>
            </Animation>
            <Animation tx={-1500} ty={0} tz={0}>
              <div style={{margin: 50}}>
              <h1>We develop with mind in you</h1>
              <p>We will bring you tools so that you can scale and monitor your business</p>
              </div>
            </Animation>
          </div>
      </Row>
    );
  }
}

export default Info3;
