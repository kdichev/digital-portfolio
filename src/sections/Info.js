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
              <img src="https://a.slack-edge.com/f3494/img/uk/drag_drop_share.png" width="100%"/>
              </div>
              <div style={{width: 470, margin: 50}}>
              <h1>Drag, drop, and share your files.</h1>
              <p>Not just your messages, but all your files, images, PDFs, documents, and spreadsheets can be dropped right into Slack
                and shared with anyone you want. Add comments, star for later reference, and it’s all completely searchable.
                If you use any services like Google Drive, Dropbox, or Box, just paste the link and that
                document is immediately in sync and searchable too.</p>
              </div>
          </div>
        </Animation>
      </Row>
    );
  }
}

export default Info;
