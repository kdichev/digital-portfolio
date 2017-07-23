import React, { Component } from 'react';
import Title from './../components/Title'
import Row from './../components/Row'
import Animation from './../components/Animation'
import data from './../data'

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
  maxWidth: 400,
  flexDirection:"column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  paddingLeft: 15,
  paddingRight: 15
}

class Tools extends Component {
  render() {
    return (
      <Row style={rowStyle}>
        <Animation>
          <Title text="How we do it"/>
          <div style={containerStyle}>
            {data.tools.map((item, index) =>
              <div style={cardStyle} key={index}>
                <div style={{borderRadius: "50%", width: 200, height: 200, margin: "0 auto"}}>
                  <img alt="presentation" src={item.img} width="100%"/>
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
