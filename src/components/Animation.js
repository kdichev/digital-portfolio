import React, { Component } from 'react';

class Animation extends Component {
  constructor(props) {
  super(props);
    this.state = {
      transition : "all 600ms cubic-bezier(.165,.84,.44,1)",
      transform: `translate3d(${this.props.tx}px, ${this.props.ty}px, ${this.props.tz}px)`,
      opacity: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        opacity: 1,
        transform: "translate3d(0, 0px, 0)",
      })
    }, 200)
  }

  render() {
    return (
      <div
        style={{
          transition: this.state.transition,
          transform: this.state.transform,
          opacity: this.state.opacity,
          ...this.props.style
        }}>
        {this.props.children}
      </div>
    );
  }
}

export default Animation;
