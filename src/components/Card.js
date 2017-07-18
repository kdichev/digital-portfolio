import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './../App.css'

const style = {
  height: 220,
  width: 230,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  borderRadius: 6
};

class Card extends Component {
  constructor(props) {
  super(props);
    this.state = {
      zDepth: 1
    };
  }
  handleMouseEnter = () => {
    this.setState({
      zDepth: 2
    })
  }

  handleMouseLeave = () => {
    this.setState({
      zDepth: 1
    })
  }

  render() {
    return (
      <Paper
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={style} zDepth={this.state.zDepth}>
        <div style={{backgroundColor: this.props.bgColor, height: "75%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img alt="" style={{height: 100, width: 100, borderRadius: 10}} src={this.props.imgSrc} />
        </div>
        <div style={{height: "25%", padding: 10}}>
          <h4 style={{margin: 0, float: "left"}}>{this.props.title}</h4>
          <br />
          <p style={{float: "left"}}>{this.props.description}</p>
        </div>
      </Paper>
    );
  }
}

export default Card;
