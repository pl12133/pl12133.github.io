/* eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/* eslint-enable no-unused-vars*/

import Home from 'components/Home/';

import { Panel } from 'react-bootstrap';

class App extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    let { children } = this.props;
    return (
      <Panel>
        {children}
      </Panel>
    );
  }
}

export default App;
