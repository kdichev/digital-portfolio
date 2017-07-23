import React, { Component } from 'react';
import asyncComponent from './components/AsyncComponent'

const AsyncHero = asyncComponent(() => import('./sections/Hero'))
const AsyncProducts = asyncComponent(() => import('./sections/Products'))
const AsyncTeam = asyncComponent(() => import('./sections/Team'))
const AsyncTools = asyncComponent(() => import('./sections/Tools'))
const AsyncContact = asyncComponent(() => import('./sections/Contact'))
const AsyncHeader = asyncComponent(() => import('./components/Header'))
const AsyncScrollPosition = asyncComponent(() => import('./components/ScrollPosition'))
const AsyncLayout = asyncComponent(() => import('./components/Layout'))
const AsyncInfo = asyncComponent(() => import('./sections/Info'))
const AsyncInfo2 = asyncComponent(() => import('./sections/Info2'))
// import Projects from './sections/Projects';
// import Trust from './sections/Trust';
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
      <AsyncLayout>
        <AsyncScrollPosition>
          <AsyncHeader />
          <AsyncHero />
          <AsyncProducts />
          <AsyncTeam />
          <AsyncTools />
          <AsyncInfo />
          <AsyncInfo2 />
          {/* <Projects /> */}
          {/* <Trust /> */}
          <AsyncContact />
        </AsyncScrollPosition>
      </AsyncLayout>
    );
  }
}

export default App;
