import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import VideoCover from './components/VideoCover'
import Layout from './components/Layout'
import Header from './components/Header'
import Hero from './sections/Hero'
import Team from './sections/Team'
import Trust from './sections/Trust'
import Cases from './sections/Cases'
import Contact from './sections/Contact'
import Products from './sections/Products'
import Tools from './sections/Tools'
import Projects from './sections/Projects'

class App extends Component {
  render() {
    return (
      <Layout>
        <Hero />
        <Products />
        <Team />
        <Tools />
        <Projects />
        <Trust />
        <Contact />
      </Layout>
    );
  }
}

export default App;
