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
    <div
      style={ {
        width: '30%',
        height: 'auto',
        marginTop: '2%',
        marginLeft: '10%' } }
    >
      <a href={"https://pl12133.github.io/react-solitaire"}>
        <image
          style={ {
            width: '100%',
            borderRadius: '1em' } }
          src='dist/solitaire-demo.gif'
        />
      </a>
    </div>
  </div>
);

export default Projects;
