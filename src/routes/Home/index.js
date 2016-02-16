/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import About from 'containers/About/';
import Skills from 'containers/Skills/';
import Projects from 'containers/Projects/';
import FullscreenPanel from 'components/FullscreenPanel/';

const imageURLS = [
  'dist/empire_state_building_bw_edit-wallpaper-1920x1080.jpg',
  'dist/skyline_new_york_city_2015-wallpaper-1920x1080.jpg',
  'dist/new_york_city_at_night-wallpaper-1920x1080.jpg'
];

const Home = () => (
  <div style={ { width: '100%' } }>
    <FullscreenPanel
      downArrow
      imageURL={imageURLS[0]}
      style={ {
        backgroundAttachment: 'fixed',
        backgroundColor: 'rgba(0,0,0,.9)' } }
    >
      <About />
    </FullscreenPanel>

    <FullscreenPanel
      downArrow
      upArrow
      style={ { backgroundColor: 'rgba(0,0,0,.9)' } }
      imageURL={imageURLS[1]}
    >
      <Skills />
    </FullscreenPanel>

    <FullscreenPanel
      upArrow
      style={ { backgroundColor: 'rgba(0,0,0,.9)' } }
      imageURL={imageURLS[2]}
    >
      <Projects />
    </FullscreenPanel>
  </div>
);

export default Home;
