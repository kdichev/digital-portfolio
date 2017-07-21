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
      scrollTop: document.body.scrollTop
    })
  }

  render() {
    var children = this.props.children.map((child, index) => {
      return React.cloneElement(child, {scrollState: this.state.scrollTop, key: index} )
    });
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default ScrollPosition;
