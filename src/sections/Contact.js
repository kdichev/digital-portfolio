import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import Row from './../components/Row'
import Animation from './../components/Animation'
import data from './../data'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Slide from 'material-ui/transitions/Slide';

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

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };


  componentDidUpdate() {
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
                <Button
                  style={{height: 50, marginTop: 30, backgroundColor: "#10a887", color: "white",paddingLeft: 60, paddingRight: 60}}
                  raised
                  onTouchTap={this.handleOpen}
                >
                  {data.contact.buttonLabel}
                </Button>
              </div>
          </div>
        </Animation>
        <Dialog
          fullScreen
          open={this.state.open}

          transition={<Slide direction="right" />}
        >
          <AppBar style={{position: "relative"}}>
            <Toolbar>
              <Typography type="title" color="inherit" style={{flex: 1}}>
                Sound
              </Typography>
              <Button color="contrast" onClick={this.handleRequestClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog>
      </Row>
    );
  }
}

export default Contact;
