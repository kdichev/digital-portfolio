import React, { Component } from 'react';
import Paper from 'material-ui/Paper'

class Badge extends Component {
  constructor(props) {
  super(props);
    this.state = {
      scale: 1,
      zDepth: 0,
      zIndex: 0
    };
  }

  // handleMouseEnter = (e, index) => {
  //   this.setState({
  //     scale: 1.1,
  //     zDepth: 2,
  //     zIndex: 999
  //   })
  // }

  // handleMouseLeave = (e, index) => {
  //   this.setState({
  //     scale: 1,
  //     zDepth: 1,
  //     zIndex: 0
  //   })
  // }

  render() {
    const {item, index, classes} = this.props
    return (
      <Paper id={index} key={index} elevation={this.state.zDepth} className={classes.root}
        style={{transform: `scale(${this.state.scale})`, zIndex: this.state.zIndex}}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <img alt="presentation" src={item.img} className={classes.image} />
        <div>
          <h2>{item.title}</h2>
          <p>
            {item.text}
          </p>
          <br />
        </div>
      </Paper>
    );
  }
}

export default Badge;
