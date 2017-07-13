import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const TITLE = "SasheF and Koko"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title={TITLE}
            showMenuIconButton={false}
          />
          <div>
            <h1>We create digital products we are proud of. Tell us your idea and we’ll do everything else - from research and planning to custom design and development. We help startups and businesses achieve their goals and score big.</h1>
            <a href="">see projects</a>
          </div>
          <div>
            <h1>Team overview</h1>
            <h4>Konstantin Dichev</h4>
            <p>CEO, co-founter | Front End development</p>
            <h4>Aleksandar Aleksandrov</h4>
            <p>CTO, co-founter | Back End development</p>
          </div>
          <div>
            <h1>Companies we worked with</h1>
          </div>
          <div>
            <h1>Projects</h1>
          </div>
          <div>
            <h1>Have a project for us?</h1>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
