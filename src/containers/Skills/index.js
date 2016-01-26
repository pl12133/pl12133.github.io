/* eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/* eslint-enable no-unused-vars*/

import { Jumbotron } from 'react-bootstrap';
import IconBar from 'components/IconBar/';

const Skills = () => (
  <div>
    <Jumbotron style={ {
      paddingLeft: '10px',
      borderRadius: '2em',
      boxShadow: '10px 5px 5px #888888',
      margin: '0 15px' } }
    >
      <h2>{'My favorite languages and tools'}</h2>
    </Jumbotron>
    <IconBar />
  </div>
);

export default Skills;
