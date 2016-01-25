/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import IconBar from 'components/IconBar/';
import { Jumbotron } from 'react-bootstrap';

const About = () => (
  <div>
    <Jumbotron>
      <h1>{'Hello!'}</h1>
    </Jumbotron>
    <IconBar />
  </div>
);

export default About;
