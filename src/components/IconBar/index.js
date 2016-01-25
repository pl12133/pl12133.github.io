/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import Icons from 'components/Icons/';

const IconBar = () => {
  let children = Object.keys(Icons).map(key => {
    let Icon = Icons[key];
    return (
      <Icon key={key} style={ { display: 'inline-block', width: '5vw' } } />
    )
  });
  return (
    <div style={ {
      position: 'absolute',
      top: '75%',
      width: '100%',
      background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))',
      textAlign: 'center' } }
    >
      {children}
    </div>
  )
}

export default IconBar;

