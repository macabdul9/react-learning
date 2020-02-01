import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  // states
  state = {
    persons : [
      {id:"jkfv", name:"Waheed", age:22},
      {id:"dgjre", name:"Abdul", age:21},
      {id:"sdtghre", name:"Mac", age:20}
    ],
    otherState:"this is some other state",
    showPersons:true
  }
  // switchNameHandler =(newName)=>{
  //   // console.log('was clicked')
  //   // this.state.persons[0].name="Robert"  this will not work to change the state see below
  //   this.setState({persons : [
  //     {name:newName, age:21},
  //     {name:"Viola", age:22},
  //     {name:"Max", age:20}
  //   ]})
  // }

  nameChangeHandler = (event, id) =>{

    // get the index of the id
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id
    })

    // get the person
    //  we don't want to mutate the state directly that's why destructuring
    const person = {
      ...this.state.persons[personIndex]
    }

    // update the name
    person.name = event.target.value

    // get the state
    const persons = [...this.state.persons]

    persons[personIndex].name =  person.name

    // update the state
    this.setState({persons:persons})

    // this.setState({persons : [
    //     {name:'Abdul', age:21},
    //     {name:event.target.value, age:22},
    //     {name:"Max", age:20}
    //   ]})
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // get the persons data
    // instead of mutating(call by reference), let's create a copy of the state using spread operator
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    // console.log(persons)
    this.setState({persons:persons})
  }

  test =()=>{
    console.log('hello world')
  }
  render() {


    let persons = null

    // console.log(this.state.showPersons)
    if (this.state.showPersons){
      persons=(
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            />
        </div>
      );
     
    }
    console.log(this.props.title)

    return (
      //  It is required to wrap it into StyleRoot to work with media query
      <StyleRoot>
        <div className='App'>
          <Cockpit 
            persons={this.state.persons} 
            clicked={this.togglePersonsHandler}
            showPersons={this.state.showPersons}>
          </Cockpit>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

// class bases component is used for state management
// functional component for component management
export default Radium(App);
// export default App;