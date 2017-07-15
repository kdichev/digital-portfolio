import React, { Component } from 'react';
import Title from './../components/Title'
class Trust extends Component {
  render() {
    return (
      <div className="row">
        <Title text="We made a difference in" />
        <div className="col-md-2">
          <img alt="" style={{filter: "grayscale(100%)"}} src="https://logo.clearbit.com/ikea.com" />

        </div>
        <div className="col-md-2">
          <img alt="" style={{filter: "grayscale(100%)"}} src="https://freetrailer.dk/media/1002/logo-color.png" />

        </div>
        <div className="col-md-2">
          <img alt="" style={{filter: "grayscale(100%)"}} src="https://www.silvan.dk/~/media/images/silvan/logos/silvan-logo-2015-webopt.png?vs=1&d=20161219T132755Z&w=150" />

        </div>
        <div className="col-md-2">
          <img alt="" style={{filter: "grayscale(100%)"}} src="https://siteimprove.com/media/1017/siteimprove-logo.png"  width="250px"/>

        </div>
        <div className="col-md-2">
          <img alt="" style={{filter: "grayscale(100%)"}} src="https://logo.clearbit.com/boozt.com" />

        </div>
        <div className="col-md-2">
          <img alt="" style={{filter: "grayscale(100%)"}} src="https://www.nodes.dk/wp-content/themes/nodes2016/img/devices/logo-logo-dark@2x.png" />
        </div>
      </div>
    );
  }
}

export default Trust;
