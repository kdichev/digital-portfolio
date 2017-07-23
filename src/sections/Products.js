import React, { Component } from 'react';
import './../App.css';
import Row from './../components/Row'
import Animation from './../components/Animation'
import data from './../data'
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import Badge from './../components/Badge'

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
  maxWidth: 400,
  flexDirection:"column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  paddingLeft: 15,
  paddingRight: 15,
}

const styleSheet = createStyleSheet('ToolItem', {
  root: {
    transition : "all 300ms cubic-bezier(.165,.84,.44,1)",
    display:"flex",
    flex: 1,
    maxWidth: 400,
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: 15,
    paddingRight: 15,
    zIndex: 0,
    '@media (max-width: 600px)' : {
      flexDirection: 'row',
      textAlign: "initial",
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
  image: {
    '@media (max-width: 600px)' : {
      width: 130,
    }
  }
});

class Products extends Component {
  constructor(props) {
  super(props);
    this.state = {
      scale: 1,
      zDepth: 0
    };
  }

  handleMouseEnter = (e, index) => {
    console.log(e.target.id);
    this.setState({
      scale: 1.1,
      zDepth: 1,
    })
  }

  handleMouseLeave = (e, index) => {
    console.log(e.target.id);
    this.setState({
      scale: 1,
      zDepth: 0
    })
  }
  render() {
    console.log(this.props);
    return (
      <Animation tx={0} ty={70} tz={0}>
        <Row style={rowStyle}>
            {data.products.map((item, index) =>
              // <Paper id={index} key={index} elevation={this.state.zDepth} className={this.props.classes.root} style={{transform: `scale(${this.state.scale})`}}
              //   onMouseEnter={(e) => this.handleMouseEnter(e, index)}
              //   onMouseLeave={(e) => this.handleMouseLeave(e, index)}>
              //   <img alt="presentation" src={item.img} className={this.props.classes.image}/>
              //   <div
              //     className={this.props.classes.info}
              //     >
              //     <h2 className={this.props.classes.h2}>{item.title}</h2>
              //     <p className={this.props.classes.p}>
              //       {item.text}
              //     </p>
              //     <br />
              //   </div>
              // </Paper>
              <Badge
                item={item}
                index={index}
                classes={this.props.classes}
              />
            )}
        </Row>
      </Animation>
    );
  }
}

export default withStyles(styleSheet)(Products);
