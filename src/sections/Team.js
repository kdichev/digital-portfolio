import React, { Component } from 'react';
import Title from './../components/Title'
import Row from './../components/Row'

class Team extends Component {
  render() {
    return (
      <Row style={{backgroundColor: "#F1F8FD", paddingBottom: 50}}>
        <Title text="Team overview"/>
        <p style={{textAlign: "center"}}>Such experience, big team, much money</p>
        <div className="col-md-4 col-md-offset-2 text-center">
          <div style={{borderRadius: "50%", width: 200, height: 200, margin: "0 auto"}}>
            <img alt="presentation" src="http://web-lom.com/img/Konstantin_Dichev.png" />
          </div>
          <h4>Konstantin Dichev</h4>
          <p>Front End development</p>
        </div>
        <div className="col-md-4 text-center">
          <div style={{borderRadius: "50%", width: 200, height: 200, margin: "0 auto"}}>
            <img alt="presentation" src="http://web-lom.com/img/Aleksandar_Aleksandrov_sashef.png" />
          </div>
          <h4>Aleksandar Aleksandrov</h4>
          <p>Back End development</p>
        </div>
      </Row>
    );
  }
}

export default Team;
