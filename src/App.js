import React, { Component } from 'react';

import './App.css';
import { Like } from './components/like';
import Likeresult  from './components/likeresult';

class App extends Component {
  render() {
    return (
      <div className="App">
   <Like />
   <Likeresult />
      </div>
    );
  }
}

export default App;
