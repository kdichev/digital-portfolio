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
import Ripple from 'material-ui/internal/TouchRipple'
class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      show: false,
      style: {
        position: "fixed",
        bottom: 10,
        right: 10,
        zIndex: 999,
        opacity: 0,
        transition:"all .4s ease-in-out",
        transform: "scale(0)"
      }
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    //console.log(document.body.scrollTop);
    if (document.body.scrollTop > 1) {
      this.setState({show: true,
        style: {
          position: "fixed",
          bottom: 10,
          right: 10,
          zIndex: 999,
          transition:"all .4s cubic-bezier(.165,.84,.44,1)",
          opacity: 1,
          transform: "scale(1)",
        },
        style1: {
          transition:"all .4s cubic-bezier(.165,.84,.44,1)",
          transform: "rotate(0deg)"
        }
      })
    } else {
        this.setState({show: false,
          style: {
            position: "fixed",
            bottom: 10,
            right: 10,
            zIndex: 999,
            transition:"all .4s cubic-bezier(.165,.84,.44,1)",
            opacity: 0,
            transform: "scale(0)",
          },
          style1: {
            transform: "rotate(-50deg)"
          }
        })
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll());
  }

  render() {
    return (
      <Layout>
        <FloatingActionButton style={this.state.style} backgroundColor="#10a887">
          <ContentAdd style={this.state.style1}/>
        </FloatingActionButton>
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
