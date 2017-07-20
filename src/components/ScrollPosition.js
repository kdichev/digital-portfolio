import React, { Component } from 'react';
import {addScrollEventListener, removeScrollEventListener} from './../Lib/addScrollListener'

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
    // this.setState({
    //   scrollTop: document.body.scrollTop
    // })
  }

  componentWillUnmount() {
    removeScrollEventListener(this.handleScroll)
  }

  render() {
    var children = this.props.children.map(child => {
      return React.cloneElement(child, {scrollState: this.state.scrollTop})
    });
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default ScrollPosition;
