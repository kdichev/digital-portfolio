import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Layout extends Component {
  render() {
    const {children} = this.props
    return (
      <MuiThemeProvider>
        <div style={{display: "flex", flexDirection: "column"}}>
          {children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
