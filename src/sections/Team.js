import React, { Component } from 'react';
import Title from './../components/Title'
import Text from './../components/Text'
import Row from './../components/Row'

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

const data = [
  {
    name: "Konstantin Dichev",
    position: "Front End developer",
    img: "http://web-lom.com/img/Konstantin_Dichev.png"
  },
  {
    name: "Aleksandar Aleksandrov",
    position: "Back End development",
    img: "http://web-lom.com/img/Aleksandar_Aleksandrov_sashef.png"
  },
]

class Team extends Component {
  render() {
    return (
      <Row style={rowStyle}>
        <Title text="Team overview"/>
        <Text text="Such experience, big team, much money"/>
        <div style={containerStyle}>
          {data.map((item) =>
            <div style={cardStyle}>
              <div style={{borderRadius: "50%", width: 200, height: 200, margin: "0 auto"}}>
                <img alt="presentation" src={item.img} />
              </div>
              <h4>{item.name}</h4>
              <p>{item.position}</p>
            </div>
          )}
        </div>
      </Row>
    );
  }
}

export default Team;
