import React from 'react'
import Radium from 'radium'
import './Cockpit.css'


const cockpit = function Cockpit(props){

  // React.useEffect(() => {
  //   console.log('[Cockpit..js] useEffect')
  //   // http request
  //   setTimeout(()=>{
  //     alert('data saved to cloud')
  //   }, 1000)
  // }, props.persons)

  React.useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    setTimeout(()=>{
      alert('data saved into cloud')
    }, 1)
  }, [props.persons])

    // Applying dynamic classes
    let classes = []
    let len = props.persons.length
    if(len <=2){
        classes.push('red'); // red class
    }
    if(len <= 1){
        classes.push('bold') // red, bold classes
    }

     //inline css applied on button
    const style ={
        backgroundColor:'green',
        border:'2px solid blue',
        font:'inherit',
        padding:'8px',
        cursor:'pointer',
        ':hover':{
          backgroundColor:'lightgreen',
          color:'black'
        }
    }
    if (props.showPersons){
        style.backgroundColor="red";

        style[':hover']={
          backgroundColor:'salmon',
          color:'black'
        }

    }

    return (
       <div>
           <button
            onClick={props.clicked}
            style={style}>Toggle Name</button>
          <p className={classes.join(' ')}>Hi, I am react App</p>
       </div>
    );
}

export default Radium(cockpit);
