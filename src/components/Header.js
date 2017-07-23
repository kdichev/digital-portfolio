import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './../App.css'
import Animation from './../components/Animation'
import data from './../data'
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transition: -64
    };
  }

  render() {
    return (
      <Animation tx={0} ty={this.state.transition} tz={0}>
        <AppBar
          style={{backgroundColor: "transparent", position: "fixed", color: "white", height: 64}}
          ref={(header) => {this.Header = header}}
          elevation={0}
        >
          <Toolbar>
            <Typography type="title" color="inherit" style={{flex: 1}}>
              {data.header.title}
            </Typography>
            <Button style={{color: "white"}}>Blog</Button>
          </Toolbar>
         </AppBar>
      </Animation>
    );
  }
}

export default Header;
