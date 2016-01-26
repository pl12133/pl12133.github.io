/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import Icons from 'components/Icons/';
import { Grid, Row, Col } from 'react-bootstrap';

const IconBar = () => {
  let children = Object.keys(Icons).map((key, index) => {
    let Icon = Icons[key];
    return (
      <Icon key={key} style={ { display: 'inline-block', width: '10%' } } />
    );
  });
  let rowsOfChildren = (
    <Grid>
      <Row>
        <Col xs={12} sm={6}>
          {children.slice(0, 7)}
        </Col>
        <Col xs={12} sm={6}>
          {children.slice(7)}
        </Col>
      </Row>
    </Grid>
  );

  return (
    <div style={ {
      position: 'absolute',
      top: '75%',
      width: '100%',
      background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))',
      textAlign: 'center' } }
    >
      {rowsOfChildren}
    </div>
  );
};

export default IconBar;

