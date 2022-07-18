
import './App.css';
import React, { Component } from 'react'

 class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      person: {}
    };
   

  }

  render() {
    return (
      <div> Alaina Harris<br/>
              704 968 3413<br/>
             November 23, 1997
            </div>
    )
  }
}


export default App;
