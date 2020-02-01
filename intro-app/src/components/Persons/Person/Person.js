// A component is just a javascript function which returns some JSX
import React from 'react';
import './Person.css'
import Radium from 'radium';

const person = (props) =>{
    // adding media query
    const style = {
        '@media (min-width: 500px)':{
            width:'450px',
        }
    }

    return (
        <div className="Person" style={style}>
            <h1 onClick={props.click}>I am {props.name}, I am {props.age} years old </h1>
            <p>{props.children}</p>
            {/* this is call two way binding */}
            <input type='text'  onChange={props.change} value={props.name}/>
        </div>
    )
}

export default Radium(person);
// export default person