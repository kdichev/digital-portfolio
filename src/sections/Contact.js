import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Title from './../components/Title'

class Contact extends Component {
  render() {
    return (
      <div className="row">
        <Title text="Have a project for us?" />
        <RaisedButton label="Contact us" primary={true}/>
      </div>
    );
  }
}

export default Contact;
