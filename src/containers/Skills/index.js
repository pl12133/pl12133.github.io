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
      <p>
        {'When I started programming I used primarily C++, Lua, and Bash, I now focus on languages used for web development like JavaScript.'}
      </p>
      <p>
        {'I have tinkered with computers for over 20 years of my life and as such my interests are very wide. I am familiar with networking, systems administration, security, reverse engineering, embedded systems, open source software, and software engineering.'}
      </p>
    </Jumbotron>
    <IconBar />
  </div>
);

export default Skills;
