import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header'
class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <div className="container-fluid">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
