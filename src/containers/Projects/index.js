/* eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/* eslint-enable no-unused-vars*/

import { Jumbotron } from 'react-bootstrap';

const Projects = () => (
  <div>
    <Jumbotron style={ {
      paddingLeft: '10px',
      borderRadius: '2em',
      boxShadow: '10px 5px 5px #888888',
      margin: '0 15px' } }
    >
      <h2>{'A few things I\'ve been working on'}</h2>
    </Jumbotron>
  </div>
);

export default Projects;
