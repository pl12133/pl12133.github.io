/* eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/* eslint-enable no-unused-vars*/

import { Jumbotron } from 'react-bootstrap';
import ScrimOverlay from 'components/ScrimOverlay/';

const DemoVideo = ({overlayText, href, videoSrc}) => (
  <a href={href}>
    <ScrimOverlay text={overlayText} />
    <video style={ { width: '100%' } } autoPlay loop>
      <source src={videoSrc} type='video/webm' />
    </video>
  </a>
);

const JumboHeader = ({children}) => (
  <Jumbotron style={ {
    paddingLeft: '10px',
    borderRadius: '2em',
    boxShadow: '10px 5px 5px #888888',
    margin: '0 15px' } }
  >
    <h2>{children}</h2>
  </Jumbotron>
);

const containerStyles = {
  position: 'relative',
  display: 'inline-block',
  width: '30%',
  height: 'auto',
  marginTop: '2%'
};

const Projects = () => (
  <div>
    <JumboHeader>
      {'A few things I\'ve been working on'}
    </JumboHeader>
    <div style={ {
      ...containerStyles,
      marginLeft: '10%'
    } }
    >
      <DemoVideo
        overlayText={'React Solitaire'}
        href={"https://pl12133.github.io/react-solitaire"}
        videoSrc={'dist/solitaire-demo.webm'}
      />
    </div>
    <div style={ {
      ...containerStyles,
      marginLeft: '20%'
    } }
    >
      <DemoVideo
        overlayText={'A personal watch collection'}
        href={'https://pl12133.github.io/watch-collection'}
        videoSrc={'dist/watch-collection-demo.webm'}
      />
    </div>
  </div>
);

export default Projects;
