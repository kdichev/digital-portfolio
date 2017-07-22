import React, { Component } from 'react';
import './../App.css';
import Row from './../components/Row'
import Animation from './../components/Animation'

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  paddingBottom: "3%",
  paddingTop: "3%"
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
    title: "Project Development",
    text: "Create apps for a brand new interface with bot users, slash commands and notifications.",
    img: "https://a.slack-edge.com/49235/img/developers/icon_build.png"
  },
  {
    title: "Software Development",
    text: "Connect with Slack's 4 million daily active users through the App Directory.",
    img: "https://a.slack-edge.com/49235/img/developers/icon_connect.png"
  },
  {
    title: "Hosting Solutions",
    text: "Deliver a great experience to your customers with your simple, easy-to-use Slack app.",
    img: "https://a.slack-edge.com/49235/img/developers/icon_delight.png"
  }
]

class Products extends Component {
  constructor(props) {
  super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Animation slideOutIn={150}>
        <Row style={rowStyle}>
            {data.map((item, index) =>
              <div style={cardStyle} key={index}>
                <img alt="presentation" src={item.img} />
                <h2>{item.title}</h2>
                <br />
                <p>
                  {item.text}
                </p>
              </div>
            )}
        </Row>
      </Animation>
    );
  }
}

export default Products;
