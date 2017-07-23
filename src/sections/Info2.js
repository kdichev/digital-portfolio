import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Row from './../components/Row'
import Animation from './../components/Animation'
import data from './../data'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Slide from 'material-ui/transitions/Slide';

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
        <Animation  tx={1500} ty={0} tz={0}>
          <div style={containerStyle}>
              <div style={{margin: 50}}>
              <img src="https://a.slack-edge.com/0180/img/tour/everywhere.png" width="100%"/>
              </div>
              <div style={{width: 470, margin: 50}}>
              <h1>All of the above, at Enterprise scale</h1>
              <p>Enterprise Grid brings the power and utility of Slack to large, complex organizations.</p>
              </div>
          </div>
        </Animation>
      </Row>
    );
  }
}

export default Info;
