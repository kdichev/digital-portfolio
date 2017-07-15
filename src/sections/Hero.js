import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './../App.css';

class Hero extends Component {
  constructor(props) {
  super(props);
    this.state = {
      padding: 300
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      padding: 300 - (document.body.scrollTop / 6)
    })
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll());
  }
  render() {
    return (
      <div className="row" style={{height: 550, backgroundColor: "#17223A"}}>
          <div style={{textAlign: "center", padding:  10, paddingTop: this.state.padding}}>
            <ReactCSSTransitionGroup transitionName="slide" transitionAppear={true} transitionAppearTimeout={700}>
              <h1 style={{color: "white"}}>We create digital products we are proud of. Tell us your idea.</h1>
              <p style={{color: "white", fontSize: 17}}>We have loads of experience and loads of power!!!</p>
              <RaisedButton label="Learn more" backgroundColor="#10a887" labelColor="white" labelStyle={{paddingLeft: 60, paddingRight: 60, borderRadius: "60px"}} style={{height: 50}} />
            </ReactCSSTransitionGroup>
          </div>
      </div>
    );
  }
}

export default Hero;
