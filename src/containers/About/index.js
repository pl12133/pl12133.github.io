/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import { Jumbotron } from 'react-bootstrap';

const About = () => (
  <div>
    <Jumbotron style={ {
      paddingLeft: '10px',
      borderRadius: '2em',
      boxShadow: '10px 5px 5px #888888',
      margin: '0 15px' } }
    >
      <h1>{'Hello!'}</h1>
      <p>
        {'My name is Peter, I live in New York and I like to play with computers.'}
      </p>
    </Jumbotron>
  </div>
);

export default About;
