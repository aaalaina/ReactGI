import React, { Component } from 'react'

export default class BasicInfo extends Component {
  constructor(props) {
    //easy
   super(props)
   
   this.state = {
     person: {
      name: this.props.person.name,
      age: this.props.person.age,
      pet: this.props.person.pet,
      birthday: this.props.person.birthday

     }
    
   };
  }
   
  render() {
    return(
      <div>
        <h2>Name: {this.props.person.name}</h2>
        <h2>Age: {this.props.person.age}</h2>
        <h2>pet: {this.props.person.pet}</h2>
        <h2>Birthday: {this.props.person.birthday}</h2>
      </div>
    )

     
    
  }
}
