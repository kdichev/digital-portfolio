import React, { Component } from 'react';
import Slider from 'react-slick'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ActionHome1 from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import kiosk from './../assets/kiosk.PNG'
import eurodeli from './../assets/eurodeli.PNG'
import vililacosta from './../assets/vililacosta.PNG'
import Case from './../components/Case'
import Card from './../components/Card'
import Title from './../components/Title'

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <IconButton style={{position: "absolute", top:"30%", right: 0}}>
      <ActionHome1 onClick={onClick}/>
    </IconButton>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  console.log(style);
  return (
    <IconButton style={{position: "absolute", top:"30%", left: "0px"}}>
      <ActionHome onClick={onClick}/>
    </IconButton>
  );
}

class Projects extends Component {
  render() {
    var settings = {
      dots: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true
    };
    console.log(settings);
    return (
      <div className="row" style={{backgroundColor: "#F1F8FD", padding: "50px 0", position: "relative"}}>
        {/* <Title text="Projects" /> */}
        <div className='container'>
        	<Slider
            {...settings}
            >
          	<div>
              <div className="col-md-6 col-xs-12" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Card title="Penguin" description="Office management" bgColor="#5D8EF2"/>
              </div>
              <div className="col-md-4 col-xs-12" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div>
                <h1>Meet the most popular penguin in town</h1>
                <p>Sometimes a company’s first idea isn’t quite right, and you end up switching gears to focus on something else. For Rachel Law and Alyx Baldwin, that meant shifting towards a chat based shopping bot, named Kip. </p>
                </div>
              </div>
            </div>
            <div>
              <div className="col-md-6" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Card title="Green Systems" description="Agriculture automation" bgColor="#10a887"/>
              </div>
              <div className="col-md-4">
                <h1>Grow like a pro</h1>
                <p>some description here</p>
              </div>
            </div>
            <div>
              <div className="col-md-6" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Card />
              </div>
              <div className="col-md-4">
                <h1>Header</h1>
                <p>some description here</p>
              </div>
            </div>
            <div>
              <div className="col-md-6" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Card />
              </div>
              <div className="col-md-4">
                <h1>Header</h1>
                <p>some description here</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Projects;
