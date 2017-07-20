import React, { Component } from 'react';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Team from './sections/Team';
import Tools from './sections/Tools';
import Projects from './sections/Projects';
import Trust from './sections/Trust';
import Contact from './sections/Contact';
import Header from './components/Header'
// import Cases from './sections/Cases';
// import Footer from './Footer'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //     this.state = {
  //     };
  // }

  render() {
    return (
      <Layout>
        <Header />
        <Hero />
        <Products />
        <Team />
        <Tools />
        {/* <Projects /> */}
        {/* <Trust /> */}
        {/* <Contact /> */}
      </Layout>
    );
  }
}

export default App;
