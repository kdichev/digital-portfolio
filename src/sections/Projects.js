import React, { Component } from 'react';
import Slider from 'react-slick'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ActionHome1 from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Card from './../components/Card'

function SampleNextArrow(props) {
  const {onClick} = props
  return (
    <IconButton style={{position: "absolute", top:"30%", right: 0, width: 80, height: 80}} iconStyle={{width: 60, height: 60}}>
      <ActionHome1 onClick={onClick} color={"#3aa3e3"}/>
    </IconButton>
  );
}

function SamplePrevArrow(props) {
  const {onClick} = props
  return (
    <IconButton style={{position: "absolute", top:"30%", left: 0, width: 80, height: 80}} iconStyle={{width: 60, height: 60,}}>
      <ActionHome onClick={onClick} color={"#3aa3e3"}/>
    </IconButton>
  );
}

class Projects extends Component {
  render() {
    var settings = {
      dots: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoPlay: false
    };
    return (
      <div className="row" style={{backgroundColor: "#F1F8FD", padding: "50px 0", position: "relative"}}>
        <div className='container'>
        	<Slider
            {...settings}
            >
          	<div>
              <div className="col-md-6 col-xs-12" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Card
                  title="Penguin"
                  description="Office management"
                  bgColor="#5D8EF2"
                  imgSrc="https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2016-05-02/39618425058_6421ca6f9b823e68edea_192.png"
                />
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
                <Card
                  title="Green Systems"
                  description="Agriculture automation"
                  bgColor="#10a887"
                  imgSrc="https://cdn.shopify.com/s/files/1/1181/6208/t/20/assets/logo_footer.png?516730555842146249"/>
              </div>
              <div className="col-md-4">
                <h1>Grow like a pro</h1>
                <p>some description here</p>
              </div>
            </div>
            <div>
              <div className="col-md-6" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Card
                  title="Mighty Choko"
                  description="Food industry"
                  bgColor="#7C49B8"
                  imgSrc="https://www.welovesolo.com/wp-content/uploads/vector/25/Realistic-chocolate-vector-graphics-03.jpg"/>
              </div>
              <div className="col-md-4">
                <h1>Best chocolates in town</h1>
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
