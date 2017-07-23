import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Row from './../components/Row'
import Animation from './../components/Animation'
import data from './../data'

const rowStyle = {
  backgroundColor: "#17223A",
  paddingBottom: "3%",
  paddingTop: "3%"
}

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      animate: 0
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  componentDidUpdate() {
    console.log("asd");
    // this.setState({
    //   animate: 150
    // })
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log(nextProps, nextState);
  //   if (nextProps.scrollState > "80%") {
  //     console.log("asd");
  //     return true
  //   }
  //   return false
  // }

  //Utility function returns boolean if value within a given range
  isInRange = (val, min, max) => {
    return val >= min && val <= max;
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <Row style={rowStyle}>
        {/* <VideoCover /> */}
        <Animation  tx={0} ty={150} tz={0}>
          <div style={containerStyle}>
              <div>
                <img
                  alt=""
                  width="250px"
                  src="https://a.slack-edge.com/49235/img/developers/giant_file.png"
                  style={{float: "right"}}
                />
              </div>
              <div style={{padding: 0}}>
                <h1 style={{color: "white"}}>{data.contact.title}</h1>
                <p style={{color: "white", fontSize: 17}}>{data.contact.text}</p>
                <RaisedButton
                  label={data.contact.buttonLabel}
                  backgroundColor="#10a887"
                  labelColor="white"
                  labelStyle={{paddingLeft: 60, paddingRight: 60}}
                  style={{height: 50}}
                  onTouchTap={this.handleOpen}
                />
              </div>
          </div>
        </Animation>
        <Dialog
          title="It is easy to contact us!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Tour the documentation and learn about what you can build on Slack.
          <br />
          <TextField
            hintText="John Doe"
            floatingLabelText="Name"
          /><br />
          <TextField
            hintText="johndoe@gmail.com"
            floatingLabelText="Email"
          /><br />
          <TextField
            hintText="Not Hotdog app"
            floatingLabelText="Tell us more about your idea"
            multiLine={true}
            rows={2}
          />
        </Dialog>
      </Row>
    );
  }
}

export default Contact;
