
import './App.css';
import React, { Component } from 'react';
// import VeryEasy from './Components/VeryEasy';
import BasicInfo from './Components/Medium';

// Note:  Solutions should use class components. 
// VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.
 
// EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object
 
// MEDIUM: Replace all of the hard-code with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)
 
// HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)
let people = [ {
  name: 'Alaina',
  age: 24,
  pet: 'dog',
  birthday: 'November 23, 1997'
},
{
  name: 'Gianna',
  age: 23,
  pet: 'guinea pig',
  birthday: 'March 3rd, 1998'
},
{
  name: 'Dara',
  age: 24,
  pet: 'tarantula'
}

]
//hard
function testingthisout(array) {
  return array.map((person) =>{
  return <BasicInfo person={person}/>
  }
  )
}

 class App extends Component {
  constructor(props) {
     //easy
    super(props)
    
    this.state = {
      person: {}
     
    };
  }
  

  render() {
    return (
      
    //  <VeryEasy />
     testingthisout(people)
   
     
    )
  }
}


export default App;
