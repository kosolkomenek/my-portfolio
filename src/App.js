import React, { Component } from 'react';
import Intro from './Intro';
import About from './About';
import Skill from './Skill';

class App extends Component {
  render() {
    return (   
      <div className=''>
          <div>
            <Intro />
            <About />
            <Skill />
          </div>
      </div>
    );
  }
}

export default App;