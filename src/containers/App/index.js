/* eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/* eslint-enable no-unused-vars*/

class App extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    let { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default App;
