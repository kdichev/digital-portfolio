import React, { Component } from 'react';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Team from './sections/Team';
import Tools from './sections/Tools';
import Projects from './sections/Projects';
import Trust from './sections/Trust';
import Contact from './sections/Contact';
// import Cases from './sections/Cases';

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
