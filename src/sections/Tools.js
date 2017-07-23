import React, { Component } from 'react';
import Title from './../components/Title'
import Row from './../components/Row'
import Animation from './../components/Animation'
import Badge from './../components/Badge'
import data from './../data'
import { withStyles, createStyleSheet } from 'material-ui/styles';

const rowStyle = {
  paddingBottom: "3%",
  paddingTop: "3%"
}

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
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
  paddingRight: 15
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
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    '@media (max-width: 600px)' : {
      flexDirection: 'column',
      textAlign: "initial",
      paddingLeft: 0,
      paddingRight: 0,
    }
  }
});


class Tools extends Component {
  render() {
    return (
      <Row style={rowStyle}>
        <Animation>
          <Title text={data.tools.title}/>
          <div className={this.props.classes.container}>
            {data.tools.tool.map((item, index) =>
              // <div style={cardStyle} key={index}>
              //   <div style={{borderRadius: "50%", width: 200, height: 200, margin: "0 auto"}}>
              //     <img alt="presentation" src={item.img} width="100%"/>
              //   </div>
              //   <h2>{item.title}</h2>
              //   <p>
              //     {item.text}
              //   </p>
              //   <br />
              // </div>
              <Badge
                item={item}
                index={index}
                classes={this.props.classes}
              />
            )}
          </div>
        </Animation>
      </Row>
    );
  }
}

export default withStyles(styleSheet)(Tools);
