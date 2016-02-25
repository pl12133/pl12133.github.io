/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import Icons from 'components/Icons/';
import Waypoint from 'react-waypoint';
import { Grid, Row, Col } from 'react-bootstrap';

class IconBar extends Component {
  constructor (...args) {
    super(...args);
    this.handleIconsEnter = this.handleIconsEnter.bind(this);
    this.handleIconsLeave = this.handleIconsLeave.bind(this);
    this.state = {
      hidden: Array.apply(null, Array(14)).map(() => true)
    };
  }

  handleIconsLeave () {
    if (this.cancel) {
      this.cancel();
    }

    setTimeout(() => {
      this.setState({
        hidden: Array.apply(null, Array(14)).map(() => true)
      });
    }, 1250);
  }
  handleIconsEnter () {
    let startIndex = 0;
    let { hidden } = this.state;
    let len = hidden.length;

    this.cancel = () => { console.log('Cancelling Animation'); len = 0; };

    let beginAnimation = () => {
      hidden = this.state.hidden;
      if (startIndex < (len / 4)) {
        let newHidden = hidden.slice();   // startIndex: 1  2  3  4
        newHidden[len / 2 + startIndex] = false;      // 7  8  9  10
        newHidden[startIndex++] = false;              // 0  1  2  3
        newHidden[len / 2 - startIndex] = false;      // 6  5  4  3
        newHidden[len - startIndex] = false;          // 13 12 11 10
        setTimeout(() => {
          this.setState({
            hidden: newHidden
          });
          beginAnimation();
        }, 350);
      } else {
        this.cancel = null;
      }
    };
    setTimeout(beginAnimation, 250);
  }
  render () {
    let { hidden } = this.state;
    let children = Object.keys(Icons).map((key, index) => {
      let Icon = Icons[key];
      let transform = (hidden[index]) ? 'translate3d(0,250%,0)' : 'translate3d(0,0,0)';
      let transition = (hidden[index]) ? '' : 'transform 350ms ease-out';
      return (
        <Icon
          key={key}
          style={ {
            display: 'inline-block',
            width: '10vh'
          } }
          svgStyle={ {
            transform,
            transition
          } }
        />
      );
    });
    return (
      <Grid
        style={ {
          position: 'absolute',
          top: '75%',
          width: '100%',
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))',
          textAlign: 'center'
        } }
      >
        <Row>
          <Col xs={12} sm={6}>
            {children.slice(0, 7)}
          </Col>
          <Col xs={12} sm={6}>
            {children.slice(7)}
          </Col>
        </Row>
        <Waypoint
          onEnter={this.handleIconsEnter}
          onLeave={this.handleIconsLeave}
        />
      </Grid>
    );
  }

}

IconBar.propTypes = {};
export default IconBar;

