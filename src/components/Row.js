import React, { Component } from 'react';
import './../assets/bootstrap.css'
import PropTypes from 'prop-types'

class Row extends Component {
  render() {
    const {className, style, children} = this.props
    return (
      <div
        className={"row " + className}
        style={style}
      >
          {children}
      </div>
    );
  }
}

Row.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export default Row;
