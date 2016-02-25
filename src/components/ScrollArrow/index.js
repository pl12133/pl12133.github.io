/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import FontAwesome from 'react-fontawesome';

class ScrollArrow extends Component {

  constructor (...args) {
    super(...args);

    let ownFuncs = [ 'handleMouseOver', 'handleMouseOut' ];
    ownFuncs.forEach(func => {
      if (this[func]) {
        this[func] = this[func].bind(this);
      } else {
        console.error(`Could not self bind ${func} to ${this}`);
      }
    });
    this.state = {
      hover: false
    };
  }

  handleMouseOver (e) {
    this.setState({ hover: true });
  }

  handleMouseOut (e) {
    this.setState({ hover: false });
  }

  render () {
    let { leftOrRight, upOrDown, onClick } = this.props;
    let { hover } = this.state;
    let name = 'angle-double-' + upOrDown;
    let transform;
    let left;
    if (upOrDown === 'up') {
      transform = (hover) ? 'translateY(-33%)' : 'translateY(0)';
    } else {
      transform = (hover) ? 'translateY(33%)' : 'translateY(0)';
    }
    if (leftOrRight === 'left') {
      left = '15%';
    } else if (leftOrRight === 'right') {
      left = '85%';
    }

    return (
      <div
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onClick={onClick}
        style={ {
          width: '10%',
          position: 'absolute',
          top: '90%',
          left,
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: '1' } }
      >
        <div
          style={ {
            transition: 'transform .5s ease-in-out',
            transform,
            cursor: 'pointer',
            width: '4em',
            height: 'auto',
            margin: '0 auto',
            borderRadius: '50%',
            backgroundColor: 'rgba(256,256,256,.9)',
            boxShadow: '2px 1px 1px #eeeeee'
          } }
        >
          <FontAwesome
            style={ { color: (this.state.hover) ? 'purple' : 'orange' } }
            name={name}
            size={'4x'}
          />
        </div>
      </div>
    );
  }
}
ScrollArrow.propTypes = {
  leftOrRight: PropTypes.oneOf(['left', 'right']).isRequired,
  upOrDown: PropTypes.oneOf(['up', 'down']).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ScrollArrow;
