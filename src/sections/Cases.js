import React, { Component } from 'react';
import Title from './../components/Title'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Kiosk from './../assets/kiosk.PNG'
import eurodeli from './../assets/eurodeli.PNG'
import vililacosta from './../assets/vililacosta.PNG'

class Cases extends Component {
  render() {
    return (
      <div className="row">
        <Title text="Cases"/>
        <div className="col-md-4">
          <Card>
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src={eurodeli} alt="" />
            </CardMedia>
            <CardTitle title="Euro Deli" subtitle="e-commerce" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <RaisedButton label="See more" primary={true}/>
            </CardActions>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src={Kiosk} alt="" />
            </CardMedia>
            <CardTitle title="Kiosk" subtitle="renting" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <RaisedButton label="See more" primary={true}/>
            </CardActions>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src={vililacosta} alt="" />
            </CardMedia>
            <CardTitle title="Vili La Costa" subtitle="hospitality management" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <RaisedButton label="See more" primary={true}/>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default Cases;
