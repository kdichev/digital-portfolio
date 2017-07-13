import React, { Component } from 'react';
import Title from './../components/Title'

class Team extends Component {
  render() {
    return (
      <div className="row">
        <Title text="Team overview"/>
        <div className="col-md-3"></div>
        <div className="col-md-4">
          <h4>Konstantin Dichev</h4>
          <p>CEO, co-founter | Front End development</p>
        </div>
        <div className="col-md-4">
          <h4>Aleksandar Aleksandrov</h4>
          <p>CTO, co-founter | Back End development</p>
        </div>
      </div>
    );
  }
}

export default Team;
