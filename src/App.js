
import './App.css';
import React, { Component } from 'react';
import VeryEasy from './Components/VeryEasy';
import Medium from './Components/Medium';
 class App extends Component {
  

  render() {
    return (
      <div>
     <VeryEasy />
     <Medium />
     </div>
    )
  }
}


export default App;
