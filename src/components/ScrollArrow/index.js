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
    let name = 'angle-double-' + upOrDown;
    let left;
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
          verticalAlign: 'center',
          zIndex: '1' } }
      >
        <div
          style={ {
            margin: '0 auto',
            width: '50%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: 'rgba(256,256,256,.9)',
            boxShadow: '2px 1px 1px #eeeeee' } }
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
