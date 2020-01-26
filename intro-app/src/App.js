import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import our own component
import Person from './Person/Person'
class App extends Component {
  // states
  state = {
    persons : [
      {name:"Abdul", age:21},
      {name:"Waheed", age:22},
      {name:"Mac", age:20}
    ]
  }

  switchNameHandler =()=>{
    // console.log('was clicked')
    // this.state.persons[0].name="Robert"  this will not work to change the state see below
    this.setState({persons : [
      {name:"Andrew", age:21},
      {name:"Viola", age:22},
      {name:"Max", age:20}
    ]})
  }
  render() {
    return (
      <div className='App'>
        <div >
        <h1>I am react</h1>
        <p>This app is working</p>
        <p>Hello there</p>
      </div>
      <div>
        <p>I am new Component</p>
      </div>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name } age={this.state.persons[0].age }></Person>
      <Person name={this.state.persons[1].name } age={this.state.persons[1].age }>I love football</Person>
      <Person name={this.state.persons[2].name } age={this.state.persons[2].age }></Person>
      </div>
    );
  }
}
export default App;
