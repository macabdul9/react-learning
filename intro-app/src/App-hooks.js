import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Import our own component
import Person from './Person/Person'
const app = props =>{
  const [personsState, setPersonsState] = useState({
      persons : [
        {name:"Abdul", age:21},
        {name:"Waheed", age:22},
        {name:"Mac", age:20}
      ],
      otherState:'Some other value or something else'
  });
  const switchNameHandler =()=>{
    // console.log('was clicked')
    // personsState.persons[0].name="Robert"  this will not work to change the state see below
    setPersonsState({persons : [
      {name:"Andrew", age:21},
      {name:"Viola", age:22},
      {name:"Max", age:20}
    ]
  });
  };

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
      <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name } age={personsState.persons[0].age }></Person>
        <Person name={personsState.persons[1].name } age={personsState.persons[1].age }>I love football</Person>
        <Person name={personsState.persons[2].name } age={personsState.persons[2].age }></Person>
      </div>
    );
}
export default app
