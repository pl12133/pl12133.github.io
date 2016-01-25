/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import About from 'containers/About/';
import Skills from 'containers/Skills/';
import Projects from 'containers/Projects/';
import FullscreenPanel from 'components/FullscreenPanel/';

const imageURLS = [
  'http://assets.sheratonlincolnharbor.com/lps/assets/u/1600x900iStock_000041057230XXXLarge.jpg',
  'http://loving-newyork.com/wp-content/uploads/2015/10/empire-state-building-new-york.jpg',
  'http://justgoodvibe.com/wp-content/uploads/2015/12/one-world-trade-center-6.jpg'
];

const Home = () => (
  <div style={ { width: '100%' } }>
    <FullscreenPanel
      color='blue'
      downArrow
      imageURL={imageURLS[0]}
    >
      <About />
    </FullscreenPanel>

    <FullscreenPanel
      color='orange'
      downArrow
      imageURL={imageURLS[1]}
    >
      <Skills />
    </FullscreenPanel>

    <FullscreenPanel
      color='purple'
      downArrow
      imageURL={imageURLS[2]}
    >
      <Projects />
    </FullscreenPanel>
  </div>
);

export default Home;
