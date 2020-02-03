import React from 'react'
import Person from './Person/Person'
import Radium from 'radium'


class Persons extends React.Component{

  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps', props)
  //   return state
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate')
  //   return true;
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   console.log('[Persons.js] ')
  // }
  // componentDidUpdate(){
  //   console.log('[Persons.js] componentDidUpdate')
  // }
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.persons!==this.props.persons){
      return true;
    }else{
      return false;
    }
  }
  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount')
  }

  render(){
    console.log('[Persons.js] rendering...')
    return this.props.persons.map((person, index) =>{
      return <Person
        click={() =>this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        change={(event)=>this.props.changed(event, person.id)}
        ></Person>
  });
  }

}



       
export default Radium(Persons);
