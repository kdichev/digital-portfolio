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
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    //console.log(document.body.scrollTop);
    if (document.body.scrollTop > 248) {
      this.setState({show: true})
    } else {
      this.setState({show: false})
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll());
  }
  render() {

    return (
      <Layout>
        {this.state.show &&
          <FloatingActionButton style={{position: "fixed", bottom: 10, right: 10}}>
            <ContentAdd />
          </FloatingActionButton>
        }
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
