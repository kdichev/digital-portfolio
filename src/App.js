import React, { Component } from 'react';
// import asyncComponent from './components/AsyncComponent'

import Layout from './components/Layout';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Team from './sections/Team';
import Tools from './sections/Tools';
import Contact from './sections/Contact';
import Info from './sections/Info';
import Info2 from './sections/Info2';
import Info3 from './sections/Info3';
import Header from './components/Header'
import ScrollPosition from './components/ScrollPosition'
import Divider from 'material-ui/Divider';

// const AsyncHero = asyncComponent(() => import('./sections/Hero'))
// const AsyncProducts = asyncComponent(() => import('./sections/Products'))
// const AsyncTeam = asyncComponent(() => import('./sections/Team'))
// const AsyncTools = asyncComponent(() => import('./sections/Tools'))
// const AsyncContact = asyncComponent(() => import('./sections/Contact'))
// const AsyncHeader = asyncComponent(() => import('./components/Header'))
// const AsyncScrollPosition = asyncComponent(() => import('./components/ScrollPosition'))
// const AsyncLayout = asyncComponent(() => import('./components/Layout'))
// const AsyncInfo = asyncComponent(() => import('./sections/Info'))
// const AsyncInfo2 = asyncComponent(() => import('./sections/Info2'))

class App extends Component {
  // constructor(props) {
  //   super(props);
  //     this.state = {
  //     };
  // }

  render() {
    return (
      // <AsyncLayout>
      //   <AsyncScrollPosition>
      //     <AsyncHeader />
      //     <AsyncHero />
      //     <AsyncProducts />
      //     <AsyncTeam />
      //     <AsyncTools />
      //     <AsyncInfo />
      //     <AsyncInfo2 />
      //     {/* <Projects /> */}
      //     {/* <Trust /> */}
      //     <AsyncContact />
      //   </AsyncScrollPosition>
      // </AsyncLayout>
      <Layout>
        <ScrollPosition>
          <Header />
          <Hero />
          <Products />
          <Team />
          <Tools />
          <Divider light />
          <Info3 />
          <Divider light />
          <Info />
          <Divider light />
          <Info2 />
          {/* <Projects /> */}
          {/* <Trust /> */}
          <Contact />
          <Footer />
        </ScrollPosition>
      </Layout>
    );
  }
}

export default App;
