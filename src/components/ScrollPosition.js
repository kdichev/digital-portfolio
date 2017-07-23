import React, { Component } from 'react';
import {addScrollEventListener} from './../Lib/addScrollListener'

class ScrollPosition extends Component {
  constructor(props) {
    super(props);
      this.state = {
        scrollTop: 0,
      };
    }

  componentDidMount() {
    addScrollEventListener(this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollTop: this.calculateAnimationProgress(document.body)
    })
  }

  calculateAnimationProgress (target) {
    return this.mapRange(target.scrollTop, 0, target.scrollHeight - window.innerHeight, 0, 100).toFixed(0);
  }

  mapRange = (value, inMin, inMax, outMin, outMax) => (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;

  render() {
    const { children } = this.props
    const { scrollTop } = this.state

    return (
      <div>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {scrollState: scrollTop, key: index})
        )}
      </div>
    );
  }
}

export default ScrollPosition;
