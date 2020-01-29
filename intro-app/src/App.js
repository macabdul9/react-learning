import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import our own component
import Person from './Person/Person'

// import Radium, {StyleRoot} from 'radium'

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

     //inline css applied on button
     const style ={
      backgroundColor:'green',
      border:'2px solid blue',
      font:'inherit',
      padding:'8px',
      cursor:'pointer',
      // ':hover':{
      //   backgroundColor:'lightgreen',
      //   color:'black'
      // }
    }

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
              key={person.id}
              change={(event)=>this.nameChangeHandler(event, person.id)}
              ></Person>
          })}
         {/* <Person
          name={this.state.persons[0].name }
          age={this.state.persons[0].age }></Person>
          <Person
            name={this.state.persons[1].name }
            age={this.state.persons[1].age }
            change={this.nameChangeHandler}>I love football</Person>
          <Person
            name={this.state.persons[2].name }
            age={this.state.persons[2].age }
            click={() => this.switchNameHandler('Abdul')}></Person> */}
        </div>
      );
      style.backgroundColor="red";

      // style[':hover']={
      //   backgroundColor:'salmon',
      //   color:'black'
      // }
    }

    // Applying dynamic classes
    let classes = []
    let len = this.state.persons.length
    if(len <=2){
      classes.push('red'); // red class
    }
    if(len <= 1){
      classes.push('bold') // red, bold classes
    }

    return (
      //  It is required to wrap it into StyleRoot to work with media query
      // <StyleRoot>
        <div className='App'>
          <button
            onClick={this.togglePersonsHandler}
            style={style}>Toggle Name</button>
          <p className={classes.join(' ')}>Hi, I am react App</p>
          {persons}
        </div>
      // {/* </StyleRoot> */}
    );
  }
}
// export default Radium(App);
export default App;