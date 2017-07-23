import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './../App.css'
import Animation from './../components/Animation'
import data from './../data'
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Animation tx={0} ty={-64} tz={0}>
        <AppBar
          showMenuIconButton={false}
          style={{backgroundColor: "transparent", position: "fixed", color: "white", height: 64}}
          ref={(header) => {this.Header = header}}
          elevation={0}
        >
          <Toolbar>
            <Typography type="title" color="inherit" style={{flex: 1}}>
              {data.header.title}
            </Typography>
            <Button raised>Login</Button>
          </Toolbar>
         </AppBar>
      </Animation>
    );
  }
}

export default Header;
