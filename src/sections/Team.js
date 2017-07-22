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

class Team extends Component {
  render() {
    return (
      <Row style={rowStyle}>
        <Animation>
          <Title text="Team overview"/>
          <Text text="Such experience, big team, much money"/>
          <div style={containerStyle}>
            {data.team.map((item, index) =>
              <div style={cardStyle} key={index}>
                <div style={{borderRadius: "50%", width: 200, height: 200, margin: "0 auto"}}>
                  <img alt="presentation" src={item.img} />
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
