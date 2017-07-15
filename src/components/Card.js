import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


const style = {
  height: 220,
  width: 230,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  borderRadius: 6
};

class Card extends Component {
  render() {
    console.log(this.props.bgColor);
    return (
      <Paper style={style} zDepth={1}>
        <div style={{backgroundColor: this.props.bgColor, height: "75%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img style={{height: 100, width: 100, borderRadius: 10}} src="https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2016-05-02/39618425058_6421ca6f9b823e68edea_192.png" />
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
