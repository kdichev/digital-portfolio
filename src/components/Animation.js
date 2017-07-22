import React, { Component } from 'react';

class Animation extends Component {
  constructor(props) {
  super(props);
    this.state = {
      transition : "all 600ms cubic-bezier(.165,.84,.44,1)",
      transform: this.props.slideOutIn ? `translate3d(0, ${this.props.slideOutIn}px, 0)` : 'initial',
      opacity: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        opacity: 1,
        transform: this.props.slideOutIn ? "translate3d(0, 0px, 0)" : 'initial'
      })
    }, 200)
  }

  render() {
    return (
      <div
        style={this.state}>
        {this.props.children}
      </div>
    );
  }
}

export default Animation;
