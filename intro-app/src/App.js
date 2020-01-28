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

  changeNameHandler =(event) =>{
    this.setState({persons : [
        {name:'Abdul', age:21},
        {name:event.target.value, age:22},
        {name:"Max", age:20}
      ]})
  }

  togglePersonsHandler = (props) =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // get the persons data
    console.log(1)
    const persons = this.state.persons
    persons.splice(personIndex, 1)
    console.log(persons)
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
          {/* this code is JavaScript alternative of below code snippets written in JSX */}
          {this.state.persons.map((person, index) => {
            return <Person
              click={() =>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              ></Person>
          })}
          {/* <Person
          name={this.state.persons[0].name }
          age={this.state.persons[0].age }></Person>
          <Person
            name={this.state.persons[1].name }
            age={this.state.persons[1].age }
            change={this.changeNameHandler}>I love football</Person>
          <Person
            name={this.state.persons[2].name }
            age={this.state.persons[2].age }
            click={() => this.switchNameHandler('Abdul')}></Person> */}
        </div>
      );
    }
    //inline css applied on button
    const style ={
        backgroundColor:'green',
        border:'4px solid blue',
        font:'inherit',
        padding:'8px',
        cursor:'pointer'

    }
    return (
      <div className='App'>
      <button
        onClick={this.test}
        style={style}>Toggle Name</button>
        {persons}
      </div>
    );
  }
}
export default App;