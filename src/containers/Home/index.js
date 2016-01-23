/* eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/* eslint-enable no-unused-vars*/

import { Jumbotron } from 'react-bootstrap';

const Home = () => (
  <div style={ { width: '100%' } }>
    <Jumbotron style={ { maxWidth: '20%', textAlign: 'center', margin: '0 auto' } }>
      {'React With The Hotness!'}
    </Jumbotron>
  </div>
);

export default Home;
