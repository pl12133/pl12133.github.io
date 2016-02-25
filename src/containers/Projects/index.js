/* eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/* eslint-enable no-unused-vars*/

import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import ScrimOverlay from 'components/ScrimOverlay/';

// Width is adjusted by -30px for bootstrap grid mergins
const DemoVideo = ({overlayHeader, overlayText, href, videoSrc, fallbackImageSrc}) => (
  <a href={href} style={ { display: 'block' } }>
    <ScrimOverlay
      header={overlayHeader}
      text={overlayText}
      style={ { width: 'calc(100% - 30px)' } }
    />
    <video
      style={ { width: '100%' } }
      autoPlay
      loop
      poster={fallbackImageSrc}
    >
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

const Projects = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <JumboHeader>
          {'A few things I\'ve been working on'}
        </JumboHeader>
      </Col>
    </Row>
    <Row style={ { marginTop: '1%' } }>
      <Col xs={6} md={4}>
        <DemoVideo
          overlayHeader={'React Solitaire'}
          overlayText={'A game of Solitaire written in React with Redux'}
          href={"https://pl12133.github.io/react-solitaire"}
          videoSrc={'dist/solitaire-demo.webm'}
          fallbackImageSrc={'dist/solitaire-demo.png'}
        />
      </Col>
      <Col xs={6} md={4}>
        <DemoVideo
          overlayHeader={'watch-collection'}
          overlayText={'A personal watch collection'}
          href={'https://pl12133.github.io/watch-collection'}
          videoSrc={'dist/watch-collection-demo.webm'}
          fallbackImageSrc={'dist/watch-collection-demo.png'}
        />
      </Col>
      <Col xs={6} md={4}>
        <DemoVideo
          overlayHeader={'node-twitch-clipper'}
          overlayText={'A module for creating clips from Twitch.tv VODs'}
          href={'https://pl12133.github.io/node-twitch-clipper-demo'}
          videoSrc={''}
          fallbackImageSrc={'dist/twitch-clipper-demo.png'}
        />
      </Col>
    </Row>
  </Grid>
);

export default Projects;
