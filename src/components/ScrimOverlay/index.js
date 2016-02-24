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
    let { header, text, style } = this.props;
    let { hover } = this.state;

    let textElems = [];
    let backgroundImage = 'none';
    if (!hover) {
      let whiteTextStyle = { color: 'white', margin: '5%' };
      header && textElems.push(
        <h3 key={'header'} style={whiteTextStyle}>
          {header}
        </h3>
      );
      text && textElems.push(
        <p key={'text'} style={whiteTextStyle}>
          {text}
        </p>
      );
      backgroundImage = 'linear-gradient( rgba(0,0,0,.8), rgba(0,0,0, .8) )';
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
        {textElems}
      </div>
    );
  }
}

ScrimOverlay.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object
};

export default ScrimOverlay;
