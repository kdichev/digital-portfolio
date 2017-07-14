import React, { Component } from 'react';
import Title from './../components/Title'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import kiosk from './../assets/kiosk.PNG'
import eurodeli from './../assets/eurodeli.PNG'
import vililacosta from './../assets/vililacosta.PNG'
import Case from './../components/Case'

class Cases extends Component {
  render() {
    return (
      <div className="row">
        <Title text="Cases"/>
        <Case
          heading="Euro Deli"
          desctiption="project description"
          image={eurodeli}
          backgroundColor="#3aa3e3"
          height="300px"
          leftWidth="30%"
          rightWidth="70%"
        /><br />
        <Case
          heading="Kiosk"
          desctiption="project description"
          image={kiosk}
          backgroundColor="#7C49B8"
          height="250px"
          leftWidth="60%"
          rightWidth="40%"
        /><br />
        <Case
          heading="Vili La Costa"
          desctiption="project description"
          image={vililacosta}
          backgroundColor="#2ab27b"
          height="350px"
          leftWidth="50%"
          rightWidth="50%"
        />
      </div>
    );
  }
}

export default Cases;
