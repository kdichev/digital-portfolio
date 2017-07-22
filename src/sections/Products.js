import React, { Component } from 'react';
import './../App.css';
import Row from './../components/Row'
import Animation from './../components/Animation'
import data from './../data'

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  paddingBottom: "3%",
  paddingTop: "3%"
}

const cardStyle = {
  display:"flex",
  flex: 1,
  minWidth: 300,
  maxWidth: 400,
  flexDirection:"column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  paddingLeft: 15,
  paddingRight: 15
}

class Products extends Component {
  constructor(props) {
  super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Animation slideOutIn={150}>
        <Row style={rowStyle}>
            {data.products.map((item, index) =>
              <div style={cardStyle} key={index}>
                <img alt="presentation" src={item.img} />
                <h2>{item.title}</h2>
                <br />
                <p>
                  {item.text}
                </p>
              </div>
            )}
        </Row>
      </Animation>
    );
  }
}

export default Products;
