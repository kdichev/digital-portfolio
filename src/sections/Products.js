import React, { Component } from 'react';
import './../App.css';
import Row from './../components/Row'
import Animation from './../components/Animation'
import data from './../data'
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Badge from './../components/Badge'

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  paddingBottom: "3%",
  paddingTop: "3%"
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
    return (
      <Animation tx={0} ty={70} tz={0}>
        <Row style={rowStyle}>
            {data.products.map((item, index) =>
              <Badge
                item={item}
                index={index}
                classes={this.props.classes}
                key={index}
              />
            )}
        </Row>
      </Animation>
    );
  }
}

export default withStyles(styleSheet)(Products);
