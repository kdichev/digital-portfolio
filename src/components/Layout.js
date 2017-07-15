import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header'
// import Footer from './Footer'
class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <div className="container-fluid">
            {this.props.children}
          </div>
          {/* <Footer /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
