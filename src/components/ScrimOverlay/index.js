/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

class ScrimOverlay extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      hover: false
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseLeave (e) {
    this.setState({
      hover: false
    });
  }
  handleMouseOver (e) {
    this.setState({
      hover: true
    });
  }
  render () {
    let { text, style } = this.props;
    let { hover } = this.state;

    let textElem = '';
    let backgroundImage = 'none';
    if (!hover) {
      textElem = (
        <h3 style={ {
          color: 'white',
          margin: '5%'
        } }
        >
          {text}
        </h3>
      );
      backgroundImage = 'linear-gradient( rgba(0,0,0,.5), rgba(0,0,0, .5) )';
    }
    return (
      <div
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseLeave}
        style={ {
          position: 'absolute',
          width: '100%',
          height: '100%',
          transition: 'background 1500ms linear',
          zIndex: '1',
          backgroundImage,
          ...style
        } }
      >
        {textElem}
      </div>
    );
  }
}

ScrimOverlay.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object
};

export default ScrimOverlay;
