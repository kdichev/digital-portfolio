import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Row from './../components/Row'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
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
      <Row style={{backgroundColor: "#17223A"}}>
        {/* <VideoCover /> */}
          {/* <div className="col-md-8 col-md-offset-2 col-xs-12"> */}
        <div className="col-md-8 col-md-offset-2" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div className="col-md-6 col-xs-6">
            <img alt="" src="https://a.slack-edge.com/49235/img/developers/giant_file.png" style={{float: "right"}}/>
          </div>
          <div className="col-md-6 col-xs-6" style={{padding: 0}}>
            <h1 style={{color: "white"}}>Lets do this.</h1>
            <p style={{color: "white", fontSize: 17}}>We have loads of experience and loads of power!!!</p>
            <RaisedButton label="Contact us" backgroundColor="#10a887" labelColor="white" labelStyle={{paddingLeft: 60, paddingRight: 60}} style={{height: 50}} onTouchTap={this.handleOpen}/>
          </div>
        </div>
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
