import React, { Component } from 'react';
import Title from './../components/Title'
import Row from './../components/Row'
import Animation from './../components/Animation'

const rowStyle = {
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
  flex: 1,
  minWidth: 300,
  maxWidth: 400,
  flexDirection:"column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  paddingLeft: 15,
  paddingRight: 15
}

const data = [
  {
    title: "Working agile",
    text: "We focus on eliminating the barriers to getting work done efficiently.r",
    img: "https://a.slack-edge.com/49235/img/developers/icon_build.png"
  },
  {
    title: "Using top tech",
    text: "We use only high end technologies, because you need to stay on track.",
    img: "https://a.slack-edge.com/49235/img/developers/icon_connect.png"
  },
  {
    title: "Brainstorming with you",
    text: "Let’s talk about this idea for aligning crackers with recent advancements in String Theory.",
    img: "https://a.slack-edge.com/49235/img/developers/icon_delight.png"
  },
]

class Tools extends Component {
  render() {
    return (
      <Row style={rowStyle}>
        <Animation>
          <Title text="How we do it"/>
          <div style={containerStyle}>
            {data.map((item, index) =>
              <div style={cardStyle} key={index}>
                <div style={{borderRadius: "50%", width: 200, height: 200, margin: "0 auto"}}>
                  <img alt="presentation" src={item.img} />
                </div>
                <h2>{item.title}</h2>
                <br />
                <p>
                  {item.text}
                </p>
              </div>
            )}
          </div>
        </Animation>
      </Row>
    );
  }
}

export default Tools;
