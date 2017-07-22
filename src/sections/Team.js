import React, { Component } from 'react';
import Title from './../components/Title'
import Text from './../components/Text'
import Row from './../components/Row'
import Animation from './../components/Animation'
import data from './../data'

const rowStyle = {
  backgroundColor: "#F1F8FD",
  paddingBottom: "3%",
  paddingTop: "3%"
}

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
}

const cardStyle = {
  display:"flex",
  flexDirection:"column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: 500
}
var style = {
  borderRadius: "50%",
  width: 200,
  height: 200,
  margin: "0 auto",
  backgroundColor: "none",
  transition : "all 300ms cubic-bezier(.165,.84,.44,1)",
}

var img = {
  transition : "all 300ms cubic-bezier(.165,.84,.44,1)",
  display: "block"
}

var text = {
  color: "white",
  display: "none"
}


class Team extends Component {
  constructor(props) {
  super(props);
    this.state = {
    };
  }

  handleMouseEnter = () => {
    // console.log(this.Card);
    // console.log("handleMouseEnter");
    // style.backgroundColor = "rgb(23, 34, 58)"
    // style.borderRadius = 0
    // style.transform = "scale(1.7)"
    // img.display = "none"
    // text.display = "block"
    // this.forceUpdate();
  }

  handleMouseLeave = () => {
    // console.log("handleMouseLeave");
    // style.transform = "scale(1)"
    // img.opacity = 1
    // img.display = "block"
    // style.borderRadius = "50%"
    // style.backgroundColor = "none"
    // text.display = "none"
    // this.forceUpdate();
  }
  render() {
    return (
      <Row style={rowStyle}>
        <Animation>
          <Title text="Team overview"/>
          <Text text="Such experience, big team, much money"/>
          <div style={containerStyle}>
            {data.team.map((item, index) =>
              <div style={cardStyle} key={index}>
                <div
                key={index}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                ref={card => this.Card = card}
                style={style}>
                <p style={text}>Hi, its me Koko</p>
                <img style={img} alt="presentation" src={item.img} />
                </div>
                <h4>{item.name}</h4>
                <p>{item.position}</p>
              </div>
            )}
          </div>
        </Animation>
      </Row>
    );
  }
}

export default Team;
