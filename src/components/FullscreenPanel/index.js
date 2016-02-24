/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import smoothScroll from 'smoothscroll';
import ScrollArrow from 'components/ScrollArrow/';

class FullscreenPanel extends Component {
  constructor (...args) {
    super(...args);
    let ownFuncs = [ 'renderDownArrow', 'renderUpArrow' ];
    ownFuncs.forEach(func => {
      if (this[func]) {
        this[func] = this[func].bind(this);
      } else {
        console.error(`Could not self bind ${func} to ${this}`);
      }
    });
  }

  renderUpArrow () {
    let handleUpArrowClicked = (e) => {
      let { container } = this.refs;
      smoothScroll(container.offsetTop - container.offsetHeight);
    };
    return (
      <ScrollArrow
        onClick={handleUpArrowClicked}
        onMouseOver={ () => 1 }
        upOrDown={'up'}
        leftOrRight={'right'}
      />
    );
  }

  renderDownArrow () {
    let handleDownArrowClicked = (e) => {
      let { container } = this.refs;
      smoothScroll(container.offsetTop + container.offsetHeight);
    };
    return (
      <ScrollArrow
        onClick={handleDownArrowClicked}
        onMouseOver={ () => 1 }
        upOrDown={'down'}
        leftOrRight={'left'}
      />
    );
  }

  render () {
    let { downArrow, upArrow, imageURL, style = {}, children } = this.props;

    let downArrowElem = (downArrow) ? this.renderDownArrow() : '';
    let upArrowElem = (upArrow) ? this.renderUpArrow() : '';
    let background = (imageURL)
      ? {
        background: `url(\'${imageURL}\') no-repeat scroll center`,
        backgroundSize: 'cover'
      }
      : {};
    let containerStyle = {
      position: 'relative',
      width: '100%',
      height: '100vh',
      paddingTop: '2%',
      ...background,
      ...style
    };
    return (
      <div style={containerStyle}
        ref={'container'}
      >
        {children}
        {downArrowElem}
        {upArrowElem}
      </div>
    );
  }
}

FullscreenPanel.propTypes = {
  downArrow: PropTypes.bool,
  upArrow: PropTypes.bool,
  imageURL: PropTypes.string,
  style: PropTypes.object
};

export default FullscreenPanel;
