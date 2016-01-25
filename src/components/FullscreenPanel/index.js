/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import FontAwesome from 'react-fontawesome';
import smoothScroll from 'smoothscroll';

class FullscreenPanel extends Component {
  constructor (...args) {
    super(...args);
    let ownFuncs = [ 'renderDownArrow' ];
    ownFuncs.forEach(func => {
      if (this[func]) {
        this[func] = this[func].bind(this);
      } else {
        console.error(`Could not self bind ${func} to ${this}`);
      }
    });
  }
  renderDownArrow () {
    let handleArrowClicked = (e) => {
      let { container } = this.refs;
      smoothScroll(container.offsetTop + container.offsetHeight);
    };
    return (
      <FontAwesome style={ {
        position: 'absolute',
        left: '15%',
        top: '100%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1',
        color: 'orange'
      } }
        name={'angle-double-down'}
        size={'4x'}
        onClick={handleArrowClicked}
      />
    );
  }
  render () {
    let { color, downArrow, imageURL, children } = this.props;
    let arrow = (downArrow) ? this.renderDownArrow() : '';
    let background = (imageURL) ? `url(\'${imageURL}\') no-repeat scroll center` : '';
    let style = {
      position: 'relative',
      width: '100%',
      height: '100vh',
      border: '2px solid ' + (color || 'blue'),
      background
    };
    return (
      <div style={style}
        ref={'container'}
      >
        {children}
        {arrow}
      </div>
    );
  }
}

FullscreenPanel.propTypes = {
  color: PropTypes.string,
  downArrow: PropTypes.bool,
  imageURL: PropTypes.string
};

export default FullscreenPanel;
