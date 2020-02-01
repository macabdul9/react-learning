import React from 'react'
import Radium from 'radium'
import './Cockpit.css'


const cockpit = (props) => {
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
