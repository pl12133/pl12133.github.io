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
      <h1>{'Welcome!'}</h1>
      <p>
        {'My name is Peter, I live in New York and I have been interested in computers my whole life. I am currently focusing on expanding my skills in JavaScript because of the power it has in both client and server applications.'}
      </p>
      <p>
        {'My choice of library for making web applications is React because of its large community and the many open source modules available.'}
      </p>
    </Jumbotron>
  </div>
);

export default About;
