import React, { Component} from 'react';
import Radium, {StyleRoot} from 'radium';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary'
import WithClass from '../hoc/withClass';
import withClass from '../hoc/withClass'
import AuthContext from '../context/auth-context'

class App extends Component {

  // constructor
  constructor(props){
    super(props);
    console.log('[App.js] constructor')
  }
  // states, which can be intiized using state
  state = {
    persons : [
      {id:"jkfv", name:"Ab", age:23},
      {id:"dgjre", name:"Abdul", age:21},
      {id:"sdtghre", name:"Mac", age:20}
    ],
    otherState:"this is some other state",
    showPersons:false,
    showCockpit:true,
    changeCounter:0,
    isAuthenticated:false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentWillMount(){
    console.log('[App.js] componentWillMount')
  }

  switchNameHandler =(newName)=>{
    // console.log('was clicked')
    // this.state.persons[0].name="Robert"  this will not work to change the state see below
    this.setState({persons : [
      {name:newName, age:21},
      {name:"Viola", age:22},
      {name:"Max", age:20}
    ]})
  }

  nameChangeHandler = (event, id) =>{

    // get the index of the id
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id
    });

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
    this.setState((prevState, props)=>{
      return {persons:persons, changeCounter:prevState.changeCounter+1}
    })

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

  loginHandler = () =>{
    this.setState({isAuthenticated:!this.state.isAuthenticated})
  }
  render() {

    console.log('[App.js] render')

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
        {/* <div className='App'> */}
        {/* <WithClass className='App'> */}
        <Aux>
          <button onClick={()=>{this.setState({showCockpit:!this.state.showCockpit})}}>Remove Cockpit</button>
          <AuthContext.Provider value={{
            isAuthenticated:this.state.isAuthenticated,
            login:this.loginHandler
          }}>
            {this.state.showCockpit?(
              <Cockpit
                personsLength={this.state.persons.length} 
                clicked={this.togglePersonsHandler}
                showPersons={this.state.showPersons}>  
              </Cockpit>)
            :null}
            {persons}
          </AuthContext.Provider>
        </Aux>
        {/* </WithClass>   */}
        {/* </div> */}
      </StyleRoot>
    );
  }
}

// class bases component is used for state management
// functional component for component management
export default withClass(Radium(App), 'App');
// export default App;