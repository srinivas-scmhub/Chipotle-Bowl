import React, { Component } from 'react';
import Chipotle from './Containers/Chipotle';
import Bowl from './Components/Bowl';

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
      <Chipotle>
      <Bowl />
      </Chipotle>
      </div>
    );
  }
}

export default App;
